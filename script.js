function getComputerChoice() {
    let randChoice = Math.floor(Math.random() * 3) + 1
    switch(randChoice) {
        case 1: return "rock"
        case 2: return "paper"
        case 3: return "scissor"
    }
}

let userChoice;
const buttons = document.querySelectorAll("button")
buttons.forEach((option) => {
    option.addEventListener('click', function() {
        userChoice = this.textContent.toLowerCase()
        startGame();
    });
});

function startGame() {
    document.querySelector("p").textContent = playRound(); 
    document.querySelector("#computer").textContent = computerScore;
    document.querySelector("#human").textContent = humanScore;
}

let humanScore = 0;
let computerScore = 0;
function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = userChoice;
   
    if (computerChoice == humanChoice) {
        return `It's a tie!`
    } else if (computerChoice == 'rock' && humanChoice == 'scissor' ||
               computerChoice == 'paper' && humanChoice == 'rock' ||
               computerChoice == 'scissor' && humanChoice == 'paper') {
        ++computerScore;
        return `Computer wins`
    } else {
        ++humanScore;
        return `Human wins`
    }
}

// GET RANDOM NUMBER BETWEEN 1, 2 AND 3
// ASSOCITE EACH NUMBER WITH THE OPTIONS
// GET CLIENT CHOICE
    // SELECT EACH BUTTON
    // ADD AN EVENT LISTENER
    // IF USER CLICK START ACTIONS
// COMPARE THE CHOICES
// DISPLAY RESULT IN PARAGRAPH
