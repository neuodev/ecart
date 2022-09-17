#!/bin/bash

tsfiles=$( ls ./*/*.js )

for file in $tsfiles; do
    f_name=$( echo "$file" | cut -d '.' -f 2 )
    new_file="$f_name.ts"
    echo "$file > $new_file"
    mv "$file" "$new_file"
done