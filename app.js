let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const userScoreDisplay = document.querySelector('#user-score');
const compScoreDisplay = document.querySelector('#comp-score');
const resetBtn = document.querySelector('#reset-btn');

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
};

const drawGame = () => {
  msg.innerText = "Game was draw!";
  msg.style.backgroundColor = "#081b31";
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userScoreDisplay.innerText = userScore;
  } else {
    msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compScoreDisplay.innerText = compScore;
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    const userWin =
      (userChoice === "rock" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "rock") ||
      (userChoice === "scissors" && compChoice === "paper");

    showWinner(userWin, userChoice, compChoice);
  }
};

// Event listeners for choices
choices.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    playGame(userChoice);
  });
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
  userScore = 0;
  compScore = 0;
  userScoreDisplay.innerText = userScore;
  compScoreDisplay.innerText = compScore;
  msg.innerText = "Game reset! Start playing...";
  msg.style.backgroundColor = "#081b31";
});
