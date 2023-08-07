const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Define the control points of the Bezier curve
let controlPoints = [
    { x: 50, y: 200 },
    { x: 100, y: 200 },
    { x: 200, y: 100 },
    { x: 300, y: 300 }
];

let selectedPoint = null; // Keep track of the selected control point

// Function to draw the Bezier curve
function drawBezierCurve() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.moveTo(controlPoints[0].x, controlPoints[0].y);
    ctx.bezierCurveTo(
        controlPoints[1].x, controlPoints[1].y,
        controlPoints[2].x, controlPoints[2].y,
        controlPoints[3].x, controlPoints[3].y
    );
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Draw control points
    ctx.fillStyle = 'red';
    for (let i = 0; i < controlPoints.length; i++) {
        ctx.beginPath();
        ctx.arc(controlPoints[i].x, controlPoints[i].y, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Function to check if a point is inside a circle
function isInsideCircle(x, y, circleX, circleY, radius) {
    const distance = Math.sqrt((x - circleX) ** 2 + (y - circleY) ** 2);
    return distance <= radius;
}

// Event listener for mouse down
canvas.addEventListener('mousedown', function(event) {
    for (let i = 0; i < controlPoints.length; i++) {
        if (isInsideCircle(event.clientX, event.clientY, controlPoints[i].x, controlPoints[i].y, 5)) {
            selectedPoint = i;
            break;
        }
    }
});

// Event listener for mouse move
canvas.addEventListener('mousemove', function(event) {
    if (selectedPoint !== null) {
        controlPoints[selectedPoint].x = event.clientX;
        controlPoints[selectedPoint].y = event.clientY;
        drawBezierCurve();
    }
});

// Event listener for mouse up
canvas.addEventListener('mouseup', function() {
    selectedPoint = null;
});

// Draw the initial Bezier curve
drawBezierCurve();
