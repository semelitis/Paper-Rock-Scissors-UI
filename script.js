//all the constants
const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("h1#resultText.gameText");
const choiceBtns = document.querySelectorAll(".btn-choice");
let player;
let computer;
let result; //to display who won

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player : ${player}`;
    computerText.textContent = `Computer :${computer}`;
    resultText.textContent = checkWinner();
  })
);

//the function that makae a choice
function computerTurn() {
  randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
}

//the function that showes the winner
function checkWinner() {
  if (computer == player) {
    return "Its  A tie!";
  } else if (computer == "ROCK" && player == "PAPER") {
    return "You lose!";
  } else if (computer == "ROCK" && player == "SCISSORS") {
    return "You lose";
  } else if (computer == "PAPER" && player == "SCISSORS") {
    return "You Win!";
  } else if (computer == "PAPER" && player == "ROCK") {
    return "You win";
  } else if (computer == "SCISSORS" && player == "ROCK") {
    return "You Win";
  } else if (computer == "SCISSORS" && player == "PAPER") {
    return "You lose";
  }
}
