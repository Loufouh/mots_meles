"use strict";

class SimpleVector extends Tensor{
	constructor(x, y) {
		super([x, y], TENSOR_TYPES.VECTOR);
	}

	get x() {
		return this.data[0];
	}

	get y() {
		return this.data[1];
	}

	set x(value) {
		this.data[0] = value;
	}

	set y(value) {
		this.data[1] = value;
	}
}
