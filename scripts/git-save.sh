#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Her iş adımının sonunda çalıştırılır: çalışma ağacını commit'ler ve Arena
# dalına push'lar. Push reddedilirse (sandbox geri yüklemesi .git'i taze
# klonlamış olabilir) otomatik kurtarma denenir: önce güvenli yedek branch,
# sonra uzak ucun üzerine soft reset + yeniden commit + push.
#
# Kullanım: npm run save -- "özet mesaj"
# ---------------------------------------------------------------------------
set -uo pipefail
BRANCH="${SAVE_BRANCH:-arena/01a08ac0-webultra}"
MSG="${1:-chore: çalışma ağacı kaydı}"
cd "$(git rev-parse --show-toplevel)" || exit 1

# 0) ignore edilen ama kaynak niteliğindeki dosyalar hakkında uyar (sessiz kayıp olmasın)
IGNORED_SRC=$(git status --ignored --short 2>/dev/null | grep '^!!' | grep -E 'public/images/_src|src/|scripts/|docs/' | head -5)
[ -n "$IGNORED_SRC" ] && echo "! uyarı: ignore edilen kaynak dosyalar var: $IGNORED_SRC"

# 1) commit
git add -A
if git diff --cached --quiet; then
  echo "· staged değişiklik yok — yeni commit atlandı"
else
  git commit -q -m "$MSG" && echo "· commit $(git rev-parse --short HEAD): $MSG"
fi

# 2) push (hızlı ileri)
git config "remote.origin.fetch" '+refs/heads/*:refs/remotes/origin/*' >/dev/null 2>&1
if git push -q origin "HEAD:$BRANCH" 2>/tmp/git-save-push.err; then
  REMOTE=$(git ls-remote origin "$BRANCH" | cut -c1-7)
  LOCAL=$(git rev-parse --short=7 HEAD)
  if [ "$REMOTE" = "$LOCAL" ]; then
    echo "✓ kayıtlı: origin/$BRANCH = $LOCAL (uzakla birebir aynı)"
    exit 0
  fi
  echo "! push tamam ama uzak uç farklı görünüyor ($REMOTE) — kurtarma denenecek"
fi

# 3) kurtarma: önce yedek branch (iş asla kaybolmasın)
SHA=$(git rev-parse --short HEAD)
BACKUP="backup/$(date +%Y%m%d-%H%M%S)-$SHA"
if git push -q origin "HEAD:$BACKUP" 2>>/tmp/git-save-push.err; then
  echo "· yedek branch: origin/$BACKUP (işler güvende)"
else
  echo "× yedek push da başarısız — ağ/erişim sorunu olabilir:"
  tail -3 /tmp/git-save-push.err
  exit 1
fi

git fetch -q origin "+refs/heads/$BRANCH:refs/remotes/origin/$BRANCH" 2>>/tmp/git-save-push.err
if [ -z "$(git rev-parse -q --verify "refs/remotes/origin/$BRANCH")" ]; then
  echo "× uzak dal okunamadı; yedek branch duruyor: $BACKUP"
  exit 1
fi

# 4) uzak ucun üzerine çalışılan ağacı yeniden commit'le
git reset --soft "origin/$BRANCH"
DEL=$(git diff --cached --diff-filter=D --name-only | wc -l)
if [ "$DEL" -gt 0 ]; then
  echo "! dikkat: uzakta olan ama bizde olmayan $DEL dosya var (silme olarak commit'lenecek):"
  git diff --cached --diff-filter=D --name-only | head -5 | sed 's/^/   /'
fi
if ! git diff --cached --quiet; then
  git commit -q -m "kurtarma: sandbox geri yüklemesi sonrası çalışma ağacı ($MSG)" &&
    echo "· kurtarma commit'i $(git rev-parse --short HEAD)"
fi

if git push -q origin "HEAD:$BRANCH" 2>>/tmp/git-save-push.err; then
  echo "✓ kayıtlı: origin/$BRANCH = $(git rev-parse --short=7 HEAD) (kurtarma başarılı)"
  git push -q origin --delete "$BACKUP" 2>/dev/null && echo "· yedek branch temizlendi"
  exit 0
fi

echo "× ana dala push hâlâ reddedildi; işler $BACKUP dalında güvende."
echo "  elle bak: git log --oneline origin/$BRANCH..$BACKUP"
exit 1
