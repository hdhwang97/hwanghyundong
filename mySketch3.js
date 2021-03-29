// let str = " GraphicDesigner Developer VisualProgrammer InteractionDesigner ";
// let str_arr = [];
// let font;
// let sdgreg;
// var Num = 6;
// txtSize=40;
// function preload() {font = loadFont("SpaceGrotesk-Bold.otf");
// }





// function setup() {

//   createCanvas(windowWidth, windowHeight, WEBGL);
//   noCursor();
//   let strs = str.split(" ");
//   for (let i = 0; i < strs.length*Num; i++) {
//     let x = random(-width / 2, width / 2);
//     let y = random(-height / 2, height / 2);
//     let z = random(-width*5, width/2);
//     str_arr.push(new Type(strs[i%strs.length], x, y, z));
//   }
// }

// function windowResized() {
// window.location.reload()
// resizeCanvas(windowWidth,windowHeight);
// }






// function draw() {
	
//   background(255);
	
// push();
	
// 	translate(windowWidth/100,windowHeight/100);
    
// 	pointLight(255, 255, 255,0,-255,255);
// 	ambientMaterial(255);
// 	// noStroke();
// 	stroke(70);
// 	strokeWeight(0.5)
// 	sphere(150,24,24);
// pop();


// 	orbitControl();
//   for (let i = 0; i < str_arr.length; i++) {
//     str_arr[i].update();
//     str_arr[i].display();
//   }
	


	
// }

// class Type {
//   constructor(_str, _x, _y, _z) {
//     this.str = _str;
//     this.x = _x;
//     this.y = _y;
//     this.z = _z;
//   }

//   update() {
//     this.z += 7;
//     if(this.z > width/2){
//     	this.z = -width*5;
//     }

//   }

//   display() {
//     push();
//     translate(this.x, this.y, this.z);
//     textAlign(CENTER, CENTER);
//     textFont(font);
//     textSize(txtSize);

// 		fill(0, 0, 0);
//     text(this.str, 0, 0);
//     pop();
//   }
// }

// <New Type> =============================================================

/******************
Code by Vamoss
Original code link:
https://www.openprocessing.org/sketch/697891

Author links:
http://vamoss.com.br
http://twitter.com/vamoss
http://github.com/vamoss
******************/

const textToWrite = "Move Forward";
const SEGMENTS    = 200;

function windowResized() {
window.location.reload()
resizeCanvas(windowWidth,windowHeight);
}

//auto start variables
let centerX, centerY, fontSize, INNER_RADIUS, RADIUS_VARIATION;

function setup() {
	createCanvas(windowWidth, windowHeight);
	centerX = windowWidth/2;
	centerY = windowHeight/2;
	
	let screenPct = min(height, width) / 1000;
	fontSize = screenPct * 150;
	INNER_RADIUS = screenPct * 200;
	RADIUS_VARIATION = screenPct * 200;
	
	textFont('Helvetica');
	textSize(fontSize);
}

//code adapted from @GoToLoop
//generates a circular noise with perfect looping
//https://forum.processing.org/one/topic/how-to-make-perlin-noise-loop.html
function pointForIndex(pct) {
	const NOISE_SCALE       = 1.5;
  let angle = pct * TWO_PI;
  let cosAngle = cos(angle);
  let sinAngle = sin(angle);
  let time = frameCount / 100;
  let noiseValue = noise(NOISE_SCALE * cosAngle + NOISE_SCALE, NOISE_SCALE * sinAngle + NOISE_SCALE, time);
  let radius = INNER_RADIUS + RADIUS_VARIATION * noiseValue;
  return {
		x: radius * cosAngle + centerX,
		y: radius * sinAngle + centerY
	};
}

function draw() {
  background(255);
	fill(242,126,27);
	// fill (250,31,98)fil(21,127,240)
  noStroke();
	
	//draw sphere
	beginShape();
		for (let i = 0; i < SEGMENTS; i++) {
			let p0 = pointForIndex(i/SEGMENTS);
			vertex(p0.x, p0.y);
		}
	endShape(CLOSE);
	
	fill (21,127,240)
		beginShape();
		for (let i = 0; i < SEGMENTS; i++) {
			let p0 = pointForIndex(i/SEGMENTS);
			vertex(p0.x/1.25, p0.y/1.25);
		}
	endShape(CLOSE);
	
	
	
	//draw text
	let pct = atan2(mouseY - centerY, mouseX - centerX) / TWO_PI;//follow mouse
	//let pct = 0;//dont follow mouse
	let pixToAngularPct = 1/((INNER_RADIUS+RADIUS_VARIATION/2)*TWO_PI);
	for (var i = 0; i < textToWrite.length; i++) {
		let charWidth = textWidth(textToWrite.charAt(i));
		pct += charWidth/2 * pixToAngularPct;
		
		//calculate angle
		let leftP = pointForIndex(pct-0.01);
		let rightP = pointForIndex(pct+0.01);
		let angle = atan2(leftP.y - rightP.y, leftP.x - rightP.x) + PI;
		
		push();
			let p = pointForIndex(pct);
			//apply angle
			translate(p.x, p.y);
				rotate(angle);
			translate(-p.x, -p.y);
		fill(0);
			text(textToWrite.charAt(i), p.x-charWidth/2, p.y);
		pop();
		
		pct += charWidth/2 * pixToAngularPct;
	}//for
}




// <END> =====================================================

// var particlesQuantity = 15000;

// var positionX = new Array(particlesQuantity);
// var positionY = new Array(particlesQuantity);
// var velocityX = new Array(particlesQuantity).fill(0);
// var velocityY = new Array(particlesQuantity).fill(0);

// function windowResized() {
// window.location.reload()
// resizeCanvas(windowWidth,windowHeight);
// }

// function setup() {
// 	createCanvas(windowWidth, windowHeight);
// 	stroke(0, 0, 0);
// 	strokeWeight(2);
	
// 	for (var particle = 1; particle < particlesQuantity; particle++) {
// 		positionX[particle] = random(0, width);
// 		positionY[particle] = random(0, height);
// 	}
	
// 	positionX[0] = 0;
// 	positionY[0] = 0;
// }

// function draw() {
// 	background(255);
	
// 	velocityX[0] = velocityX[0] * 0.5 + (mouseX - positionX[0]) * 0.1;
// 	velocityY[0] = velocityY[0] * 0.5 + (mouseY - positionY[0]) * 0.1;
	
// 	positionX[0] += velocityX[0];
// 	positionY[0] += velocityY[0];
	
// 	for (var particle = 1; particle < particlesQuantity; particle++) {
// 		var whatever = 1024 / (sq(positionX[0] - positionX[particle]) + sq(positionY[0] - positionY[particle]));
		
// 		velocityX[particle] = velocityX[particle] * 0.95 + (velocityX[0] - velocityX[particle]) * whatever;
// 		velocityY[particle] = velocityY[particle] * 0.95 + (velocityY[0] - velocityY[particle]) * whatever;
		
// 		positionX[particle] += velocityX[particle];
// 		positionY[particle] += velocityY[particle];
		
// 		if ((positionX[particle] < 0 && velocityX[particle] < 0) || (positionX[particle] > width && velocityX[particle] > 0)) {
// 			velocityX[particle] = -velocityX[particle];
// 		}
		
// 		if ((positionY[particle] < 0 && velocityY[particle] < 0) || (positionY[particle] > height && velocityY[particle] > 0)) {
// 			velocityY[particle] = -velocityY[particle];
// 		}
		
// 		point(positionX[particle], positionY[particle]);
// 	}
// }

// // function mousePressed() {
// // 	for (var particle = 1; particle < particlesQuantity; particle++) {
// // 		positionX[particle] = random(0, width);
// // 		positionY[particle] = random(0, height);
// // 	}
