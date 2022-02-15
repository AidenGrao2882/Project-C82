var mouseEvent = "empty";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = 2;

var current_position_of_mouse_x, current_position_of_mouse_y;

canvas.addEventListener("mousedown , my_mousedown");

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    radius = document.getElementById("radius").value;
    width_of_line = document.getElementById("width_of_the_line").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove" , my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x = e.ClientX - canvas.offsetLeft
    current_position_of_mouse_y = e.ClienY - canvas.offsetTop

    if (mouseEvent == "mouseDown")
    {
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
        ctx.stoke();
    }
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup(e)
{
    mouseEvent = mouseUP
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = mouseLeave
}

function ClearArea()
{
    ctx.clearRect(0 , 0 , ctx.cavas.width, ctx.canvas.height);
}