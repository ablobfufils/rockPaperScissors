// DOM variables
const choices = ['rock', 'paper', 'scissors'];
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let humanWinCounter = document.getElementById("humanWins");
let computerWinCounter = document.getElementById("computerWins");

// Get computers move of R/P/S
function computerChoice(){
    const computerMove = ['Rock', 'Paper', 'Scissors'];
    return computerMove[Math.floor(Math.random() * Math.floor(3))];

}  

function playGame(playersPick, computersPick){
    
}





    