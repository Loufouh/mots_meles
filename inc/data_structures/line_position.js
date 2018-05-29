"use strict";

class LinePosition {
	constructor(startX, startY, endX, endY) {
		this.data = [];
		this.data.push(startX);
		this.data.push(startY);
		this.data.push(endX);
		this.data.push(endY);
	}
	
	static areEquals(linePos1, linePos2) {
		if(arraysAreEquals(linePos1.data, linePos2.data))
			return true;
		else
			return false;
	}

	set startX(value) {
		this.data[0] = value;
	}

	set startY(value) {
		this.data[1] = value;
	}

	set endX(value) {
		this.data[2] = value;
	}

	set endY(value) {
		this.data[3] = value;
	}

	get startX() {
		return this.data[0];
	}

	get startY() {
		return this.data[1];
	}

	get endX() {
		return this.data[2];
	}

	get endY() {
		return this.data[3];
	}
}
