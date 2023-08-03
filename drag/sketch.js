//Init canvas;
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 10;
canvas.style.border = "5px solid red";

// Global State;
const { width : canvas_width , height :  canvas_height } = canvas;
console.log("canvas_width" , canvas_width );
console.log("canvas_height" , canvas_height );
let shapes = [];
shapes.push({ x : 200, y : 50, width : 200, height : 200, color : 'red' });
let current_shape_index = 0;
let is_dragging = false;
let startX;
let startY;



const isMouseInShape = (x, y, shape) =>{
    let shape_left = shape.x;
    let shape_right = shape.x + y;
    let shape_top = shape.y;
    let shape_bottom = shape.y + y;

    if(x > shape_left && x < shape_right && y > shape_top && y < shape_bottom) {
        return true;
    }
    return false;
}

const mouse_down = function(event){
    event.preventDefault();
    startX = parseInt(event.clientX);
    startY = parseInt(event.clientY);
    let index = 0;

    for(let shape of shapes){
        if(isMouseInShape(startX, startY, shape)){
            current_shape_index = index;
            is_dragging = true;
        }

        index++;
    }
}

const mouse_up = function(event){
    if(!is_dragging) return;
    event.preventDefault();
    is_dragging = false;
}

const mouse_out = function(event){
    if(!is_dragging) return;
    event.preventDefault();
    is_dragging = false;
}

const mouse_move = function(event){
    if(!is_dragging){
        return;
    }else{
        event.preventDefault();
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        let dx = mouseX - startX;
        let dy = mouseY - startY;
        
        let current_shape = shapes[current_shape_index];
        current_shape.x += dx;
        current_shape.y +=dy;
        drawShapes();

        startX = mouseX;
        startY = mouseY;
    }
}


canvas.onmousedown = mouse_down;
canvas.onmouseup   = mouse_up;
canvas.onmouseout  = mouse_out;
canvas.onmousemove = mouse_move;


let drawShapes = ()=>{
    context.clearRect(0, 0, canvas_width, canvas_height);
    for(let shape of shapes) {
        context.fillStyle = shape.color;
        context.fillRect(shape.x, shape.y, shape.width, shape.height);
    }
}

drawShapes();