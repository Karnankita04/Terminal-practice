pwd command: present working directory
=> This command is used to display the absolute path of the ‘current directory’ that you are working on.

ls Command: List Directory Contents
=> This command is used to list all directories and files of the ‘specified directory’ (If not provided, it will list the content of the current directory).

options: 
-> (-a) Lists all files and directories (including hidden)
-> (-l) Lists all the files in long format
-> (-lh) Lists all files in human readable long format

1. mkdir
   => it creates new directory
   => -p : when we are creating directory , if the path is not present it will
   create the directory with the path specified
   => -v : Shows a message after creating the directory, confirming its creation.

2. ls
   => it will display all directory contents at one level
   => -a : displays hidden files(starts with ".")
   => -R : recursilvely list sub - directories
   uses :
   => \* : It lists contents of the directory and sub-directory based on the wild card
   => ls \*.txt : list the files matching the pattern
   -lh : Displays file sizes in KB, MB, GB instead of bytes.
   -t : Shows the most recently modified files first.

   - S : sort according to the size of the file
     -1 : Lists files in a single column format.
     --color=always : highlights the directories

3. cd
   => . represent the current directory
   => .. represent the parent of current direcotory
   => Relative path: It will change path with respective to the current directory
   => Absoulte Path : It specify the ful location of the file from the root
   directory
   => cd / : switches to the home directory
   => cd - : returns to the previous directory
   => cd ~ : returns to the root direcotry
   =>
4. cp
   => copy the contents of one flie to another file
   => -R : recursevely copies the contents of the directory
   syntax : cp source_path1 source_path2 destination_path
5. pwd : return the present working directory
6. mv :
   => move files from one direcotpry from to specified directory
   =>

   7.rm
   8.cat
   9.head
   10.tail
   11.where
   12.which
   13.wc
   14.echo
   15.man
   16.cut
   17.sort
   18.uniq
   19.grep
   20.alias

# git commands

1.git init
2.git status
3.git add
4.git clone
5.git commit -m
6.git push
7.git log, git log --oneline

** concepts **

# vaiables

1.$path
2.we can create out own variables and extract using $

# streams

1. standard in
2. standard out
3. standard err

1.piping
2.re-directing

# wild cards

1. !$
2. !!
3. !(number) => nth command
4. cd -
5. !part of command
6. ls \*
7. ~/.zsh_history