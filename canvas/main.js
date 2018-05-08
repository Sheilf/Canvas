var canvas = document.getElementById('canvas'); 
var context = canvas.getContext('2d'); 

var radius = 10;
var draggingMouse = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

context.lineWidth = radius*2; //width of the lineTo "radius" connecter

var putPoint = function(e){
	if(draggingMouse){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill(); 
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
	
	
}

var startBrush = function(){
	draggingMouse = true;
}

var endBrush = function(){
	draggingMouse = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', startBrush);
canvas.addEventListener('mousemove', putPoint); 
canvas.addEventListener('mouseup', endBrush);




