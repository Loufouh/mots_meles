"use strict";

class Grid {
	constructor(x, y, width, height, cols, rows, content) {
		this.pos = new SimpleVector(x, y);
		this.realDimensions = new SimpleVector(width, height)
		this.gridDimensions = new SimpleVector(cols, rows);
		this.scales = new SimpleVector(width/cols, height/rows);
		this.numberOfBoxes = cols*rows;

		this.setContent(content);
	}

	setContent(content) {
		this.content = toArray(content, this.numberOfBoxes);

		if(this.content.length != this.numberOfBoxes){
			console.warn("The content doesn't match with the grid, it will be automatically fitted !"); 
			this.content = fitArray(this.numberOfBoxes, this.content, "");
		}
	}

	draw(ctx=targetContext) {
		filledGrid(this.pos.getX(), this.pos.getY(), this.realDimensions.getX(), this.realDimensions.getY(), this.gridDimensions.getX(), this.gridDimensions.getY(), this.content, ctx);
	}

	markSolution(startPosX, startPosY, endPosX, endPosY, ctx=targetContext) {
		markSolution(startPosX, startPosY, endPosX, endPosY, this.pos.getX(), this.pos.getY(), this.realDimensions.getX(), this.realDimensions.getY(), this.gridDimensions.getX(), this.gridDimensions.getY(), ctx);
	}

	setGridDimensions(cols, rows) {
		this.gridDimensions = new SimpleVector(cols, rows);
		this.numberOfBoxes = cols*rows;
	}
}

