//Get random computer choice
function getComputerChoice(compSelection) {
    const gameChoices = ["Rock", "Paper", "Scissors"];
    compSelection = gameChoices[Math.floor(Math.random()*gameChoices.length)];
    return compSelection;
}
console.log(getComputerChoice());