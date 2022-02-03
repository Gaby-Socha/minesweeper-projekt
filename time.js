var start_time = new Date().getTime();
var current_time = new Date().getTime();

function displayTime( ctx ) {

	ctx.save();		
	ctx.clearRect( 0,0, ctx.canvas.width, ctx.canvas.height);
	current_time = new Date().getTime();
	
	let delta_t = parseInt( (current_time - start_time) / 1000 ); 
	let delta_m = parseInt( delta_t	/ 60 ); 
	let delta_s = delta_t % 60; 		    
		
	delta_m = delta_m < 10 ? ("0"+delta_m) : delta_m;
	delta_s = delta_s < 10 ? ("0"+delta_s) : delta_s;
	
 
	let zeittext = `Zeit ${delta_m}:${delta_s} | Bomben:`;
	
	ctx.font = '24px Arial';
	ctx.fillStyle='#ff0000';
	ctx.fillText( zeittext, 5, 30 );
	
	ctx.restore();
}

var cvs = document.getElementById('cvs');
var ctx = cvs.getContext('2d');
setInterval( displayTime, 100, ctx);


