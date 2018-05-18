"use strict";

let TENSOR_TYPES = {
	SCALAR: 0,
	VECTOR: 1,
	MATRIX: 2
}

class Tensor {
	constructor(data, type) {
		this.data = data;
		this.type = type;	
	}

	display() {
		console.table(this.data);
	}

	toArray(scalarArrayLength=1) {
		if(this.type == TENSOR_TYPES.SCALAR)
			return Tensor.arrayFromScalar(this, scalarArrayLength);
		else if(this.type == TENSOR_TYPES.VECTOR)
			return Tensor.arrayFromVector(this);
		else if(this.type == TENSOR_TYPES.MATRIX)
			return Tensor.arrayFromMatrix(this);
		else
			return [];
	}

	static arrayFromScalar(value, length=1) {
		return new Array(length).fill(value.data);
	}

	static arrayFromVector(vector) {
		return vector.data;
	}

	static arrayFromMatrix(matrix) {
		let arr = new Array();
		
		for(let i = 0; i < matrix.data.length; i++) {
			for(let j = 0; j < matrix.data[i].length; j++)
				arr.push(matrix.data[i][j]);		
		}
		return arr;
	}
}

