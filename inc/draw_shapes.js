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

function gridContent(xLeft, yTop, width, height, numberOfRows, numberOfCols, content, ctx) {
    let xScale = width/numberOfCols;
	let yScale = height/numberOfRows;
        
    if(content.length != numberOfRows*numberOfCols) {
		console.error("The content has to much or not enough elements");
		return;
	} 
        
	for(let i = 0; i < numberOfCols; i++) {
		for(let j = 0; j < numberOfRows; j++) {
			let str = content[i + j*numberOfCols];
			let rectX = xLeft + i*xScale;
			let rectY = yTop + j*yScale;
			let strWidth, strHeight;

			if(xScale/str.length < yScale) {
				strWidth = (xScale*5/12)/str.length;
				strHeight = getHeightOfChar(strWidth, FONTSIZE_MODE.WIDTH);
            } else {
				strHeight = yScale*12/24;
               	strWidth = getWidthOfChar(strHeight, FONTSIZE_MODE.HEIGHT);
			}
			textAlign("center", ctx);
			font(strWidth, "monospace", FONTSIZE_MODE.WIDTH, ctx);
			text(rectX + xScale/2, rectY + (yScale + strHeight)/2, str, ctx);
       	}
	}
}

function markSolution(startPosX, startPosY, endPosX, endPosY, gridX, gridY, gridWidth, gridHeight, rows, cols) {
	let xScale = gridWidth/cols;
	let yScale = gridHeight/rows;
	line(gridX + xScale*startPosX + xScale/2, gridY + yScale*startPosY + yScale/2, gridX + xScale*endPosX + xScale/2, gridY + yScale*endPosY + yScale/2);
}

function rows(xLeft, yTop, width, height, numberOfRows, ctx=targetContext) {
	let scale = height/numberOfRows;

	for(let i = yTop; i <= height + yTop; i += scale)
		line(xLeft, i, xLeft + width, i, ctx);
}

function columns(xLeft, yTop, width, height, numberOfCols, ctx=targetContext) {
	let scale = width/numberOfCols;

	for(let i = xLeft; i <= width + xLeft; i += scale)
		line(i, yTop, i, yTop + height, ctx);
}

function line(x1, y1, x2, y2, ctx=targetContext) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.closePath();
	drawShape(ctx);
}
