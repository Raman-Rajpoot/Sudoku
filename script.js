const board = Array.from({ length: 9 }, () => Array(9).fill('.'));

// Initialize the grid
function createGrid() {
    const boardDiv = document.getElementById('sudoku-board');
    boardDiv.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.contentEditable = true;
            cell.id = `cell-${i}-${j}`;
            cell.addEventListener('input', (e) => handleInput(e, i, j));
            boardDiv.appendChild(cell);
        }
    }
}

// Handle user input
function handleInput(e, i, j) {
    const value = e.target.textContent.trim();
    if (/^[1-9]$/.test(value)) {
        board[i][j] = value;
        e.target.classList.add('filled');
    } else {
        board[i][j] = '.';
        e.target.textContent = '';
        e.target.classList.remove('filled');
    }
}

// Check validity
function isValid(board, row, col, num) {
    const char = num.toString();
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === char || board[x][col] === char) return false;
        const subRow = 3 * Math.floor(row / 3) + Math.floor(x / 3);
        const subCol = 3 * Math.floor(col / 3) + (x % 3);
        if (board[subRow][subCol] === char) return false;
    }
    return true;
}

// Solver with visualization
async function solveSudoku(board, row = 0, col = 0) {
    if (row === 9) return true;
    if (col === 9) return solveSudoku(board, row + 1, 0);
    if (board[row][col] !== '.') return solveSudoku(board, row, col + 1);

    for (let num = 1; num <= 9; num++) {
        if (isValid(board, row, col, num)) {
            board[row][col] = num.toString();
            updateCell(row, col, num);
            await delay(100); // Delay for visualization
            if (await solveSudoku(board, row, col + 1)) return true;
            board[row][col] = '.';
            updateCell(row, col, '.');
        }
    }
    return false;
}

// Update cell value in the UI
function updateCell(row, col, value) {
    const cell = document.getElementById(`cell-${row}-${col}`);
    cell.textContent = value === '.' ? '' : value;
    cell.classList.toggle('highlight', value !== '.');
}

// Reset the board
function resetBoard() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            board[i][j] = '.';
            updateCell(i, j, '.');
        }
    }
}

// Delay function for visualization
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// Event listeners
document.getElementById('solve-btn').addEventListener('click', () => solveSudoku(board));
document.getElementById('reset-btn').addEventListener('click', resetBoard);

// Initialize the grid
createGrid();
