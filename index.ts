#! usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random() * 6 + 1);

const answers =await inquirer.prompt([
    {
        name : "userGuessedNumber",
        type : "number",
        message :"Please guess a number:",
    }
]);
if(answers.userGuessedNumber ===randomNumber){
    console.log("congratulation! You guessed a right number");
}
else{
   console.log("you guessed a wrong number");
}
