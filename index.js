const options = ["rock", "paper","scissors"]

function getComputerChoice() {
   const choice = options [Math.floor(Math.random() * options.length)];
   return choice;
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "tie";
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function playround(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie") {
        return "it's a tie!";
    } else if (result == "player") {
        return `you win! thats dope ${playerSelection} beats ${computerSelection}`;
    } else {
        return `you suck and lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Please enter rock, paper, or scissors:");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLocaleLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playround(playerSelection, computerSelection));
        console.log("-----------------------");
        if (checkWinner(playerSelection, computerSelection) == "player") {
            scorePlayer++;
        } else if (checkWinner(playerSelection, computerSelection) == "computer") {
            scoreComputer++;
        }
    }

    console.log("game Over fool!");
    if (scorePlayer > scoreComputer) {
        console.log("player was the winner");
    } else if (scorePlayer < scoreComputer) {
        console.log("computer was the winner");
    } else {
        console.log("we have a tie");
    }
}

game();
