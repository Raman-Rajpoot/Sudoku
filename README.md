<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku Solver Visualizer - README</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        h1, h2 {
            color: #2c3e50;
        }
        ul {
            list-style-type: disc;
            margin-left: 20px;
        }
        code {
            background: #f9f9f9;
            padding: 2px 4px;
            border-radius: 4px;
            color: #d63384;
            font-family: "Courier New", Courier, monospace;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: #fff;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Sudoku Solver Visualizer</h1>
        <p>This is a web-based <strong>Sudoku Solver and Visualizer</strong> that allows you to solve Sudoku puzzles interactively with step-by-step visualization.</p>

        <h2>Features</h2>
        <ul>
            <li><strong>Interactive Sudoku Board:</strong> Input numbers directly onto the grid.</li>
            <li><strong>Solve Button:</strong> Automatically solves the puzzle with visual feedback.</li>
            <li><strong>Reset Button:</strong> Clears the board for new input.</li>
            <li><strong>Input Validation:</strong> Ensures only valid numbers (1-9) are allowed.</li>
            <li><strong>Locked Board:</strong> Prevents changes while solving the puzzle.</li>
            <li><strong>Responsive Design:</strong> Optimized for all devices.</li>
        </ul>

        <h2>How to Use</h2>
        <ol>
            <li><strong>Input Puzzle:</strong> Click on any cell to enter a number (1-9). Leave empty cells as blank.</li>
            <li><strong>Solve the Puzzle:</strong> Click the <code>Solve</code> button to start solving.</li>
            <li><strong>Reset the Puzzle:</strong> Click the <code>Reset</code> button to clear the board and start over.</li>
        </ol>

        <h2>How It Works</h2>
        <ul>
            <li><strong>Algorithm:</strong> Uses the <em>Backtracking</em> algorithm to solve the Sudoku puzzle.</li>
            <li><strong>Visualization:</strong> Displays each step of the solving process with a delay.</li>
            <li><strong>Board Locking:</strong> Disables editing while the solver is running.</li>
        </ul>

        <h2>Files</h2>
        <ul>
            <li><code>index.html</code>: Structure of the Sudoku board and controls.</li>
            <li><code>style.css</code>: Styles for the grid, buttons, and UI.</li>
            <li><code>script.js</code>: JavaScript logic for solving, input handling, and visualization.</li>
        </ul>

        <h2>Installation</h2>
        <ol>
            <li>Clone or download the repository.</li>
            <li>Open <code>index.html</code> in any modern web browser.</li>
        </ol>

        <h2>Technologies Used</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>

        <h2>Future Enhancements</h2>
        <ul>
            <li>Add random Sudoku puzzle generation.</li>
            <li>Include difficulty levels for puzzles.</li>
            <li>Enhance visualization with animations.</li>
            <li>Provide a download option for solved puzzles.</li>
        </ul>

        <h2>License</h2>
        <p>This project is licensed under the <strong>MIT License</strong>. You are free to use, modify, and distribute it as needed.</p>

        <p><strong>Happy Solving!</strong> 😊</p>
    </div>
</body>
</html>
