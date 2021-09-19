const startGameBtn = document.getElementById("start-game-btn");

// globel constant
const SELECTION_ROCK = "ROCK";
const SELECTION_PAPER = "PAPER";
const SELECTION_SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = SELECTION_ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WINS";
const RESULT_COMPUTER_WIN = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt("Rock, Paper or Scissors?", " ").toUpperCase();
  //   validation for user Input
  console.log(selection);
  if (
    selection !== SELECTION_PAPER &&
    selection !== SELECTION_ROCK &&
    selection !== SELECTION_SCISSORS
  ) {
    alert("invalid choice! so the default will be Rock.");
    return DEFAULT_SELECTION;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.42) {
    return SELECTION_SCISSORS;
  } else if (randomValue < 0.67) {
    return SELECTION_ROCK;
  } else {
    return SELECTION_PAPER;
  }
};

const getWinner = function (player, computer) {
  if (player === computer) {
    return RESULT_DRAW;
  } else if (
    (computer === SELECTION_ROCK && player === SELECTION_PAPER) ||
    (computer === SELECTION_PAPER && player === SELECTION_SCISSORS) ||
    (computer === SELECTION_SCISSORS && player === SELECTION_ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

function startGame() {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  let message;
  if (winner === RESULT_DRAW) {
    message = `you had a draw, because you picked ${playerSelection} and computer ${computerSelection}`;
  } else if (winner === RESULT_PLAYER_WIN) {
    message = `you WON!, because you picked ${playerSelection} and computer ${computerSelection}`;
  } else {
    message = `you lose!, because you picked ${playerSelection} and computer ${computerSelection}`;
  }
  alert(message);
  gameIsRunning = false;
}

startGameBtn.addEventListener("click", startGame);
