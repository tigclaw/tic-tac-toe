// VARIABLES
let board = document.querySelector('#board');
let gameInfo = document.querySelector('#game-info');
let warning = document.querySelector('#warning');

let players = {
  Player1: 'X',
  Player2: 'O',
};

let currentPlayer = players.Player1;
let positionsTaken = [];
// let hash = {}; // { 0-0: null, 0-1: 'X', .. }
let boardArray = [[null, null, null], [null, null, null], [null, null, null]];

// EVENT LISTENERS
board.addEventListener('click', function(e) {
  // console.log(e.target);
  let target = e.target;
  let position = target.getAttribute('data-pos');

  // only if the spot is blank
  if (isPositionTaken(position) === false) {
    // record position taken
    positionsTaken.push(position);
    let tuple = position.split('-');
    let rowPos = tuple[0];
    let colPos = tuple[1];
    boardArray[rowPos][colPos] = currentPlayer;
    
    console.log('positions taken is', positionsTaken);
    console.log('board array is', boardArray);

    // update div for marking X/O
    target.textContent = currentPlayer;
    updateTurns();


    // check to see if game is over
    checkWinStatus();
  }
});


// METHODS
function startGame() {
  gameInfo.textContent = `${currentPlayer}'s turn to go!`;
}

function updateTurns() {
  switchPlayer();
  gameInfo.textContent = `${currentPlayer}'s turn to go!`;
}

function isPositionTaken(position) {
  console.log('checking', positionsTaken.indexOf(position));
  if (positionsTaken.indexOf(position) !== -1) {
    return true;
  } else {
    return false;
  }
}

function switchPlayer() {
  if (currentPlayer === players.Player1) {
    currentPlayer = players.Player2;
  } else if (currentPlayer === players.Player2) {
    currentPlayer = players.Player1;
  }
  console.log('current player is now', currentPlayer);
}

function clearBoard() {

}

function checkWinStatus() {
  // when there is a winning condition

  // if there are 3 in a row for either X or O

  // for (let row=0; row<boardArray.length; row++) {
  //   let currentRow = boardArray[row];
  //   for (let col=0; col)
    
  // }

  // else if positionsTaken.length === 9 (full board)
  if (positionsTaken.length === 9) {
    warning.textContent = "Game over, no one wins";
    gameInfo.textContent = "";
  }
}

// RUN UPON PAGE LOAD
startGame();

