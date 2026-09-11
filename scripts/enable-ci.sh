#!/usr/bin/env bash
# CI'ı etkinleştirir: ops/ci.github-workflow.yml → .github/workflows/ci.yml
# Not: GitHub App'inin "workflows" izni yoksa push reddedilir — o durumda dosyayı
# GitHub arayüzünden (Add file → Commit changes) kendin ekleyebilirsin.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
mkdir -p .github/workflows
cp ops/ci.github-workflow.yml .github/workflows/ci.yml
echo "· .github/workflows/ci.yml hazır"
if git add .github/workflows/ci.yml && git commit -q -m "ci: GitHub Actions doğrulama iş akışı (npm run verify)"; then
  if git push -q origin "HEAD:${SAVE_BRANCH:-arena/01a08ac0-webultra}"; then
    echo "✓ CI workflow itildi — PR'lerde otomatik çalışacak"
  else
    echo "! push reddedildi (muhtemelen workflows izni) — dosya lokalde duruyor; GitHub arayüzünden ekle"
  fi
fi
