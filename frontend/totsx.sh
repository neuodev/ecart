#!/bin/bash

curr_files=$( ls ./src/**/*.js )
curr_files+=$( ls ./src/**/**/*.js )

for curr_file in $curr_files; do
    file_name=$( echo "$curr_file" | cut -d '.' -f 2 )
    new_file=".$file_name.tsx"
    echo "$curr_file -> $new_file"
    mv "$curr_file" "$new_file"
done 