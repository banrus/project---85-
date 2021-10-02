//Create a reference for canvas 
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");

//Give specific height and width to the car image
var greencar_width= 100;
var greencar_height= 90;
var greencarx= 10;
var greencary=10

background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	background_img_tag=new Image();
	background_img_tag.onload=uploadBackground;
	background_img_tag.src= background_image;

	greencar_img_tag=new Image();
	greencar_img_tag.onload=uploadgreencar;
	greencar_img_tag.src=greencar_image;
	
}

function uploadBackground() {
	ctx.drawImage(background_img_tag,0,0,canvas.clientWidth,canvas.height);

	

}

function uploadgreencar() {
	ctx.drawImage(greencar_img_tag,greencarx,greencary,greencar_width,greencar_height);

	

	
}


window.addEventListener("keydown", my_keydown);

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
		
		
}

function up(){
	//Define function to move the car upward
	if (greencary>=0){
		greencary=greencary-12;
		console.log("when up arrow key is pressed,x="+greencarx+"|y= "+greencary);
		uploadBackground();
        uploadgreencar();

	}
}

function down()
if (greencary<=0){
	greencary=greencary+12;
	console.log("when down arrow key is pressed,x="+greencarx+"|y= "+greencary);
	uploadBackground();
	uploadgreencar();
{
	//Define function to move the car downward
}

function left()
if (greencary>=0){
	greencary=greencary-12;
	console.log("when left arrow key is pressed,x="+greencarx+"|y= "+greencary);
	uploadBackground();
	uploadgreencar();
{
	//Define function to move the car left side
}

function right()
if (greencary<=0){
	greencary=greencary+12;
	console.log("when right arrow key is pressed,x="+greencarx+"|y= "+greencary);
	uploadBackground();
	uploadgreencar();
{
	//Define function to move the car right side
}
