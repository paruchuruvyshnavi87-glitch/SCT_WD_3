let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const cells = document.getElementsByClassName("cell");
const result = document.getElementById("result");

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

// Player Move
function playerMove(index) {
    if (board[index] === "" && !gameOver) {
        board[index] = "X";
        cells[index].innerText = "X";
        if (!checkWinner("X")) {
            computerMove();
        }
    }
}

// Computer Move (Random Smart Move)
function computerMove() {
    let emptyCells = board
        .map((v, i) => v === "" ? i : null)
        .filter(v => v !== null);

    if (emptyCells.length === 0) return;

    let randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[randomIndex] = "O";
    cells[randomIndex].innerText = "O";
    checkWinner("O");
}

// Check Winner
function checkWinner(player) {
    for (let pattern of winPatterns) {
        if (
            board[pattern[0]] === player &&
            board[pattern[1]] === player &&
            board[pattern[2]] === player
        ) {
            result.innerText = player === "X" ? "🎉 You Win!" : "🤖 Computer Wins!";
            gameOver = true;
            return true;
        }
    }

    if (!board.includes("")) {
        result.innerText = "🤝 Draw!";
        gameOver = true;
    }
    return false;
}

// Reset Game
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    gameOver = false;
    result.innerText = "";
    for (let cell of cells) cell.innerText = "";
}
