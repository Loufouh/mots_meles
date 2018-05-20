"use strict";

class Grid {
	constructor(x, y, width, height, cols, rows, content) {
		this.pos = new SimpleVector(x, y);

		this.realDimensions = new SimpleVector(width, height);
		this.scales = new SimpleVector(width/cols, height/rows);

		this.gridDimensions = new SimpleVector(cols, rows);
		this.numberOfBoxes = cols*rows;
		
		this.setContent(content);
	}

	draw(ctx=targetContext) {
		filledGrid(this.pos.x, this.pos.y, this.realDimensions.x, this.realDimensions.y, this.gridDimensions.x, this.gridDimensions.y, this.content, ctx);
	}

	markLine(linePos, ctx=targetContext) {
		markLineOnGrid(linePos.startPosX, linePos.startPosY, linePos.endPosX, linePos.endPosY, 
				this.pos.x, this.pos.y, this.realDimensions.x, this.realDimensions.y, 
				this.gridDimensions.x, this.gridDimensions.y, ctx);
	}

	setContent(content) {
		this.content = toArray(content, this.numberOfBoxes);

		if(this.content.length != this.numberOfBoxes){
			console.warn("The content doesn't match with the grid, it will be automatically fitted !"); 
			this.content.fit(this.numberOfBoxes, "");
		}
	}

	setGridDimensions(cols, rows) {
		this.gridDimensions = new SimpleVector(cols, rows);
		this.numberOfBoxes = cols*rows;
		this.content.fit(this.numberOfBoxes, "");
	}

	setRealDimensions(width, height) {
		this.realDimensions = new SimpleVector(width, height);
		this.scales = new SimpleVector(width/this.gridDimensions.x, height/this.gridDimensions.y);
	}
}

