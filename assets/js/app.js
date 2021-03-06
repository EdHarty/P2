const game = function () {
    let pScore = 0;
    let cScore = 0;
  
    
    const startGame = function() {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", function () {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    
    const playMatch = function () {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      
      const computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          
          const computerNumber = Math.floor(Math.random() * 5);
          const computerChoice = computerOptions[computerNumber];
  
          setTimeout(() => {
            
            compareHands(this.textContent, computerChoice);
            
            playerHand.src = `./assets/images/${this.textContent}.png`;
            computerHand.src = `./assets/images/${computerChoice}.png`;
          }, 2000);
          
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = function () {
      const playerScore = document.querySelector(".player-score p");
      const computerScore = document.querySelector(".computer-score p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = function (playerChoice, computerChoice) {
      
      const winner = document.querySelector(".winner");
      
      if (playerChoice === computerChoice) {
        winner.textContent = "It is a tie";
        return;
      }
      
      if (playerChoice === "rock") {
        if (computerChoice === "scissors" || computerChoice === "lizard") {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        }
      }
  
      
      if (playerChoice === "paper") {
        if (computerChoice === "scissors" || computerChoice === "lizard") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
  
  
      if (playerChoice === "scissors") {
        if (computerChoice === "rock" || computerChoice === "spock") {
          winner.textContent = "Computer Wins";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
        }
      }
  
  
  if (playerChoice === "lizard") {
    if (computerChoice === "scissors" || computerChoice === "rock")
  
  {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    } 
    else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
  }
  
  
  
  if (playerChoice === "spock") {
    if (computerChoice === "lizard" || computerChoice === "paper")
  {
      winner.textContent = "Computer Wins";
      cScore++;
      updateScore();
      return;
    }
    
    else {
      winner.textContent = "Player Wins";
      pScore++;
      updateScore();
      return;
    }
  }
    };
  
    
    startGame();
    playMatch();
  };
  
  
  game();
  