let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

var window_height = window.innerHeight;
var window_width = window.innerWidth;
canvas.width = window_width;
canvas.height = window_height;
canvas.style.background = "#bbf";


class Circle {
    constructor(xpoint, ypoint, radius, color){
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(context){
        context.beginPath();
        context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
        context.strokeStyle = "grey";
        context.lineWidth = 3;
        context.fillStyle = this.color;
        context.fill();
        context.stroke();
        context.closePath();
    }

    clickCircle({ x : xMouse, y : yMouse}){
        let distance = Math.pow((xMouse  - this.xpoint), 2) + Math.pow((yMouse - this.ypoint), 2);
        distance = Math.sqrt(distance);

        if(distance < this.radius){
            this.changeColor("#56f");
        }else{
            this.changeColor("#f56")
        }

    }

    changeColor(newColor){
        this.color = newColor;
        this.draw(context);
    }
}

let circle = new Circle(200, 200, 100, '#f56');
circle.draw(context);


canvas.addEventListener("click", (event)=>{
    const rect = canvas.getBoundingClientRect();
    const { clientX, clientY } = event;
    const { left, top } = rect;

    circle.clickCircle({
        x : clientX - left,
        y : clientY - top
    })
});

