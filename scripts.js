const choices = ["rock", "paper", "scissors"];

// Randomly generate computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * (3))]
}

let playerScore = 0;
let computerScore = 0;
const roundResult = document.querySelector(".result");
// Play one round, return string to declare winner
function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = getComputerChoice();

    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            roundResult.innerText =  "You Drew!";
        } else if(computerSelection === "paper") {
            roundResult.innerText =  "You Lose! Paper beats Rock";
            computerScore++;
        } else {
            roundResult.innerText =  "You Win! Rock beats Paper";
            playerScore++;
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            roundResult.innerText =  "You Win! Paper beats Rock";
            playerScore++;
        } else if (computerSelection === "paper") {
            roundResult.innerText =  "You Drew!";
        } else {
            roundResult.innerText =  "You Lose! Scissors beats Paper";
            computerScore++;
        }
    } else {
        if(computerSelection === "rock") {
            roundResult.innerText =  "You Lose! Rock beats Scissors";
            computerScore++;
        } else if(computerSelection === "paper") {
            roundResult.innerText =  "You Win! Scissors beats Paper";
            playerScore++;
        } else {
            roundResult.innerText =  "You Drew!"
        }
    }

    updateScore();

    if(playerScore === 5) {
        declareWinner("player");
    } else if(computerScore === 5) {
        declareWinner("computer");
    }
}

// Updates the score
function updateScore() {
    const player = document.querySelector(".player-score");
    player.innerText = "Player: " + playerScore;

    const computer = document.querySelector(".computer-score");
    computer.innerText = "Computer: " + computerScore;
}

// Declare winner
const content = document.querySelector(".content");
function declareWinner(winner) {
    const win = document.createElement('h2');
    win.className = "winner";
    if(winner === "player") {
        win.innerText = "Player Wins!";
    } else {
        win.innerText = "Computer Wins!";
    }
    content.appendChild(win);
}

const rock = document.querySelector(".rock");
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector(".paper");
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', () => playRound("scissors"));