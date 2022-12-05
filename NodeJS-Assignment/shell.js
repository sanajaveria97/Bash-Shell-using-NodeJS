#!/usr/bin/env node
const { exec } = require("child_process");
const os = require("os");
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let userCommand = "";

//Getting the home directory
const homeDir = os.homedir();
//Setting default working directory to home directory
process.chdir(homeDir);

//This function takes the input command
function takeInputCommand() {
  readline.question(`${process.cwd()} $`, (name) => {
    userCommand = name;
    if (userCommand === "exit") process.exit();
    if (userCommand.includes("cd")) {
      const inputArr = userCommand.split(" ");
      process.chdir(inputArr[1]);
    }
    executeCommand();
  });
}

//This function executes the command
function executeCommand() {
  exec(userCommand, (error, stdout, stderr) => {
    if (userCommand.includes("cd")) {
      console.log(stdout);
      takeInputCommand();
      return;
    }

    if (error) console.log(`Error: ${error.message}`);
    if (stderr) console.log(`Stderror: ${stderr.message}`);
    console.log(stdout);
    takeInputCommand();
  });
}

//Sends a SIGINT to close the shell
process.on("SIGINT", () => {
  process.exit();
});

process.on("exit", () => {
  console.log("\n Closing the terminal..");
});

takeInputCommand();
