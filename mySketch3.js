let str = " GraphicDesigner Developer VisualProgrammer InteractionDesigner ";
let str_arr = [];

let font;
let sdgreg;
var Num = 6;
var txtSize = 120;
function preload() {font = loadFont("SpaceGrotesk-Bold.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noCursor();
  let strs = str.split(" ");
  for (let i = 0; i < strs.length*Num; i++) {
    let x = random(-width / 2, width / 2);
    let y = random(-height / 2, height / 2);
    let z = random(-width*5, width/2);
    str_arr.push(new Type(strs[i%strs.length], x, y, z));
  }
}

function windowResized() {	
if(windowWidth<600){txtSize = 60;}
else{txtSize = 120;}

resizeCanvas(windowWidth,windowHeight);

}


function draw() {

  background(255);
	
push();
	
	translate(windowWidth/100,windowHeight/100);
    
	pointLight(255, 255, 255,0,-255,255);
	ambientMaterial(255);
	// noStroke();
	stroke(70);
	strokeWeight(0.5)
	sphere(150,24,24);
pop();


	orbitControl();
  for (let i = 0; i < str_arr.length; i++) {
    str_arr[i].update();
    str_arr[i].display();
  }
	


	
}

class Type {
  constructor(_str, _x, _y, _z) {
    this.str = _str;
    this.x = _x;
    this.y = _y;
    this.z = _z;
  }

  update() {
    this.z += 7;
    if(this.z > width/2){
    	this.z = -width*5;
    }
  }

  display() {
    push();
    translate(this.x, this.y, this.z);
    textAlign(CENTER, CENTER);
    textFont(font);
    textSize(120);
		fill(0, 0, 0);
    text(this.str, 0, 0);
    pop();
  }
}


