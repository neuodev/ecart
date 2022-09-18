#!/bin/bash
################################################################################
#                               By: Ahmed Ibrahim
#                         Created At: Sat. 17 Sep. 2022
#                                  Description:
#                     Change all of the .js files into .ts.
#                   As this project was originally made by JS
################################################################################

curr_files=$( ls ./src/*/*.js )

for curr_file in $curr_files; do
    file_name=$( echo "$curr_file" | cut -d '.' -f 2 )
    new_file=".$file_name.ts"
    echo "$curr_file -> $new_file"
    mv "$curr_file" "$new_file"
done