canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
nasa_mars_images_array = ["nasa_1.jpg","nasa_2.jpeg", "nasa_3.jpg","mars.jpg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = "racing.jpg"
console.log("background_image = " + background_image);
rover_image = "car1.png";
rover_x = 10;
rover_y = 10;

roverw_width = 100;
roverw_height = 90;
roverw_image = "car2.jfif";
rover_xw = 10;
rover_yw = 100;
function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;
rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;
roverw_imgTag = new Image();
roverw_imgTag.onload = uploadroverw;
roverw_imgTag.src = roverw_image;
}
function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}
function uploadroverw() {
	ctx.drawImage(roverw_imgTag, rover_xw, rover_yw, roverw_width, roverw_height);
	}
window.addEventListener("keydown", my_keydown);
window.addEventListener("keydown", my_keydownw);
function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
    up();
console.log("up");
}
if(keyPressed == '40')
{
down();
console.log("down");
}
if(keyPressed == '37')
{
left();
console.log("left");
}
if(keyPressed == '39')
{
right();
console.log("right");
}
};
function up()
{
	if(rover_y >=0)
	{
		rover_y = rover_y - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function down()
{
	if(rover_y <=500)
	{
		rover_y =rover_y+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function left()
{
	if(rover_x >= 0)
	{
		rover_x =rover_x - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_x <= 700)
	{
		rover_x =rover_x + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	
function my_keydownw(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '38')
{
    upw();
console.log("up");
}
if(keyPressed == '40')
{
downw();
console.log("down");
}
if(keyPressed == '37')
{
leftw();
console.log("left");
}
if(keyPressed == '39')
{
rightw();
console.log("right");
}
};
function upw()
{
	if(rover_yw >=0)
	{
		rover_yw = rover_yw - 10;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadrover();
	}
}
function downw()
{
	if(rover_yw <=500)
	{
		rover_yw =rover_yw+ 10;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function leftw()
{
	if(rover_xw >= 0)
	{
		rover_xw=rover_xw - 10;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadrover();
	}
}
function right()
{
	if(rover_xw <= 700)
	{
		rover_xw =rover_xw + 10;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadrover();
   }
}
	