const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw a square on the canvas
function drawSquare(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

// Check if the mouse click is inside the square
function isInsideSquare(x, y, size, event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    return mouseX >= x && mouseX <= x + size && mouseY >= y && mouseY <= y + size;
}

// Handle mouse click event on the canvas
canvas.addEventListener('click', function(event) {
    const squareX = 100;
    const squareY = 100;
    const squareSize = 50;

    if (isInsideSquare(squareX, squareY, squareSize, event)) {
        console.log('Mouse click inside the square!');
    }
});

// Draw the square on the canvas
drawSquare(100, 100, 50, 'red');
