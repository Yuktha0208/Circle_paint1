canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="purple";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(100,100,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientY-canvas.offsetTop;
    console.log("x= " +mouse_x+" ,Y= "+mouse_y);
    circle(mouse_x,mouse_y);
}

function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
