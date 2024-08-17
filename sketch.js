let collectionOfColors = ["red", "orange", "yellow", "green", "blue", "purple","white",];
let walkingTeam = [];

// for each color of my collectionOfColors 
for(let t=0; t<collectionOfColors.length; t++) {
  //populate walkingTeam with nodes of type Waler
  walkingTeam.push( new Walker(200, 200, 5, collectionOfColors[t]) );
}

function setup() {
  createCanvas(700, 700);
  background(0);
  frameRate(3);
}

function draw() {
  // make each team mamber walk 
  for(let t=0; t<walkingTeam.length; t++) {
    walkingTeam[t].doOneStep();
  }
}