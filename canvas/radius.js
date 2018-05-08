var setRadius = function(newRadius){
	if(newRadius < minRadius)
		newRadius = minRadius;
	else if(newRadius > maxRadius)
		newRadius = maxRadius;
	radius = newRadius;
	context.lineWidth = radius * 2;
	
	brushSizeControl.innerHTML = radius;
}

var minRadius = 1.5;
var maxRadius = 100;
var defaultRadius = 20;
var interval = 5;
var brushSizeControl = document.getElementById('brushSizeControl');
var decreaseSize = document.getElementById('decreaseSize');
var increaseSize = document.getElementById('increaseSize');

decreaseSize.addEventListener('click', function(){
	setRadius(radius - interval);
	
});

increaseSize.addEventListener('click', function(){
	setRadius(radius + interval);
	
});