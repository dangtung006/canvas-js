const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let rectangles = [
    { x: 100, y: 100, width: 50, height: 50, color: 'red', selected: false },
    { x: 300, y: 200, width: 50, height: 50, color: 'blue', selected: false }
];

let selectedRectangle = null;
let linePoints = [];

function drawRectangles() {
    console.log("linePoints" , linePoints);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < rectangles.length; i++) {
        const rect = rectangles[i];
        ctx.fillStyle = rect.color;
        ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

        if (rect.selected) {
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 2;
            ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
        }
    }

    // Draw the line between selected rectangles
    if (linePoints.length == 2) {
        console.log("draw beteen");
        console.log("linePoints : " , linePoints);
        ctx.beginPath();
        ctx.moveTo(linePoints[0].x, linePoints[0].y);
        ctx.lineTo(linePoints[1].x, linePoints[1].y);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

function checkCollisions(x, y) {
    for (let i = 0; i < rectangles.length; i++) {
        const rect = rectangles[i];
        if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
            rect.selected = !rect.selected;
            if (rect.selected) {
                selectedRectangle = rect;
                if (linePoints.length <=0) {
                    linePoints[0] = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
                } else {
                    linePoints[1] = [{ x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 }];
                }
                return;
            } else {
                selectedRectangle = null;
                linePoints = [];
            }
        }
    }
}

function handleMouseMove(event) {
    if (selectedRectangle) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        selectedRectangle.x = mouseX - selectedRectangle.width / 2;
        selectedRectangle.y = mouseY - selectedRectangle.height / 2;

        linePoints[1] = { x: mouseX, y: mouseY };

        drawRectangles();
    }
}

function handleMouseUp() {
    selectedRectangle = null;
}

canvas.addEventListener('mousedown', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    checkCollisions(mouseX, mouseY);
    drawRectangles();
});

canvas.addEventListener('mousemove', handleMouseMove);

canvas.addEventListener('mouseup', handleMouseUp);

drawRectangles();


// const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');

// let rectangles = [
//     { x: 100, y: 100, width: 50, height: 50, color: 'red', selected: false },
//     { x: 300, y: 200, width: 50, height: 50, color: 'blue', selected: false }
// ];

// let selectedRectangles = [];

// function drawRectangles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         ctx.fillStyle = rect.color;
//         ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

//         if (rect.selected) {
//             ctx.strokeStyle = 'black';
//             ctx.lineWidth = 2;
//             ctx.strokeRect(rect.x, rect.y, rect.width, rect.height);
//         }
//     }

//     // Draw the line between selected rectangles
//     if (selectedRectangles.length === 2) {
//         ctx.beginPath();
//         ctx.moveTo(selectedRectangles[0].x + selectedRectangles[0].width / 2, selectedRectangles[0].y + selectedRectangles[0].height / 2);
//         ctx.lineTo(selectedRectangles[1].x + selectedRectangles[1].width / 2, selectedRectangles[1].y + selectedRectangles[1].height / 2);
//         ctx.strokeStyle = 'black';
//         ctx.lineWidth = 2;
//         ctx.stroke();
//     }
// }

// function checkCollisions(x, y) {
//     for (let i = 0; i < rectangles.length; i++) {
//         const rect = rectangles[i];
//         if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
//             rect.selected = !rect.selected;
//             if (rect.selected) {
//                 selectedRectangles.push(rect);
//                 if (selectedRectangles.length > 2) {
//                     selectedRectangles.shift();
//                 }
//             } else {
//                 selectedRectangles.splice(selectedRectangles.indexOf(rect), 1);
//             }
//             return;
//         }
//     }
// }

// canvas.addEventListener('click', function(event) {
//     const rect = canvas.getBoundingClientRect();
//     const mouseX = event.clientX - rect.left;
//     const mouseY = event.clientY - rect.top;

//     checkCollisions(mouseX, mouseY);
//     drawRectangles();
// });

// drawRectangles();
