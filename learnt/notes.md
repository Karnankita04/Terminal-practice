mkdir -v folderName
mkdir -p path
mkdir -pv newf2/dir1/insider2

ls -R (recursively)
ls **/*
ls -l (list all the files with date, size)
ls -lh (human readable files)
ls -a (hidden file)
ls -t (sorted by modification time)
ls -S (sorted by file size)
ls -lhS (sorted by size and list with human readable)
<!-- ls **/* , how does it work?? -->
ls -1 (one file per line)
ls -R --color=always (color has always, auto, never option)
ls -lah

wc fileName (lines, words, character)
wc * (all fileName)
wc -l * (number of lines in all files)
wc -c (characters)
wc -w (words)
wc -L *(number of characters from longest line) 
how to get that longest line number ???

mv fileName newFileName (to rename or move)

sort -nr (sort by numbers but in reverse order)
sort -k2 (second field)
