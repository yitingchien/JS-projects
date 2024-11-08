let humanChoice;
let computerChoice;
var humanScore = 0;
var computerScore = 0;

document.getElementById('humanResult').innerHTML = humanScore;
document.getElementById('computerResult').innerHTML = computerScore;

function getComputerChoice() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  if (getRandomInt(3) == 0) {
    return "rock";
  } else if (getRandomInt(3) == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  // Add this line at the start of playRound
  document.querySelector("#runResult").style.color = "";

  console.log(`Human = ${humanChoice} --- Computer = ${computerChoice}`);
  const runResult = document.querySelector("#runResult");
  const humanResult = document.querySelector("#humanResult");
  const computerResult = document.querySelector("#computerResult");

  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    runResult.textContent = "You win this round! Rock beats scissors.";
    humanResult.textContent = `${humanScore}`;
    if (humanScore === 5) {
      displayResult("Game Over - You win the game!");
    }

  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    runResult.textContent = "You lose this round! Paper beats rock.";
    computerResult.textContent = `${computerScore}`;
    if (computerScore === 5) {
      displayResult("Game Over - Computer wins the game!");
    }

  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    runResult.textContent = "You win this round! Paper beats rock.";
    humanResult.textContent = `${humanScore}`;
    if (humanScore === 5) {
      displayResult("Game Over - You win the game!");
    }

  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    runResult.textContent = "You lose this round! Scissors beats paper.";
    computerResult.textContent = `${computerScore}`;
    if (computerScore === 5) {
      displayResult("Game Over - Computer wins the game!");
    }

  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    runResult.textContent = "You win this round! Scissors beats paper.";
    humanResult.textContent = `${humanScore}`;
    if (humanScore === 5) {
      displayResult("Game Over - You win the game!");
    }

  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    runResult.textContent = "You lose this round! Rock beats scissors.";
    computerResult.textContent = `${computerScore}`;
    if (computerScore === 5) {
      displayResult("Game Over - Computer wins the game!");
    }

  } else if (
    (humanChoice === "rock" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "scissors")
  ) {
    runResult.textContent = "It's a draw.";
  }
}

const button1 = document.getElementById("rock");
const button2 = document.getElementById("paper");
const button3 = document.getElementById("scissors");

button1.addEventListener("click", function () {
  playRound('rock', getComputerChoice());
});
button2.addEventListener("click", function () {
  playRound('paper', getComputerChoice());
});
button3.addEventListener("click", function () {
  playRound('scissors', getComputerChoice());
})

function displayResult(displayText) {
  runResult.textContent = displayText;
  runResult.style.color = "red";
  humanScore = 0;
  computerScore = 0;

  // Reset the score display
  document.getElementById('humanResult').innerHTML = humanScore;
  document.getElementById('computerResult').innerHTML = computerScore;
}
