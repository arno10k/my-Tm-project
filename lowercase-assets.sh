#!/bin/bash

DIR="/Users/server/Documents/GitHub/my-Tm-project/tm/src/assets"

find "$DIR" -depth -type f | while IFS= read -r file; do
    dir=$(dirname "$file")
    base=$(basename "$file")
    lower=$(printf '%s' "$base" | tr '[:upper:]' '[:lower:]')

    if [ "$base" != "$lower" ]; then
        temp="$dir/.tmp_lowercase_$$"
        mv "$file" "$temp"
        mv "$temp" "$dir/$lower"
        echo "Renamed: $base -> $lower"
    fi
done
