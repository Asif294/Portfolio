#!/usr/bin/env bash
# Reports rendered content height vs the A4 printable height (96dpi).
# Usage: ./measure.sh [resume.html]
set -e
cd "$(dirname "$0")"
SRC="${1:-resume.html}"
python3 - "$SRC" <<'PY'
import sys
src = open(sys.argv[1]).read()
probe = '<script>addEventListener("load",()=>{document.title="H="+document.body.scrollHeight})</script></body>'
open('_probe.html','w').write(src.replace('</body>', probe))
PY
H=$(google-chrome --headless --disable-gpu --no-sandbox --window-size=703,3000 \
      --virtual-time-budget=3000 --dump-dom ./_probe.html 2>/dev/null \
    | grep -o 'H=[0-9]*' | head -1 | cut -d= -f2)
rm -f _probe.html
LIMIT=1047   # (297mm - 2*10mm margin) at 96dpi
echo "content=${H}px  printable=${LIMIT}px  slack=$((LIMIT - H))px"
[ "$H" -le "$LIMIT" ] && echo "FITS ONE PAGE" || echo "OVERFLOWS by $((H - LIMIT))px"
