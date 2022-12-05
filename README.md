# Bash Shell using Node.js

## Motivation
I am experienced in front-end development and a bit familiar with back-end. I decided to take up this project as a challenge to learn something new and build my back-end skills.
<br>

## About Project
This project involves creating a bash like shell which takes in user commands and executes them. The folder contains 3 files: <br>
1) shell.js <br>
2) app.js <br>
3) package.json

### 1) shell.js ###
This is the main shell script which takes in the user commands and executes them. When the shell is started, the default working directory is set to user's home directory. <br>
The shell starts with the command: <br>
 
 ```
 node shell.js
 ```
### Following commands can be executed in the shell:

1) **cd <directory_name>** - Changes directory like bash shell.
2) **ls <flags> <directory_name>** - Lists files or directories. All flags are supported.
3) **pwd** - Prints current working directory.
4) **mkdir** - Creates a folder.
5) **touch <file_name>** - Creates a file.
6) **rmdir** - Deletes a folder.
7) **rm <file_name>** - Deletes a file.
8) **exit** - Closes the shell.

- **Ctrl + C - Sends a SIGINT to terminate the process.**

### 2) app.js ###
This is a demo file which can be executed within the shell.


## Test Cases ##

The following code runs the demo script 'app.js' in the current working directory of the app.

``` 
node app.js
```

## Note ##
This app was created on a windows computer. It works as described when tested in 'Git Bash' terminal of Visual Studio code editor.

## References ##
1) https://stackoverflow.com/
2) https://www.youtube.com/
3) Online blogs and articles
