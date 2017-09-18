// VARIABLES
let board = document.querySelector('#board');
let gameInfo = document.querySelector('#game-info');
let players = {
  Player1: 'X',
  Player2: 'O',
};

let currentPlayer = players.Player1;
let positionsTaken = [];


// EVENT LISTENERS
board.addEventListener('click', function(e) {
  // console.log(e.target);
  let target = e.target;
  let position = target.getAttribute('data-pos');
  console.log('position is', position);

  target.textContent = currentPlayer;
  updateTurns();
});


// METHODS
function startGame() {
  gameInfo.textContent = `${currentPlayer}'s turn to go!`;
}

function updateTurns() {
  switchPlayer();
  
}

function switchPlayer() {
  if (currentPlayer === players.Player1) {
    currentPlayer = players.Player2;
  } else if (currentPlayer === players.Player2) {
    currentPlayer = players.Player1;
  }
  console.log('current player is now', currentPlayer);
  gameInfo.textContent = `${currentPlayer}'s turn to go!`;
}

function clearBoard() {

}

// RUN UPON PAGE LOAD
// start game
startGame();

