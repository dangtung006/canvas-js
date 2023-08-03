var clickTimes = 0;
var lastClickedPoint = [0, 0];

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

function drawLine(e){
    var context = this.getContext('2d');
    const [x, y] = getCurrentPosition(e);
    var posX = x - this.offsetLeft;
    var posY = y - this.offsetTop;

    console.log("last click " , { x : lastClickedPoint[0] , y : lastClickedPoint[1]});
    
    if(clickTimes != 1){
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(posX, posY, 10, 0, Math.PI * 2);
        context.fill();
        // context.closePath();
        clickTimes+= 1;
        console.log("clicked " , clickTimes);
    }else{
      
        context.beginPath();
        context.fillStyle = 'red';
        context.arc(posX, posY, 10, 0, Math.PI * 2);
        context.fill();
   
        context.moveTo(lastClickedPoint[0], lastClickedPoint[1]);
        context.lineTo(posX, posY, 6);
        context.strokeStyle = '#000000';
        context.stroke();
        clickTimes = 0;
    }

    lastClickedPoint = [posX, posY];
}

function main(){
    const canvas = document.getElementById('canvas');
    canvas.addEventListener("click", drawLine);
}

main();

