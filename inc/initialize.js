"use strict";

let canvas;
let ncols, nrows, content;

let puzzle;

window.onload = init;

function init() {
	canvas = document.getElementById("gridCanvas");
	setTargetContext(canvas.getContext("2d"));
	canvas.width = 1000;
	canvas.height = 1000;
	ncols = 12;
	nrows = 13;
	//content = new Array(ncols*nrows).fill("").map(()=>randomSmiley());
	puzzle = new Puzzle(new Grid(0, 0, canvas.width, canvas.height, ncols, nrows, new Tensor(laGrille1, TENSOR_TYPES.MATRIX)), lesMots1);
	draw();
}

function draw() {
	background(255);

	stroke();
	strokeWeight(1);
	fill();

	puzzle.grid.draw();

	stroke(255, 100, 0);
	strokeWeight(8)

	puzzle.markSolutions();
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
