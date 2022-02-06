// Field Objekt Konstruktor wird aufgerufen mit: Variable = new Field (id)
var Field = function(id) { // var Field ist quasi der "Bauplan" -  function = "Details"= ab { 
// Informationen - Objektattribute werden festgelegt / mit this. wird jedes Attribut außerhalb des Objektes ansprechbar
//alles was hinter this. steht sind Objektattribute
	this.id = id;
	//this.x = x;
	//this.y = y;
	 
	this.hasBomb = false;
	
	this.hasFahne = false;
	this.feldstatus = 'verdeckt';
	this.fieldImage = new Image();
	this.fieldImage.src = 'img/Minesweeper_LAZARUS_61x61_unexplored.png';
	this.mines = 0;
	
}

//Methode draw wird immer auf ein fieldObjekt aufgerufen (spricht also ein Feld an)
Field.prototype.draw = function(cvsout,y,x) {
	// Holt sich Kontext (den Bezug) um zu wissen auf welches Canvas gezeichnet werden soll
	let ctxout = cvsout.getContext('2d');
	//Abfrage hat das angesprochene Feld ein fieldImage? 
	if(this.fieldImage) {
		// wenn es ein Bild gibt dann wird dieses Bild an der Feldposition eingezeichnet
		// ctxout = auf diesem canvas wird gezeichnet / drawImage = zeichne das folgende Bild 
		ctxout.drawImage( 
		this.fieldImage, 				// das Bild das gezeichnet werden soll
		x * cvsout.width / num_fields,  // x Position - wo angefangen wird zu zeichnen 
		y * cvsout.height / num_fields, // y Position - wo angefangen wird zu zeichnen
		(cvsout.width / num_fields ),   // die Breite des Bildes (z.B. (cvsout.width -5 = 5 Pixelrand rundherum/wenn 2,5 = 2.5 schreiben)
		(cvsout.height / num_fields) ); // die Höhe des Bildes
		
	}	
}

function felderZeichnen(field_array, cvsout) { //ruft jedes Feld einzelnd auf und läßt es sich mit draw zeichnen
	//Array.length zählt z.B. von 1 - 5 aber Array nennt seine Indexwerte 0 - 4 
	// deswegen muss bei array.length - 1 geschrieben werden wenn der ganze Array  abgefragt werden soll - sonst versucht er den Indexwert 5
    //	aufzurufen und en gibt es nicht
	for(let i = 0; i <= field_array.length - 1; i++){

		for(let k = 0; k <= field_array[i].length - 1; k++){
	//jedes Feld ruft sich .draw auf und zeichnet sein zugeordnetes Bild ein	
	//weil die For-Schleifen jedes Feld ansprechen zeichnen sich alle Felder die es gibt neu ein
		field_array[i][k].draw(cvsout,i,k);
		}
	}	
}





//leere Felder um die Bomben herum definieren

	function countMines(x,y)
{
	let mines = 0;
	let max = field_array.length
	if (x+1<max && field_array [y][x+1].hasBomb == true)
	{
		mines++
	}
	if (x-1>= 0 && field_array [y][x-1].hasBomb == true)
	{
		mines++
	}
	if (y-1>=0 && field_array [y-1][x].hasBomb == true)
	{
		mines++
	}
	if (y-1>=0 && x-1>=0 && field_array [y-1][x-1].hasBomb == true)
	{
		mines++
	}
	if (y-1>=0 && x+1<max && field_array [y-1][x+1].hasBomb == true)
	{
		mines++
	}
	if (y+1<max && x-1>=0 && field_array [y+1][x-1].hasBomb == true)
	{
		mines++
	}
	if (y+1<max && field_array [y+1][x].hasBomb == true)
	{
		mines++
	}
	if (y+1<max && x+1<max && field_array [y+1][x+1].hasBomb == true)
	{
		mines++
	}
	
	
//console.log(mines);
return mines;
}
