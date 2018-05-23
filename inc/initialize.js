"use strict";

let canvas;
let ncols, nrows, content;

let gameGrid;

window.onload = init;

function init() {
	canvas = document.getElementById("gridCanvas");
	setTargetContext(canvas.getContext("2d"));
	canvas.width = 1000;
	canvas.height = 1000;
	ncols = 10;
	nrows = 10;
	content = new Array(ncols*nrows).fill("").map(()=>randomSmiley());
	gameGrid = new Grid(0, 0, canvas.width, canvas.height, ncols, nrows, content);
	//setInterval(draw, 10);
	draw();
}

function draw() {
	background(255);
	stroke();
	strokeWeight(1);
	fill();
	gameGrid.draw();
	stroke(255, 100, 0);
	strokeWeight(8)
	lineCap("round");
	gameGrid.markLine({
		startPosX: randomInt(0, ncols - 1),
		startPosY: randomInt(0, nrows - 1),
		endPosX: randomInt(0, ncols - 1),
		endPosY: randomInt(0, nrows - 1)
	});

	content[randomInt(0, ncols*nrows - 1)] = randomSmiley();
}

function randomSmiley() {
	let smileys = ["😅", "😄", "😃", "😂", "😁", "😆", "😉", "😊", "😋", "😌", "😒"];
	return smileys[randomInt(0, smileys.length - 1)];
}

function randomStr(length) {
	let str = "";
	
	for(let i = 0; i < length; i++)
		str += randomChar();
	return str;
}

function randomChar() {
	return String.fromCharCode(randomInt("a".charCodeAt(0), "z".charCodeAt(0)));
}

function randomInt(min, max) {
	return Math.floor(Math.random()*(max - min + 1) + min);
}
