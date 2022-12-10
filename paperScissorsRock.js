let round = document.getElementById('round');
let info = document.getElementById('info');
let spsUser = document.getElementById('spsUser');
let spsMachine = document.getElementById('spsMachine');
let resultGameSPS = document.getElementById('resultGameSPS');
let spsUserPoints = document.getElementById('spsUserPoints');
let spsMachinePoints = document.getElementById('spsMachinePoints');
/* document.querySelector('.playerScore').textContent = "Score: 0"; */

const election = ['stone', 'paper', 'scissors'];
let boardPlayer = 0;
let boardComputer = 0;
let rounds = 1;

document.getElementById('stone').addEventListener('click', () => game('stone'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document
  .getElementById('scissors')
  .addEventListener('click', () => game('scissors'));

function init() {
  round.textContent = rounds;
  info.textContent = 'CHOOSE YOUR HAND!';
  spsUser.textContent = '___';
  spsMachine.textContent = '___';
  resultGameSPS.textContent = '';
  spsUserPoints.textContent = 0;
  spsMachinePoints.textContent = 0;
}

function game(playerSelection) {
  console.log('ROUNDS en GAME', rounds)
  if (rounds <= 5) {
    console.log('playerSelection: ', playerSelection);
    round.textContent = rounds;
    const computerSelection = computerPlay();
    // Play the Round
    playRound(playerSelection, computerSelection);
    /*   } */
    printFinalResult(playerSelection, computerSelection);
    rounds += 1;
  }
}

function computerPlay() {
  /*         let max = 2;
  let min = 0;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; */
  let randomNumber = Math.floor(Math.random() * election.length);
  let computerSelection = election[randomNumber];
  return computerSelection;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    info.textContent = "It's a tie";
    console.log(
      `It's a tie! You choose: ${playerSelection}, Computer choose: ${computerSelection}
            BOARD -> PLAYER: ${boardPlayer}, COMPUTER: ${boardComputer}`
    );
  } else if (
    (playerSelection === 'stone' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'stone')
  ) {
    boardPlayer += 1;
    info.textContent = 'You win!';
    console.log(
      `You WIN!, You choose: ${playerSelection}, Computer choose: ${computerSelection}
            BOARD -> PLAYER: ${boardPlayer}, COMPUTER: ${boardComputer}`
    );
  } else {
    boardComputer += 1;
    info.textContent = 'I win!';
    console.log(
      `I WIN!, You choose: ${playerSelection}, Computer choose: ${computerSelection}
            BOARD -> PLAYER: ${boardPlayer}, COMPUTER: ${boardComputer}`
    );
  }
}

function printFinalResult(playerSelection, computerSelection) {
  if (rounds <= 5) {
    console.log('PLAYERSELECTION', playerSelection, 'ROUNDS en printFinalResult', rounds)
    spsUser.textContent = playerSelection;
    spsMachine.textContent = computerSelection;
    spsUserPoints.textContent = boardPlayer;
    spsMachinePoints.textContent = boardComputer;
  }
  if (boardPlayer > boardComputer && rounds === 5) {
    info.textContent = `GAME OVER: You WON ${boardPlayer} times and computer won ${boardComputer} times`;
    console.log(
      `GAME OVER: You WON ${boardPlayer} times and computer won ${boardComputer} times`
    );
  } else if (boardComputer > boardPlayer && rounds === 5) {
    info.textContent = `GAME OVER: Computer WON ${boardComputer} times and player won ${boardPlayer} times`
    console.log(
      `GAME OVER: Computer WON ${boardComputer} times and player won ${boardPlayer} times`
    );
  } else if (boardComputer === boardPlayer && rounds === 5){
    info.textContent = `GAME OVER: It's a tie! Computer WON ${boardComputer} times and player won ${boardPlayer} times`;
    console.log(
      `GAME OVER: It's a tie! Computer WON ${boardComputer} times and player won ${boardPlayer} times`
    );
  }
}
