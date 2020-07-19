// Get input from user

let userInput = prompt("Please select: 'rock', 'papers' or 'scissors' ");

// A loop for till user give the right input
while (true) {
    if (
        userInput === "rock" ||
        userInput === "papers" ||
        userInput === "scissors"
    ) {
        break;
    } else {
        console.log("invalid input");
        userInput = prompt("Please select: 'rock', 'papers' or 'scissors' ");
        continue;
    }
}

// ComputerChoice
let number = Math.floor(Math.random() * 3);

let enemyChoice = "";
if (number === 0) {
    enemyChoice = "rock";
}
if (number === 1) {
    enemyChoice = "papers";
}
if (number === 2) {
    enemyChoice = "scissors";
}

// Determine Winner
if (userInput === enemyChoice) {
    console.log("The game is tie !");
} else if (userInput === "rock" && enemyChoice === "papers") {
    console.log("Paper beats Rock, You lose! ");
} else if (userInput === "papers" && enemyChoice === "scissors") {
    console.log("Scissors beats Papers, You lose!");
} else if (userInput === "rock" && enemyChoice === "scissors") {
    console.log("Rock beats Scissors, You win!");
} else if (userInput === "papers" && enemyChoice === "rock") {
    console.log("Paper beats rock, You win");
} else if (userInput === "scissors" && enemyChoice === "rock") {
    console.log("Rock beats Scissors, You lose");
} else {
    console.log("Scissors beats Paper, You win");
}
