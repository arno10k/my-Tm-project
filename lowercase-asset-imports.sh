#!/bin/bash

SRC="/Users/server/Documents/GitHub/my-Tm-project/tm/src"

find "$SRC" -type f -name "*.jsx" -print0 | while IFS= read -r -d '' file; do
    python3 - "$file" <<'PY'
import sys
import re

file = sys.argv[1]

with open(file, "r", encoding="utf-8") as f:
    content = f.read()

# Lowercase everything after assets/ until the closing quote
content = re.sub(
    r"""((?:\.\.?/)+assets/)([^'"]+)""",
    lambda m: m.group(1) + m.group(2).lower(),
    content
)

with open(file, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Processed: {file}")
PY
done