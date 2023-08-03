var lastX, lastY;

function getCurrentPosition(e){
    var x ,y;
    if(e.pageX !== undefined && e.pageY !== undefined) {
        x = e.pageX;
        y = e.pageY;
    }else{
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return [x, y];
}

function drawCircle(context, posX, posY){
    if(lastX){
        context.globalCompositeOperation='destination-over';
        context.beginPath();
        context.moveTo(lastX,lastY);
        context.lineTo(posX, posY);
        context.stroke();
        context.globalCompositeOperation='source-over';
    }
    
    context.beginPath();
    context.arc(posX,posY,10,0,Math.PI*2);
    context.closePath();
    context.fill();
}

function handleMouseDown(e){
    e.preventDefault();
    e.stopPropagation();
    const context = this.getContext("2d");
    context.fillStyle='red';
    const [ x, y ] = getCurrentPosition(e);
    var posX =  x - this.offsetLeft;
    var posY =  y - this.offsetTop;
    drawCircle(context, posX, posY);

    lastX = posX;
    lastY = posY;
    
}

function main(){
    const canvas = document.getElementById("canvas");
    canvas.addEventListener("mousedown", handleMouseDown);
}

main();
