"use strict";

let targetContext;

function setTargetContext(ctx) {
	targetContext = ctx;
}

function strokeWeight(weight, ctx=targetContext) {
	ctx.lineWidth = weight;
}

function border(r=0, g=r, b=g, a=1, ctx=targetContext) {
	noFill();
	stroke(r, g, b, a, ctx);
	rect(0, 0, ctx.canvas.width, ctx.canvas.height, ctx);
}

function rect(xLeft, yTop, width, height, ctx=targetContext) {
	ctx.beginPath();
	ctx.rect(xLeft, yTop, width, height);
	ctx.closePath();
	drawShape(ctx);
}

function filledGrid(xLeft, yTop, width, height, numberOfCols, numberOfRows, content, ctx=targetContext) {
	grid(xLeft, yTop, width, height, numberOfRows, numberOfCols, ctx);
	gridContent(xLeft, yTop, width, height, numberOfRows, numberOfCols, content, ctx);
}

function grid(xLeft, yTop, width, height, numberOfRows, numberOfCols, ctx=targetContext) {
	rows(xLeft, yTop, width, height, numberOfRows, ctx);
	columns(xLeft, yTop, width, height, numberOfCols, ctx);
}

function gridContent(xLeft, yTop, width, height, numberOfRows, numberOfCols, content, ctx=targetContext) {
	let scale = new SimpleVector(width/numberOfCols, height/numberOfRows);
        
	if(content.length != numberOfRows*numberOfCols)
		return error("The content has to much or not enough elements");
        
	for(let i = 0; i < numberOfCols; i++) {
		for(let j = 0; j < numberOfRows; j++) {
			let str = content[i + j*numberOfCols];
			let rectPos = new SimpleVector(xLeft + i*scale.x, yTop + j*scale.y);

			textFitInBox(rectPos.x, rectPos.y, scale.x, scale.y, str, ctx);
		}
	}
}

function markLineOnGrid(startPosX, startPosY, endPosX, endPosY, gridX, gridY, gridWidth, gridHeight, rows, cols, ctx=targetContext) {
	let scale = new SimpleVector(gridWidth/cols, gridHeight/rows);
	let absoluteStartPos = new SimpleVector(gridX + scale.x*startPosX + scale.x/2, gridY + scale.y*startPosY + scale.y/2);
	let absoluteEndPos = new SimpleVector(gridX + scale.x*endPosX + scale.x/2, gridY + scale.y*endPosY + scale.y/2);

	line(absoluteStartPos.x, absoluteStartPos.y, absoluteEndPos.x, absoluteEndPos.y, ctx);
}

function rows(xLeft, yTop, width, height, numberOfRows, ctx=targetContext) {
	let yScale = height/numberOfRows;

	for(let i = yTop; i <= height + yTop; i += yScale)
		line(xLeft, i, xLeft + width, i, ctx);
}

function columns(xLeft, yTop, width, height, numberOfCols, ctx=targetContext) {
	let xScale = width/numberOfCols;

	for(let i = xLeft; i <= width + xLeft; i += xScale)
		line(i, yTop, i, yTop + height, ctx);
}

function line(x1, y1, x2, y2, ctx=targetContext) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.closePath();
	drawShape(ctx);
}

