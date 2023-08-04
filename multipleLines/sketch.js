
const canvas    = document.getElementById("canvas");
const context   = canvas.getContext("2d");
var dragPoint   = -1;
var pointSize   = 30;
var points      = [];


function getPosition(e){
    var rect = canvas.getBoundingClientRect();
    var x    = e.clientX - rect.left;
    var y    = e.clientY - rect.top;
    return { x, y }
}

function getPointAt(x, y) {
    for(let idx = 0; idx < points.length; idx++) {
        if(Math.abs(points[idx].x - x) < pointSize && Math.abs(points[idx].y -y) < pointSize){
            return idx;
        }
    }
    return -1;
}

function handleMouseDown(e){
    var {x , y } = getPosition(e);
    dragPoint = getPointAt(x, y);

    if(dragPoint == -1 ){
        points.push({x , y, node : points.length + 1});
        draw();
    }

}

function handleMouseMove(e){
    if(dragPoint !== -1){
        var currentPoint = getPosition(e);
        points[dragPoint].x = currentPoint.x;
        points[dragPoint].y = currentPoint.y;
    }

    draw();
}

function handleMouseUp(e){
    dragPoint = -1;
}

function draw(){
    if(points.length > 0){
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawLines();
        drawPoints();
    }
}

function drawPoints(){
    context.strokeStyle = "red";
    context.lineWidth = 4;
    
    points.forEach(point=>{
        context.beginPath();
        context.arc(point.x, point.y, pointSize, 0, Math.PI * 2, true);
        context.fillStyle = "red";
        context.fill();
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "30px Arial";
        context.fillStyle = "#E7E0CA";
        context.fillText(point.node, point.x, point.y);
        context.stroke();
    })
}

function drawLines(){
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    context.strokeStyle = "blue";
    context.lineWidth = "4";
    points.forEach(point=>{
        context.lineTo(point.x, point.y);
    })
    context.stroke();
}

const saveImageToLocal = (event) => {
    let link = event.currentTarget;
    link.setAttribute('download', 'routes.png');
    let image = canvas.toDataURL('image/png');
    link.setAttribute('href', image);
};

function main(){
    canvas.addEventListener("mousedown" , handleMouseDown);
    canvas.addEventListener("mouseup" , handleMouseUp);
    canvas.addEventListener("mousemove" , handleMouseMove);
    document.getElementById("download_image_link").addEventListener("click", saveImageToLocal)
    draw();
}

main();