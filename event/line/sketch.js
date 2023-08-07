const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw a line on the canvas
function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Check if the mouse coordinates are within a certain distance to the line
function isInsideLine(x1, y1, x2, y2, lineWidth, event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate the distance from the mouse coordinates to the line
    const distance = Math.abs((x2 - x1) * (y1 - mouseY) - (x1 - mouseX) * (y2 - y1)) / Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    return distance <= lineWidth / 2;
}

// Handle mouse click event on the canvas
canvas.addEventListener('click', function(event) {
    const x1 = 100;
    const y1 = 100;
    const x2 = 300;
    const y2 = 300;
    const lineWidth = 5;

    if (isInsideLine(x1, y1, x2, y2, lineWidth, event)) {
        console.log('Mouse click on the line!');
    }
});

// Draw the line on the canvas
drawLine(100, 100, 300, 300, 'blue');
