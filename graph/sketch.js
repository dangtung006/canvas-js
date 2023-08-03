let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#ddf";

const data = [
    200, 150, 170, 100, 80, 50, 350, 200, 200, 230
];

const start_value = data[0];
const distance = canvas.width / data.length;
const start_point = 0;

context.beginPath();
context.lineWidth = 3;
context.strokeStyle = "#f56";
context.moveTo(start_point, start_value);

data.forEach((item, idx)=>{
    const new_distance = start_point + (distance * (idx + 1));
    context.lineTo(new_distance, item);
});

context.lineTo(canvas.width, canvas.height);
context.lineTo(start_point, canvas.height);
context.lineTo(start_point, start_value);

context.fillStyle = "grey";
context.fill();
context.stroke();

