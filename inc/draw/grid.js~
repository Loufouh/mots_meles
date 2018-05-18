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
			this.content.fit(this.numberOfBoxes, "");
		}
	}

	draw(ctx=targetContext) {
		filledGrid(this.pos.x, this.pos.y, this.realDimensions.x, this.realDimensions.y, this.gridDimensions.x, this.gridDimensions.y, this.content, ctx);
	}

	markSolutions(solutions, ctx=targetContext) {
		for(let i = 0; i < solutions.length; i++)
			this.markSolution(solutions[i], ctx);
	}

	markSolution(solution, ctx=targetContext) {
		markSolution(solution.startPosX, solution.startPosY, solution.endPosX, solution.endPosY, 
				this.pos.x, this.pos.y, this.realDimensions.x, this.realDimensions.y, 
				this.gridDimensions.x, this.gridDimensions.y, ctx);
	}

	setGridDimensions(cols, rows) {
		this.gridDimensions = new SimpleVector(cols, rows);
		this.numberOfBoxes = cols*rows;
	}

	getSolutions(words) {
	}

	getArrFromRow(index) {
	}

	getArrFromCol(index) {
	}

	// shape : "\"
	getArrFromLeftDiagonal(x, y) {
	}

	// shape : "/"
	getArrFromRightDiagonal(index) {

	}
}

