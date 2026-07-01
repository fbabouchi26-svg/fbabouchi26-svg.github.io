#!/bin/bash
# Double-click this file to publish Ibrahim's Hub to the live site.
# (First time: right-click → Open, then click "Open" to allow it.)
cd "$(dirname "$0")"
echo "Publishing Ibrahim's Hub..."
# clear any stale git locks
rm -f .git/index.lock .git/refs/remotes/origin/main.lock 2>/dev/null
git add -A
git commit -m "Update hub: Soccer Lab + daily plan sheets, linked from hub"
git push origin main
echo ""
echo "✅ Done. Your site updates in about a minute:"
echo "   https://fbabouchi26-svg.github.io/"
echo ""
read -n 1 -s -r -p "Press any key to close this window."
