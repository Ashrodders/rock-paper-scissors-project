const options = ["rock", "paper", "scissors"];

let scorePlayer = 0;


let scoreComputer = 0;



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

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = checkWinner(playerSelection, computerSelection);
    let message = `You selected: ${playerSelection}. Computer selected: ${computerSelection}. `;

    if (result === "tie") {
        message += "It's a tie!";
    } else if (result === "player") {
        message += `You win! ${playerSelection} beats ${computerSelection}.`;
        scorePlayer++;
    } else {
        message += `You lose! ${computerSelection} beats ${playerSelection}.`;
        scoreComputer++;
    }

    displayMessage(message);
    updateScores();
}



    function resetGame() {
        scorePlayer = 0;
        scoreComputer = 0;
    displayMessage("game has been reset.");
    updateScores();
}

function displayMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
}

function updateScores (){
    const playerScoreDiv = document.getElementById('player-score');
    const computerScoreDiv = document.getElementById('computer-score');

    playerScoreDiv.textContent = `player score : ${scorePlayer}`;

    computerScoreDiv.textContent = `Computer Score: ${scoreComputer}`
}




document.querySelector('#rock').addEventListener('click', () => playRound('rock'));

document.querySelector('#paper').addEventListener('click', () => playRound('paper'));

document.querySelector('#scissors').addEventListener('click', () => playRound('scissors'));
document.querySelector('#reset').addEventListener('click', resetGame);


function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("Please enter rock, paper, or scissors:");
        if (choice == null) {
            continue;
        }
       const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
}

