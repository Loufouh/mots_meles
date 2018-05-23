"use strict";

let isStroking = true;
let isFilling = true;

function fill(r=0, g=r, b=g, a=1, ctx=targetContext) {
	ctx.fillStyle = RGBAToString(r, g, b, a);
	isFilling = true;
}

function stroke(r=0, g=r, b=g, a=1, ctx=targetContext) {
	ctx.strokeStyle = RGBAToString(r, g, b, a);
	isStroking = true;
}

function background(r=0, g=r, b=g, a=1, ctx=targetContext) {
	fill(r, g, b, a, ctx);
	noStroke();
	rect(0, 0, ctx.canvas.width, ctx.canvas.height, ctx);
}

function RGBAToString(r, g, b, a) {
	return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function noFill() {
	isFilling = false;
}

function noStroke() {
	isStroking = false;
}

function lineCap(type, ctx=targetContext) {
	ctx.lineCap = type;
}

function drawShape(ctx=targetContext) {
	if(isFilling)
		ctx.fill();
	if(isStroking)
		ctx.stroke();
}

