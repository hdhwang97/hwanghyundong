let font1;

let cylinderRadius = 140;
let cylinderWidth = 500;
let textTexture;
let indexWord = 0;
let words = ['VISUAL COMMUNICATION DESIGN'];
var divHeight = 1.65;
var divWidth = 1;
var x=0;
var y; 




function preload() {
  font1 = loadFont('itc-avant-garde-gothic-std-bold-589572c7e9955.otf');
}

function setup() {
createCanvas(windowWidth*divWidth, windowHeight*divHeight,WEBGL);
textTexture = createGraphics(2*PI*cylinderRadius,windowHeight*2);
	textTexture.background(255);
  textTexture.fill(x);
	textTexture.textFont(font1);
  textTexture.textAlign(CENTER);
  textTexture.textSize(50);

}

function draw() {
	background(255);
	noStroke();


	


	


	var rotation = 1;

	let wave = (sin(frameCount * 0.005 + (0.005) * 0.005) * 1);
	
	
	textTexture.background(255);
  textTexture.textSize(50);
	for(let i = 0; i <=30; i++){
		textTexture.text(words[indexWord], PI*cylinderRadius,i*50);
	}
	
	image(textTexture, -10,-10);
	
	translate(-windowWidth, -0);
	for(let i = 0; i <= 10; i++){
		translate(cylinderRadius*2+5, 30);
		push();
		
		rotateZ(radians(45));
		push();
		
		if(i%2==0){
			rotateY(-frameCount * 0.03);	
		}else{
			rotateY(frameCount * 0.03);	
		}
		texture(textTexture);
		cylinder(cylinderRadius, windowHeight*2,255);
		pop();
		pop();
	}	
}

function changeWord() {
	indexWord++;
	if(indexWord > 19){
		indexWord = 0;
	}
	setTimeout(changeWord, 500)
}

function windowResized() {	

	
// if(windowWidth<600){divHeight=1.65;}
// else{divHeight=1;}
// if(windowWidth>600){divHeight=1;}
	


// resizeCanvas(windowWidth,windowHeight);
	
  resizeCanvas(windowWidth*divWidth, windowHeight*divHeight);
}




