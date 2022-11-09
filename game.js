/*Get player selection
let playerInput = prompt("Please enter your selection");
playerInput = playerInput.toLowerCase();
console.log(playerInput);*/

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
        /* console.log(playerSelection);
        console.log(computerSelection);*/
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("You win! Paper beats rock.");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("You win! Rock beats scissors.");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("You lose! Rock beats scissors.");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("You lose! Scissors beats paper.");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win! Scissors beats paper.");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else if (playerSelection == computerSelection) {
        console.log("It's a draw!");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    } else {
        console.log("Invalid choices!");
        /* console.log(playerSelection);
        console.log(computerSelection); */
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
    console.log("All 5 rounds are finished!");
}

console.log(game());