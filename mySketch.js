let font1;

let cylinderRadius = 120;
let cylinderWidth = 500;
let textTexture;
let indexWord = 0;
let words = ['HWANG HYUN DONG.NET'];
var divHeight = 0.8;
var divWidth = 0.99;




function preload() {
  font1 = loadFont('itc-avant-garde-gothic-std-bold-589572c7e9955.otf');
}

function setup() {
createCanvas(windowWidth*divWidth, windowHeight,WEBGL);
textTexture = createGraphics(2*PI*cylinderRadius,windowHeight*2);
	
	textTexture.background(255);
  textTexture.fill(0);
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
	for(let i = 0; i <=55; i++){
		textTexture.text(words[indexWord], PI*cylinderRadius,i*50);
	}
	
	image(textTexture, -1000,-1000);
	
	translate(-windowWidth, -30);
	for(let i = 0; i <= 10; i++){
		translate(cylinderRadius*2+100, 0);
		push();
		
		rotateZ(radians(45));
		push();
		
		if(i%2==0){
			rotateY(-frameCount * 0.03);	
		}else{
			rotateY(frameCount * 0.03);	
		}
		texture(textTexture);
		cylinder(cylinderRadius, windowHeight*2,20);
		pop();
		pop();
	}	
}

function changeWord() {
	indexWord++;
	if(indexWord > 4){
		indexWord = 0;
	}
	setTimeout(changeWord, 500)
}

function windowResized() {	

	
if(windowWidth<600){divHeight=1.65;}
else{divHeight=1;}
if(windowWidth>600){divHeight=1;}
	


// resizeCanvas(windowWidth,windowHeight);
	
  resizeCanvas(windowWidth*divWidth, windowHeight*divHeight);
}




