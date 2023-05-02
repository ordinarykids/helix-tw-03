let t = 0;
let frequency = 0.001;
let thickness = 13;
let amplitude = 100;

function setup() {
	createCanvas(3000, 300);
}

function draw() {
	background(255);
	translate(0, height / 2);
	stroke(255);
	strokeWeight(thickness);

	let startX = 0;
	let endX = width;
	// blendMode(MULTIPLY);
	for (let i = startX; i <= endX; i++) {
		let lineY = sin(i * frequency + t) * amplitude;
		let lineY2 = sin(i * frequency + t - 200) * amplitude;
		let reflectionY = lineY * -1;
		let reflectionY2 = lineY2 * -1;
		stroke(63, 76, 119);
		line(i, lineY, i, lineY + thickness);

		stroke(122, 188, 113);
		line(i, lineY2, i, lineY2 + thickness);


		stroke(244, 91, 132);
		line(i, reflectionY, i, reflectionY - thickness);

		stroke(248, 190, 8);
		line(i, reflectionY2, i, reflectionY2 - thickness);
	}

	t += 0.01;

	if (t >= TWO_PI) {
		// noLoop();
	}
}