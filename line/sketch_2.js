var clickTimes = 0;
var initialPoint = [0, 0];


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
    clickTimes+= 1;
 
    
    if(clickTimes <= 1){
        context.beginPath();
        console.log("BN : " , clickTimes);
        context.moveTo(posX, posY);
        context.strokeStyle = 'red';
        context.arc(posX, posY, 50, 0, Math.PI * 2);
        context.stroke()
    }else{
        console.log("continues : " , clickTimes);
        context.strokeStyle = 'red';
        context.arc(posX, posY, 50, 0, Math.PI * 2);
        context.lineTo(posX, posY, 6);
        context.stroke();
    }
   
}

function main(){
    const canvas = document.getElementById('canvas');
    canvas.addEventListener("click", drawLine);
}

main();