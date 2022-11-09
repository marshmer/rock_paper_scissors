//Get random computer choice
function getComputerChoice(compSelection) {
    const gameChoices = ["rock", "paper", "scissors"];
    compSelection = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    return compSelection;
}

//Player versus computer function
function playGame(playerSelection, computerSelection) {
    playerSelection = prompt("Please enter your selection");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    computerSelection = getComputerChoice();
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock.");
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors.");
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper.");
    } else if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    } else {
        console.log("Invalid choices!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
    console.log("All 5 rounds are finished!");
}

console.log(game());