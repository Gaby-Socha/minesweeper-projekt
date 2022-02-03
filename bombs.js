var Field = function(id) { // Field Objekt Konstruktor

	this.id = id;
	
	
	this.hasBomb = false;
	
	this.hasFahne = false;
	
	this.fieldImage = new Image();
	this.fieldImage.src = 'img/Minesweeper_LAZARUS_61x61_unexplored.png';

	
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
let field_array=[];
for (let i=0; i<num_fields; i++){
field_array[i]=[];
for(let x= 0; x<num_fields; x++){
field_array[i][x]=new Field();}
}

let bombs = 3;
while (bombs>0){
		let number_of_fields= field_array.flat().length;
		let random_field=field_array.flat()[parseInt(Math.random()*number_of_fields)]
		if (random_field.hasBomb==false){
			random_field.hasBomb=true;
			bombs--;
console.log(random_field,random_field.hasBomb);	//Kontrolle über Konsole ob Bomben wirklich gesetzt werden		
		}	
}