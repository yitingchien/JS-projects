let humanChoice;
      let computerChoice;
      var humanScore = 0;
      var computerScore = 0;

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

      function getHumanChoice() {
        let input = prompt("Rock, paper or scissors?");

        if (input.toLowerCase() === "rock") {
          return "rock";
        } else if (input.toLowerCase() === "paper") {
          return "paper";
        } else if (input.toLowerCase() === "scissors") {
          return "scissors";
        } else {
          console.log(`Invalid input`);
          return getHumanChoice();
        }
      }

      function playGame() {
        function playRound(humanChoice, computerChoice) {
          if (humanChoice === "rock" && computerChoice === "scissors") {
            humanScore++;
            return "You win! Rock beats scissors.";
          } else if (humanChoice === "rock" && computerChoice === "paper") {
            computerScore++;
            return "You lose! Paper beats rock.";
          } else if (humanChoice === "paper" && computerChoice === "rock") {
            humanScore++;
            return "You win! Paper beats rock.";
          } else if (humanChoice === "paper" && computerChoice === "scissors") {
            computerScore++;
            return "You lose! Scissors beats paper.";
          } else if (humanChoice === "scissors" && computerChoice === "paper") {
            humanScore++;
            return "You win! Scissors beats paper.";
          } else if (humanChoice === "scissors" && computerChoice === "rock") {
            computerScore++;
            return "You lose! Rock beats scissors.";
          } else if (
            (humanChoice === "rock" && computerChoice === "rock") ||
            (humanChoice === "paper" && computerChoice === "paper") ||
            (humanChoice === "scissors" && computerChoice === "scissors")
          ) {
            return "It's a draw.";
          }
        }

        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
      }

      for (var i = 0; i < 5; i++) {
        playGame();
        console.log("Human score is " + humanScore + " --- Computer score is " + computerScore);
      }
      // Wrapped the game logic in a playGame() function for better organization. Moved variable assignments inside this function to ensure they're updated each game.
    
