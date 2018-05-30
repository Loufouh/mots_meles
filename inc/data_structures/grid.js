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
		markLineOnGrid(linePos.startX, linePos.startY, 
			       linePos.endX, linePos.endY, 
			       this.pos.x, this.pos.y, 
			       this.scales.x, this.scales.y, ctx);
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


	getColumn(index) {
		if(index < 0 || index >= this.gridDimensions.x)
			return error("The index entered is out of the grid !", new Array(this.gridDimensions.y).fill(""));

		return new Array(this.gridDimensions.y).fill().map((x, i) => this.content[index + i*this.gridDimensions.x]);
	}	

	getRow(index) {
		if(index < 0 || index >= this.gridDimensions.y)
			return error("The index entered is out of the grid !", new Array(this.gridDimensions.x).fill(""));

		return new Array(this.gridDimensions.x).fill().map((x, i) => this.content[i + index*this.gridDimensions.x]);
	}

	// shape of the left diagonal : \
	getLeftDiagonal(x, y) {
		if(x < 0 || x >= this.gridDimensions.x || y < 0 || y >= this.gridDimensions.y)
			return error("The position entered is out of the grid !", new Array(1).fill(""));

		let origin = this.getLeftDiagonalOrigin(x, y);
		let originArrayPos = this.gridDimensions.y*origin.y + origin.x;
		let distance = new SimpleVector(this.gridDimensions.x - origin.x, this.gridDimensions.y - origin.y);
		let length = (distance.x < distance.y) ? distance.x : distance.y

		return new Array(length).fill().map((x, i) => this.content[originArrayPos + i*(this.gridDimensions.y + 1)]);
	}




	// shape of the right diagonal : /
	getRightDiagonal(x, y) {
		if(x < 0 || x >= this.gridDimensions.x || y < 0 || y >= this.gridDimensions.y)
			return error("The position entered is out of the grid !", new Array(1).fill(""));

		let origin = this.getRightDiagonalOrigin(x, y);
		let originArrayPos = this.gridDimensions.y*origin.y + origin.x;
		let distance = new SimpleVector(origin.x + 1, this.gridDimensions.y - origin.y); 
		let length = (distance.x < distance.y) ? distance.x : distance.y

		return new Array(length).fill()
					.map((x, i) => this.content[originArrayPos + i*(this.gridDimensions.y - 1)]);
	}

	// get the position in wich the diagonal goes through in the first column or in the first row
	getLeftDiagonalOrigin(x, y) {
		if(x < 0 || x >= this.gridDimensions.x || y < 0 || y >= this.gridDimensions.y)
			return error("The position entered is out of the grid !", new SimpleVector(0, 0));

		let valueToSubstract = (x < y) ? x : y;
		return new SimpleVector(x - valueToSubstract, y - valueToSubstract);
	}

	// get the position in wich the diagonal goes through in the last column or in the first row
	getRightDiagonalOrigin(x, y) {
		if(x < 0 || x >= this.gridDimensions.x || y < 0 || y >= this.gridDimensions.y)
			return error("The position entered is out of the grid !", new SimpleVector(0, 0));

		let distanceTop = y;
		let distanceRight = this.gridDimensions.x - (x + 1);

		if(distanceTop < distanceRight)
			return new SimpleVector(x + distanceTop, 0);
		else
			return new SimpleVector(this.gridDimensions.x - 1, y - distanceRight);
	}
	
}

