Sudoku Solver Visualizer
This is a web-based Sudoku Solver and Visualizer. It allows users to input their own Sudoku puzzle, solves it step-by-step with a clear visualization, and ensures that the board is locked during the solving process to prevent accidental modifications.

Features
Interactive Sudoku Board: Users can input their Sudoku puzzle directly on the grid.
Solve Button: Automatically solves the Sudoku puzzle with a step-by-step visualization.
Reset Button: Clears the board for a new puzzle input.
Input Validation: Ensures only numbers 1-9 are allowed in each cell.
Locked Board: Prevents changes to the board while solving.
Responsive Design: Works seamlessly across different devices.
How to Use
Input Puzzle:

Click on any cell to input a number (1-9) for the puzzle.
Leave cells blank (or with .) for empty positions.
Solve the Puzzle:

Click the "Solve" button to start solving.
The solving process will be visualized step-by-step.
During solving, you cannot edit the board.
Reset the Puzzle:

Click the "Reset" button to clear the board.
The board will be unlocked for new input.
How It Works
Algorithm:

The solver uses Backtracking to find the solution.
It checks the validity of each number placed in a cell using Sudoku rules.
Visualization:

Each step of the algorithm updates the board visually with a delay for better understanding.
Board Locking:

When solving starts, all cells are locked to prevent edits.
After solving or resetting, the board unlocks.
Files
index.html: Contains the structure of the Sudoku board and buttons.
style.css: Handles the styling of the grid and buttons.
script.js: Implements the Sudoku solving logic, input handling, and visualization.
Installation
Clone or download the repository.
Open index.html in any modern web browser.
Technologies Used
HTML: For creating the grid structure.
CSS: For styling the grid, buttons, and highlighting cells.
JavaScript: For solving the Sudoku and managing interactions.
Future Enhancements
Add functionality to generate random Sudoku puzzles.
Include difficulty levels for puzzles.
Improve visualization with animation effects.
Provide a download option for solved puzzles.
