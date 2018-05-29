"use strict";

class Puzzle {
	constructor(grid, words) {
		this.grid = grid;
		this.words = words;
		this.solutions = new Array();
	}

	guessSolutions() {
		for(let i = 0; i < this.grid.height; i++) {
			this.verifyCase(0, i);
			this.verifyCase(this.grid.gridDimensions - 1, i);
		}

		for(let i = 0; i < this.grid.width; i++) {
			this.verifyCase(i, 0)
		}
	}

	verifyCase(x, y) {
		this.verifyHorizontal(y);
		this.verifyVertical(x);
		this.verifyLeftDiagonal(x, y);
		this.verifyRightDiagonal(x, y);
	}

	verifyHorizontal(y) {
		for(let i = 0; i < this.words.length; i++) {
			let index = this.grid.getHorizontal(y).indexOf(this.words[i]);
			
			if(index >= 0)
				this.solutions.push(new Solution(index, y, index + this.words[i].length - 1, y));
		}
	}

	verifyVertical(x) {
		for(let i = 0; i < this.words.length; i++) {
			let index = this.grid.getVertical(x).indexOf(this.words[i]);

			if(index >= 0)
				this.solutions.push(new Solution(x, index, x, index + this.words[i].length - 1));
		}
		
	}

	verifyLeftDiagonal(x, y) {
		for(let i = 0; i < this.words.length; i++) {
			let index = this.grid.getLeftDiagonal(x, y).indexOf(this.words[i]);
		}
	}


	verifyRightDiagonal(x, y) {
		
	}
}
