var mouseEvent="empty";
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width_of_line=5;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
    color=document.getElementById("color").value ;
    width=document.getElementById("width_of_line").value ;
    radius=document.getElementById("radius").value ;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    cpox=e.clientX-canvas.offsetLeft;
    cpoy=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
ctx.arc(cpox,cpoy,radius,0,2*Math.PI);
        ctx.stroke();
    }
}

function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);

}






























    
