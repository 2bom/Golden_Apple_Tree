[LINUX] Learn linux CLI
==========

# $ ls
1. $ ls -a
  - lists all contents, including hidden files and directories
2. $ ls -l
  - lists all contents of a directory in long format
3. $ ls -t
  - order files and directories by the time they were last modified.

4. $ ls -l

        $ ls -l
        drwxr-xr-x 5  cc  eng  4096 Jun 24 16:51  action
        drwxr-xr-x 4  cc  eng  4096 Jun 24 16:51  comedy
        drwxr-xr-x 6  cc  eng  4096 Jun 24 16:51  drama
        -rw-r--r-- 1  cc  eng     0 Jun 24 16:51  genres.txt

    The -l option lists files and directories as a table. Here there are four rows, with seven columns separated by spaces. Here's what each column means:

    Access rights. These are actions that are permitted on a file or directory.
    Number of hard links. This number counts the number of child directories and files. This number includes the parent directory link (..) and current directory link (.).
    The username of the file's owner. Here the username is cc.
    The name of the group that owns the file. Here the group name is eng.
    The size of the file in bytes.
    The date & time that the file was last modified.
    The name of the file or directory.

5. $ ls -alt

- In addition to using each option separately, like ls -a or ls -l, multiple options can be used together, like ls -alt.

- Here, ls -alt lists all contents, including hidden files and directories, in long format, ordered by the date and time they were last modified.

# $ cp

     cp biopic/ray.txt biopic/notorious.txt historical/

- Change directories into historical/.

  List all files and directories in the working directory. You should see a new copy of ray.txt and notorious.txt in this directory.

# $ touch keyboard.txt
- make file

# $ cp m*.txt scifi/
- Here, m*.txt selects all files in the working directory starting with "m" and ending with ".txt", and copies them to scifi/.

# $ mv wonderwoman.txt batman.txt superhero/
- Move file wonderwoman.txt, batman.txt into superhero folder.

# $ mv batman.txt spiderman.txt
- Change name batman -> spiderman

# $ rm file.txt
- Remove fiel.txt file

# $ rm -r slapstick
- Remove slapstick folder

# $ echo "Hello" > hello.txt
- Make file with inner content

# $ cat file.txt
- Display content of file.txt on command window

# $ cat oceans.txt > continents.txt
- Copy and paste inner content

# $ cat glaciers.txt >> rivers.txt
- Add inner content of the glaciers.txt below of rivers.txt content

# $ cat < lakes.txt
- < takes the standard input from the file on the right and inputs it into the program on the left. Here, lakes.txt is the standard input for the cat command. The standard output appears in the terminal.

# $ cat volcanoes.txt | wc
- | is a "pipe". The | takes the standard output of the command on the left, and pipes it as standard input to the command on the right. You can think of this as "command to command" redirection.

- Here the output of cat volcanoes.txt is the standard input of wc. in turn, the wc command outputs the number of lines, words, and characters in volcanoes.txt, respectively.

# $ cat volcanoes.txt | wc | cat > islands.txt
- Multiple '|'s can be chained together. Here the standard output of cat volcanoes.txt is "piped" to the wc command. The standard output of wc is then "piped" to cat. Finally, the standard output of cat is redirected to islands.txt.

- You can view the output data of this chain by typing cat islands.txt.

# $ sort lakes.txt
- sort takes the standard input and orders it alphabetically for the standard output. Here, the lakes in sort lakes.txt are listed in alphabetical order.

# $ cat lakes.txt | sort > sorted-lakes.txt
- Here, the command takes the standard output from cat lakes.txt and "pipes" it to sort. The standard output of sort is redirected to sorted-lakes.txt.

- You can view the output data by typing cat on the file sorted-lakes.txt.

# $ uniq deserts.txt

# $ sort deserts.txt | uniq

# $ sort deserts.txt | uniq > uniq-deserts.txt

# $ grep Mount mountains.txt
- Grep stands for "global regular expression print".

# $ grep -i Mount mountains.txt
- 'grep -i' enables the command to be case insensitive.

# $ grep -R Arctic /home/ccuser/workspace/geography
- searches all files in a directory and outputs filenames and lines containing matched results

# $ grep -Rl Arctic /home/ccuser/workspace/geography
    grep -Rl searches all files in a directory and outputs only filenames with matched results. -R stands for "recursive" and l stands for "files with matches". Here grep -Rl searches the /home/ccuser/workspace/geography directory for the string "Arctic" and outputs filenames with matched results.

# $ sed 's/snow/rain/' forests.txt
- sed stands for "stream editor". It accepts standard input and modifies it based on an expression, before displaying it as output data. It is similar to "find and replace".

- Let's look at the expression 's/snow/rain/':

 > s: stands for "substitution". it is always used when using sed for substitution.

 > snow: the search string, the text to find.

 > rain: the replacement string, the text to add in place.

- In this case, sed searches forests.txt for the word "snow" and replaces it with "rain." Importantly, the above command will only replace the first instance of "snow" on a line.

------------------------------------------------------------
# $ nano hello.txt
- nano is a command line text editor. It works just like a desktop text editor like TextEdit or Notepad, except that it is accessible from the command line and only accepts keyboard input.

- The command nano hello.txt opens a new text file named hello.txt in the nano text editor.
- "Hello, I am nano" is a text string entered in nano through the cursor.
- The menu of keyboard commands at the bottom of the window allow us to save changes to hello.txt and exit nano. The ^ stands for the Ctrl key.
   > **Ctrl + O** saves a file. 'O' stands for output.

   > **Ctrl + X** exits the nano program. 'X' stands for exit.

   > **Ctrl + G** opens a help menu.

   > **clear** clears the terminal window, moving the command prompt to the top of the screen.

# $ nano ~/.bash_profile
  ~/.bash_profile is the name of file used to store environment settings. It is commonly called the "bash profile". When a session starts, it will load the contents of the bash profile before executing commands.

- The ~ represents the user's home directory.
- The . indicates a hidden file.
- The name ~/.bash_profile is important, since this is how the command line recognizes the bash profile.
- The command nano ~/.bash_profile opens up ~/.bash_profile in nano.
- The text echo "Welcome, Jane Doe" creates a greeting in the bash profile, which is saved. It tells the command line to echo the string "Welcome, Jane Doe" when a terminal session begins.
- The command source ~/.bash_profile activates the changes in ~/.bash_profile for the current session. Instead of closing the terminal and needing to start a new session, source makes the changes available right away in the session we are in.

# $ alias pd="pwd"
- The alias command allows you to create keyboard shortcuts, or aliases, for commonly used commands.

- Here alias pd="pwd" creates the alias pd for the pwd command, which is then saved in the bash profile. Each time you enter pd, the output will be the same as the pwd command.
- The command source ~/.bash_profile makes the alias pd available in the current session.
- Each time we open up the terminal, we can use the pd alias.

# $ alias hy="history"
- hy is set as alias for the history command in the bash profile. The alias is then made available in the current session through source. By typing hy, the command line outputs a history of commands that were entered in the current session.

# $ alias ll="ls -la"
- ll is set as an alias for ls -la and made available in the current session through source. By typing ll, the command line now outputs all contents and directories in long format, including all hidden files.

# $ export USER="Jane Doe"
- environment variables are variables that can be used across commands and programs and hold information about the environment.

- The line USER="Jane Doe" sets the environment variable USER to a name "Jane Doe". Usually the USER variable is set to the name of the computer's owner.
- The line export makes the variable to be available to all child sessions initiated from the session you are in. This is a way to make the variable persist across programs.
- At the command line, the command echo $USER returns the value of the variable. Note that $ is always used when returning a variable's value. Here, the command echo $USER returns the name set for the variable.

# $ export PS1=">> "
- PS1 is a variable that defines the makeup and style of the command prompt.

- export PS1=">> " sets the command prompt variable and exports the variable. Here we change the default command prompt from $ to >>.
- After using the source command, the command line displays the new command prompt.

# $ echo $HOME
- The HOME variable is an environment variable that displays the path of the home directory. Here by typing echo $HOME, the terminal displays the path /home/ccuser as output.

- You can customize the HOME variable if needed, but in most cases this is not necessary.

# $ echo $PATH

- /home/ccuser/.gem/ruby/2.0.0/bin:/usr/local/sbin:/usr/local/bin:/usr/bin:/usr/sbin:/sbin:/bin
  PATH is an environment variable that stores a list of directories separated by a colon. Looking carefully, echo $PATH lists the following directories:

    > /home/ccuser/.gem/ruby/2.0.0/bin

    > /usr/local/sbin

    > /usr/local/bin

    > /usr/bin

    > /usr/sbin

    > /sbin

    > /bin

- Each directory contains scripts for the command line to execute. The PATH variable simply lists which directories contain scripts.

- For example, many commands we've learned are scripts stored in the /bin directory.

- /bin/pwd
  This is the script that is executed when you type the pwd command.

- /bin/ls
  This is the script that is executed when you type the ls command.

- In advanced cases, you can customize the PATH variable when adding scripts of your own.

# $ env
- The env command stands for "environment", and returns a list of the environment variables for the current user. Here, the env command returns a number of variables, including PATH, PWD, PS1, and HOME.

- env | grep PATH
- env | grep PATH is a command that displays the value of a single environment variable. Here the standard output of env is "piped" to the grep command. grep searches for the value of the variable PATH and outputs it to the terminal.