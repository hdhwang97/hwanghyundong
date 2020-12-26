var mic, fft;

function setup() {
	createCanvas(windowWidth, windowHeight,WEBGL);
	
	mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
	mic.amp(1);
}

function draw() {
	background(255);
	stroke(0);
	strokeWeight(3);
	noFill();
	
	const waveform = fft.waveform();
	const spec = fft.analyze();
	const radius = 200;
	const dXZ = 15;
	const dY = 15;
	
	rotateY(frameCount/10);
	
	let points = [] ;
	for(let rad = -HALF_PI; rad < HALF_PI; rad+= PI/(dY*2*dXZ))
	{
		let wavei = map(rad,-HALF_PI,HALF_PI,0,waveform.length);
		wavei = Math.floor(wavei);
		const radiusXZOffset = map(waveform[wavei]*2,-1,1,-radius,radius,true);
		const radiusXZ = cos(rad)*(radius+radiusXZOffset);
		const y  = sin(rad)*radius;
		const x = cos(rad*dY*2)*radiusXZ;
		const z = sin(rad*dY*2)*radiusXZ;
		points.push(createVector(x,y,z));
	}
	
	for(let i = 0;  i < points.length-1; i=i+3)
	{
		line(points[i].x,points[i].y,points[i].z,points[i+1].x,points[i+1].y,points[i+1].z);
	}
}