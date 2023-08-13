let currentPlayer = 'X';
let gameActive = true;
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const cells = document.querySelectorAll('.cell');
const status = document.querySelector('.status');

function checkWinner() {
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent === cells[b].textContent &&
            cells[b].textContent === cells[c].textContent &&
            cells[a].textContent !== '') {
            gameActive = false;
            status.textContent = `Player ${currentPlayer} wins!`;
            break;
        }
    }
}

function checkDraw() {
    if ([...cells].every(cell => cell.textContent !== '')) {
        gameActive = false;
        status.textContent = "It's a draw!";
    }
}

function makeMove(cellIndex) {
    if (!gameActive || cells[cellIndex].textContent !== '')
     return;

    cells[cellIndex].textContent = currentPlayer;
    checkWinner();
    if (gameActive) {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        status.textContent = `Player ${currentPlayer}'s turn`;
        checkDraw();
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    gameActive = true;
    status.textContent = "Player X's turn";
}

resetGame();
