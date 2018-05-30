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
		return error("The content has to much or not enough elements ");
        
	for(let i = 0; i < numberOfCols; i++) {
		for(let j = 0; j < numberOfRows; j++) {
			let str = content[i + j*numberOfCols];
			let rectPos = new SimpleVector(xLeft + i*scale.x, yTop + j*scale.y);

			textFitInBox(rectPos.x, rectPos.y, scale.x, scale.y, str, ctx);
		}
	}
}

function markLineOnGrid(lineStartPosX, lineStartPosY, lineEndPosX, lineEndPosY, gridPosX, gridPosY, scaleX, scaleY, ctx=targetContext) {
	let scale = new SimpleVector(scaleX, scaleY);

	let absoluteStartCasePos = getCasePositionOnGrid(new SimpleVector(gridPosX, gridPosY),
													 new SimpleVector(scale.x, scale.y),
													 new SimpleVector(lineStartPosX, lineStartPosY));

	let absoluteEndCasePos = getCasePositionOnGrid(new SimpleVector(gridPosX, gridPosY),
												   new SimpleVector(scale.x, scale.y),
												   new SimpleVector(lineEndPosX, lineEndPosY));

	let absoluteStartPos = new SimpleVector(absoluteStartCasePos.x + scale.x/2,
		       								absoluteStartCasePos.y + scale.y/2);

	let absoluteEndPos = new SimpleVector(absoluteEndCasePos.x + scale.x/2,
		       			      			  absoluteEndCasePos.y + scale.y/2);

	//line(absoluteStartPos.x, absoluteStartPos.y, absoluteEndPos.x, absoluteEndPos.y, ctx);
	line(absoluteStartCasePos.x + scale.x/2, absoluteStartCasePos.y + scale.y/2, absoluteEndCasePos.x + scale.x/2, absoluteEndCasePos.y + scale.y/2, ctx);
}

function rows(xLeft, yTop, width, height, numberOfRows, ctx=targetContext) {
	let scaleY = height/numberOfRows

	for(let i = 0; i < numberOfRows; i++) {
		let currentCasePos = getCasePositionOnGrid(new SimpleVector(xLeft, yTop),
											   new SimpleVector(1, scaleY),
											   new SimpleVector(0, i));
		line(currentCasePos.x, currentCasePos.y, currentCasePos.x + width, currentCasePos.y, ctx);
	}
}

function columns(xLeft, yTop, width, height, numberOfCols, ctx=targetContext) {
	let scaleX = width/numberOfCols;

	for(let i = 0; i <= numberOfCols; i++) {
		let currentCasePos = getCasePositionOnGrid(new SimpleVector(xLeft, yTop),
											   new SimpleVector(scaleX, 1),
											   new SimpleVector(i, 0));
		line(currentCasePos.x, currentCasePos.y, currentCasePos.x, currentCasePos.y + height, ctx);
	}
}

function getCasePositionOnGrid(gridPos, scale, relativeCasePos) {
	return new SimpleVector(gridPos.x + scale.x*relativeCasePos.x,
							gridPos.y + scale.y*relativeCasePos.y);
}

function line(x1, y1, x2, y2, ctx=targetContext) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.closePath();
	drawShape(ctx);
}

