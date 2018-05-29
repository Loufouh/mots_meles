"use strict";

class Puzzle {
	constructor(grid, words) {
		this.grid = grid;
		this.words = words;
		this.solutions = new Array();
		this.guessSolutions();
	}

	markSolutions(ctx=targetContext) {
		for(let i = 0; i < this.solutions.length; i++) {
			this.grid.markLine(this.solutions[i]);
		}
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
			let horizontal = this.grid.getHorizontal(y);
			let index = horizontal.indexOfSequence(this.words[i]);
			let reverseIndex = horizontal.indexOfSequenceInReverse(this.words[i]);
			
			if(index >= 0)
				this.addSolution(index, 
						 y,
						 index + this.words[i].length - 1,
						 y);

			else if(reverseIndex >= 0)
				this.addSolution((horizontal.length - 1) - reverseIndex,
						 y,
						 (horizontal.length - 1) - ( reverseIndex - (this.words[i].length - 1) ), 
						 y);
		}
	}

	verifyVertical(x) {
		for(let i = 0; i < this.words.length; i++) {
			let vertical = this.grid.getVertical(x);
			let index = vertical.indexOfSequence(this.words[i]);
			let reverseIndex = horizontal.indexOfSequenceInReverse(this.words[i]);

			if(index >= 0)
				this.addSolution(x,
						 index,
						 x,
						 index + (this.words[i].length - 1));

			else if(reverseIndex >= 0)
				this.addSolution(x,
						 (vertical.length - 1) - reverseIndex, 
						 x,
						 (vertical.length - 1) - (this.words[i].length - 1));
		}
		
	}

	verifyLeftDiagonal(x, y) {
		for(let i = 0; i < this.words.length; i++) {
			let diagonal = this.grid.getLeftDiagonal(x, y);
			let diagonalOrigin = this.grid.getLeftDiagonalOrigin(x, y);
			let index = diagonal.indexOfSequence(this.words[i]);
			let reverseIndex = diagonl.indexOfSequenceInReverse(this.words[i]);

			if(index >= 0)
				this.addSolution(diagonalOrigin.x + index,
						 diagonalOrigin.y + index,
						 diagonalOrigin.x + ( index + (this.words[i].length - 1) ), 
						 diagonalOrigin.y + ( index + (this.words[i].length - 1) ));

			else if(reverseIndex >= 0)
				this.addSolution(diagonalOrigin.x + (diagonal.length - 1) - reverseIndex,
						 diagonalOrigin.y + (diagonal.length - 1) - reverseIndex,
						 diagonalOrigin.x + (diagonal.length - 1) - ( reverseIndex - (this.words[i].length - 1) ),
						 diagonalOrigin.y + (diagonal.length - 1) - ( reverseIndex - (this.words[i].length - 1) ));
		}
	}


	verifyRightDiagonal(x, y) {
		for(let i = 0; i < this.words.length; i++) {
			let diagonal = this.grid.getRightDiagonal(x, y);
			let diagonalOrigin = this.grid.getRightDiagonalOrigin(x, y);
			let index = diagonal.getIndexOfSequence(this.words[i]);
			let reverseIndex = diagonal.getIndexOfSequenceInReverse(this.words[i]);

		if(index >= 0)
			this.addSolution(diagonalOrigin.x - index,
					 diagonalOrigin.y + index,
					 diagonalOrigin.x - ( index + (this.words[i].length - 1) ),
					 diagonalOrigin.y + ( index + (this.words[i].length - 1) ));

		else if(reverseIndex >= 0)
			this.addSolution(diagonalOrigin.x - (diagonal.length - 1) + reverseIndex,
					 diagonalOrigin.y + (diagonal.length - 1) - reverseIndex,
					 diagonalOrigin.x - (diagonal.length - 1) + ( reverseIndex - (this.words[i].length - 1) ),
					 diagonalOrigin.y - (diagonal.length - 1) - ( reverseIndex - (this.words[i].length - 1)));
		}
	}

	addSolution(x1, y1, x2, y2) {
		let linePos = new LinePosition(x1, y1, x2, y2);

		if(!this.solutions,contains(linePos, LinePosition.areEquals, true))
			this.solutions.push(linePos);
	}
}
