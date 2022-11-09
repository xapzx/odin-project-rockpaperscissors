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
}

// Updates the score
function updateScore() {
    const player = document.querySelector(".player-score");
    player.innerText = "Player: " + playerScore;

    const computer = document.querySelector(".computer-score");
    computer.innerText = "Computer: " + computerScore;
}

// // Play 5 rounds then report the winner
// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for(let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice();
//         let playerSelection = prompt("Rock, Paper or Scissors?");
//         let result = playRound(playerSelection, computerSelection);
        
//         if(result.includes("Win")) {
//             playerScore++;
//         } else if (result.includes("Lose")) {
//             computerScore++;
//         }

//         console.log(result);
//     }

//     // Declare winner
//     if(playerScore > computerScore) {
//         console.log("You Win! Score = " + playerScore + " - " + computerScore);
//     } else if (playerScore < computerScore) {
//         console.log("You Lose! Score = " + playerScore + " - " + computerScore);
//     } else {
//         console.log("You Drew!");
//     }
// }

const rock = document.querySelector(".rock");
rock.addEventListener('click', () => playRound("rock"));

const paper = document.querySelector(".paper");
paper.addEventListener('click', () => playRound("paper"));

const scissors = document.querySelector(".scissors");
scissors.addEventListener('click', () => playRound("scissors"));