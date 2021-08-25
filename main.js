mouseEvent="empty";
var last_position_x,last_position_y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width_of_line=5;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
color=document.getElementById("color").value ;
width_of_line=document.getElementById("width_of_line").value;
mouseEvent="mousedown";

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
current_position_x=e.clientX-canvas.offsetLeft;
current_position_y=e.clientY-canvas.offsetTop;

if(mouseEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;

    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
}
last_position_x=current_position_x;
last_position_y=current_position_y;
}

canvas.addEventListener("mouseup",my_mouseUp);

function my_mouseUp(e){
mouseEvent="mouseUp";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
mouseEvent="mouseleave";

}
function clear_area(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}