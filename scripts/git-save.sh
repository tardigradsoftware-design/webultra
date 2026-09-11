#!/usr/bin/env bash
# Her iş adımının sonunda çalıştırılır: çalışma ağacını commit'ler ve Arena dalına push'lar.
# Kullanım: npm run save -- "mesaj"   |   bash scripts/git-save.sh "mesaj"
set -uo pipefail
BRANCH="arena/01a08ac0-webultra"
MSG="${1:-chore: çalışma ağacı kaydı}"

cd "$(git rev-parse --show-toplevel)" || exit 1

git add -A
if git diff --cached --quiet; then
  echo "· staged değişiklik yok — commit atlandı"
else
  git commit -q -m "$MSG" && echo "· commit $(git rev-parse --short HEAD): $MSG"
fi

# Push önce normal denenir; reddedilirse (uzak dallanmışsa) yedek branch'e alınır, sonra rebase önerilir.
if git push -q origin "HEAD:$BRANCH" 2>/tmp/git-save-push.err; then
  echo "✓ push → origin/$BRANCH ($(git rev-parse --short HEAD))"
  exit 0
fi

echo "· push reddedildi: $(head -2 /tmp/git-save-push.err | tr '\n' ' ')"
BACKUP="backup/$(date +%Y%m%d-%H%M%S)-$(git rev-parse --short HEAD)"
git push -q origin "HEAD:$BACKUP" && echo "✓ yedek branch oluşturuldu: origin/$BACKUP (işler güvende)"
echo "→ sonraki adım: git fetch origin && git rebase origin/$BRANCH && git push origin HEAD:$BRANCH"
exit 1
