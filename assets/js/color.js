
var colors = ['white', 'black', 'green', 'red', 'blue', 'pink', 'orange', 'gray', 'violet', 'indigo'];

for (var i = 0, n = colors.length; i < n; i++) {
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setDrawColor);
	document.getElementById('colors').appendChild(swatch);
}


function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = "swatch";
	}
}

function setDrawColor(e){
	document.body.style.cursor = "url(assets/img/cursors/sPen.cur), default";
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += ' active'; 
}



//var pathColor = document.getElementById('pathColor');
var eraser = document.getElementById('eraser');
/*function pathColored(){
	document.body.style.backgroundColor = pathColor.value;		
}
*/
function selectEraser(){
	document.body.style.cursor = "url(assets/img/cursors/eraser.cur), default";
	context.fillStyle = "white";
	context.strokeStyle = "white";
}

eraser.addEventListener('click', selectEraser);
//pathColor.addEventListener('change', pathColored);