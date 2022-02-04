var Field = function(id) { // Field Objekt Konstruktor

	this.id = id;
	
	
	this.hasBomb = false;
	
	this.hasFahne = false;
	
	this.fieldImage = new Image();
	this.fieldImage.src = 'img/Minesweeper_LAZARUS_61x61_unexplored.png';
	this.mines = 0;
	
}


Field.prototype.draw = function(cvsout,y,x) {
	
	let ctxout = cvsout.getContext('2d');
	
	if(this.fieldImage) {
		ctxout.drawImage( this.fieldImage, 
		x * cvsout.width / num_fields, 
		y * cvsout.height / num_fields, 
		(cvsout.width / num_fields ), // Größe des Bildes
		(cvsout.height / num_fields) );
	}	
}

function felderZeichnen(field_array, cvsout) { //ruft jedes Feld einzelnd auf und läßt es sich mit draw zeichnen
	
	for(let i = 0; i <= field_array.length - 1; i++){

		for(let k = 0; k <= field_array[i].length - 1; k++){
			field_array[i][k].draw(cvsout,i,k);
		}
	}	
}



//3 Bomben irgendwo auf dem Spielfeld verteilen
//Variable num_fields wird aus function.js genommen
let bombs = 3;
let field_array=[];
function feldgroesse(){
	field_array=[];
	for (let i=0; i<num_fields; i++){
		field_array[i]=[];

		for(let x= 0; x<num_fields; x++){
			field_array[i][x]=new Field();
		}
	}


	while (bombs>0){
		let number_of_fields= field_array.flat().length;
		let random_field=field_array.flat()[parseInt(Math.random()*number_of_fields)]
		if (random_field.hasBomb==false){
			random_field.hasBomb=true;
			bombs--;
			console.log(random_field,random_field.hasBomb);	//Kontrolle über Konsole ob Bomben wirklich gesetzt werden
			random_field.img.src = 'img/bomb-gd5bc8a0fc_640.png';
		}	
	}
}
//leere Felder um die Bomben herum definieren
function countMines(y,x)
{
	let mines = 0;
	let max = field_array.length
	if (x+1<max && field_array [y][x+1].hasBomb == true)
	{
			mines++
	}		
	if (x-1>=0 &&  field_array [y][x-1].hasbomb == true)
	{
	mines++
	}
	if (y-1>=0 && field_array [y-1][x].hasbomb == true)
	{
	mines++
	}
	if (y-1>=0 && x-1>=0 && field_array [y-1][x-1].hasbomb == true)
	{
	mines++
	}	
	if (y-1>=0 && x+1<max && field_array [y-1][x+1].hasbomb == true)
	{
	mines++
	}
	if (y-1<max && x-1>=0 && field_array [y+1] [x-1].hasbomb == true)
	{
	mines++
	}
	if (y+1<max && field_array [y+1] [x].hasbomb == true)
	{
	mines++
	}
	if (y+1<max && x+1<max && field_array [y+1] [x+1].hasbomb == true)
	{
	mines++
	}
	console.log(mines);
	}
	