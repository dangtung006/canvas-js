const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw a circle on the canvas
function drawCircle(x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

// Check if the mouse coordinates are inside the circle
function isInsideCircle(x, y, radius, event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Calculate the distance between the mouse coordinates and the center of the circle
    const distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);

    return distance <= radius;
}

// Handle mouse click event on the canvas
canvas.addEventListener('click', function(event) {
    const centerX = 200;
    const centerY = 200;
    const radius = 50;

    if (isInsideCircle(centerX, centerY, radius, event)) {
        console.log('Mouse click inside the circle!');
    }
});

// Draw the circle on the canvas
drawCircle(200, 200, 50, 'red');
