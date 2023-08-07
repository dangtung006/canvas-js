// Get the canvas element and its context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the matrix properties
const numRows = 5;
const numCols = 5;
const cellSize = 50;
const matrix = createMatrix(numRows, numCols);

// Function to create a matrix filled with values
function createMatrix(rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
}

// Function to draw the matrix on the canvas
function drawMatrix(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            const x = col * cellSize;
            const y = row * cellSize;
            const value = matrix[row][col];

            // Draw the cell
            ctx.beginPath();
            ctx.rect(x, y, cellSize, cellSize);
            ctx.fillStyle = 'lightgray';
            ctx.fill();
            ctx.stroke();

            // Draw the value in the cell
            ctx.font = '18px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('', x + cellSize / 2, y + cellSize / 2);
        }
    }
}

// Draw the matrix on the canvas
drawMatrix(matrix);
