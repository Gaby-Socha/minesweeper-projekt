let num_fields = 3;
function drawGrid( fields ) {
	let cvsout = document.getElementById('cvsout');
	num_fields=fields;
	feldgroesse();
	let ctx = cvsout.getContext('2d');
	
	ctx.clearRect( 0, 0, cvsout.width, cvsout.height);
	ctx.beginPath();
	
	
	for( let x = 0; x <= cvsout.width; x+=cvsout.width/fields ) {
		ctx.moveTo( x , 0 );
		ctx.lineTo( x , cvsout.height) ;
	}

	for( let y = 0; y <= cvsout.height; y+=cvsout.height/fields ) {
		ctx.moveTo( 0 , y );
		ctx.lineTo( cvsout.width, y ) ;
	}
	
	ctx.stroke();

}

function selectField( xpos, ypos ) {
	let cvsout = document.getElementById('cvsout');
	let ctx = cvsout.getContext('2d');
	
	ctx.fillStyle="#ffffff";
	ctx.fillRect( xpos * (cvsout.width/num_fields), ypos * (cvsout.height/num_fields), (cvsout.width/num_fields), (cvsout.height/num_fields) );

}

function mouseMove( evt ) {
	let cvsout = document.getElementById('cvsout');
	
	let selectedX = parseInt( evt.offsetX / ( cvsout.width / num_fields ) ) ;
	let selectedY = parseInt( evt.offsetY / ( cvsout.height / num_fields ) ) ;

	document.title = selectedX + ":" + selectedY;
	
//field_array[0][0].fieldImage.onload = () => { // Feld 0 0 vom array wird angeprochen 
	//felderZeichnen(field_array, cvsout); //die gesamte Grafik von jedem einzelnen Feld wird neu geladen (damit das gesamte Spielfeld)
//}
felderZeichnen(field_array,cvsout);
	selectField(selectedX,selectedY);

}

let cvsout = document.getElementById('cvsout');
cvsout.onmousemove = mouseMove;


drawGrid(num_fields);

