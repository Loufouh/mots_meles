"use strict";

class SimpleVector extends Tensor{
	constructor(x, y) {
		super([x, y], TENSOR_TYPES.VECTOR);
	}

	getX() {
		return this.data[0];
	}

	getY() {
		return this.data[1];
	}
}
