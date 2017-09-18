let board = document.querySelector('#board');

// EVENT LISTENERS
board.addEventListener('click', function(e) {
  // console.log(e.target);
  let target = e.target;
  let position = target.getAttribute('data-pos');
  console.log('position is', position);

});

// VARIABLES
let currentPlayer;



// METHODS
function startGame() {
  let gameInfo = document.querySelector('#game-info');
  gameInfo.textContent = 'Player 1 start';
}

function nextTurn() {

}

function clearBoard() {

}

function markX() {

}

function markO() {

}

// RUN UPON PAGE LOAD
// start game
startGame();

