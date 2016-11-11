var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var radius = 10;
var mouseEv = false;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineWidth = radius*2;

var drawPath = function(e){
	if(mouseEv){
		context.lineTo(e.clientX, e.clientY);
		context.stroke();
		context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}

var activeDrawing = function(e){
	mouseEv = true;
	drawPath(e);
}

var ignoreDrawing = function(e){
	mouseEv = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', activeDrawing); 
canvas.addEventListener('mousemove', drawPath); 
canvas.addEventListener('mouseup', ignoreDrawing); 

document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
   var file = document.getElementById("getval").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.body.style.backgroundImage = "url(" + reader.result + ")";        
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}

