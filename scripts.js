const choices = ["rock", "paper", "scissors"];

// Randomly generate computer's choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * (3))]
}

// Play one round, return string to declare winner
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection === "rock") {
        if(computerSelection === "rock") {
            return "You Drew!";
        } else if(computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Paper";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "rock") {
            return "You Win! Paper beats Rock";
        } else if (computerSelection === "paper") {
            return "You Drew!";
        } else {
            return "You Lose! Scissors beats Paper";
        }
    } else {
        if(computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if(computerSelection === "paper") {
            return "You Win! Scissors beats Paper";
        } else {
            return "You Drew!"
        }
    }
}

// Play 5 rounds then report the winner
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let result = playRound(playerSelection, computerSelection);
        
        if(result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }

        console.log(result);
    }

    // Declare winner
    if(playerScore > computerScore) {
        console.log("You Win! Score = " + playerScore + " - " + computerScore);
    } else if (playerScore < computerScore) {
        console.log("You Lose! Score = " + playerScore + " - " + computerScore);
    } else {
        console.log("You Drew!");
    }
}