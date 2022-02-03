var Fahne = function( name, current_field, color ) {
	this.name = name;
	this.current_field = current_field;
	this.color = color;
	this.steps = 0;
	this.FahneImage = null;
	
	this.item = [];
	
	this.init();
}


Fahne.prototype.init = function() {
	this.FahneImage = new Image();
	this.FahneImage.src = 'green-gc73e293d_640.png';
}


function rechtsKlick( evt ) {

	//stoppt Kontextmenü, das sich sonst bei Rechtsklick öffnet
	evt.preventDefault();
  
	let selectedX = parseInt( evt.offsetX / ( cvsout.width / num_fields ) );
	let selectedY = parseInt( evt.offsetY / ( cvsout.height / num_fields ));

        
		if (field_array[selectedY][selectedX].hasFahne ==false)
		{
		console.log("es gibt noch keine Fahne hier wird eine Fahne gesetzt");
		field_array[selectedY][selectedX].hasFahne = true;
		}
}
			else {
			console.log("es gibt schon eine Fahne - diese nehmen wir jetzt weg");
			field_array[selectedY][selectedX].hasFahne = false;}
			
cvsout.oncontextmenu = rechtsKlick; // Funktion wird bei rechtsklick mit der Maus ausgelöst




