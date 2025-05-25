function getComputerChoice() {
    let choices = ["rock", "paper", "scissor"];
    return choices[Math.floor(Math.random() * 2.9)]
}

function getHumanChoice() {
    return prompt("Rock, Paper or Scissor?").toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice){
        alert(`It's a tie!`);
    } else if (computerChoice == 'rock' && humanChoice == 'scissor' ||
               computerChoice == 'scissor' && humanChoice == 'paper' ||
               computerChoice == 'paper' && humanChoice == 'rock') {
        alert(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    } else {
        alert(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    }
}

function playGame() {
    for (i = 0; 1 < 6; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();
