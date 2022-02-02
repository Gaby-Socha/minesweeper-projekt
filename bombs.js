var Field = function(id, grid) {
	this.id = id;
	this.type = FIELD_TYPE_UNKNOWN;
	this.pos = grid.getCoordinateFromId( id );
	this.neighbors = [null,null,null,null];
	
	
	//
	// Attribut für einen Gegenstand
	//
	this.item = null;
	
	this.requiredItem = null;
	
	//
	// Die für dieses Feld zugewiesene Grafik
	//
	this.fieldImage = null;
}
//3 Bomben irgendwo auf dem Spielfeld verteilen
let size = 3;
let field.array=[];
for (let i=0; i<size; i++){
field.array[i]=[];
for(let x= 0; x<size; x++){
field.array[i][x]=new Field();

let bombs = 3;
while (bombs>0){
		let number_of_fields= field_array.flat().length;
		let random_field=field_array.flat()[parseInt(Math.random()*number_of_fields)]
		if (random_field.hasBomb==false){
			random_field.hasBomb=true;
			bombs--;
		}	
}
