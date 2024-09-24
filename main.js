var mevent="empty";
var last_x, last_y;
var color="black";
wol=1;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    wol=document.getElementById("width").value;
    mevent="mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX - canvas.offsetLeft;
    curry=e.clientY - canvas.offsetTop;
    if(mevent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=wol;
        console.log("last position of x and y coordinates = ");
        console.log("X = "+ last_x + " Y = " + last_y);
        ctx.moveTo(last_x, last_y);

        console.log("current position of x and y coordinates = ");
        console.log("X = "+ current_x + " Y = " + curry);
        ctx.lineTo(current_x, curry);
        ctx.stroke();
    }
    last_x=current_x;
    last_y=curry;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mevent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mevent="mouseleave";
}

function cleanup(){
    ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height);
}