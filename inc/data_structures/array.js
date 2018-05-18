"use strict";

function toArray(object, length=1) {
		if(object instanceof Tensor)
			return object.toArray(length);
		else if(object instanceof Array)
			return object;
		else {
			console.warn("The object is undefined or not expected, an empty array is returned");
			return new Array();
		}
}

Array.prototype.fit = function (wantedLength, objectToFill) {
	if(this.length < wantedLength)
		return this.extend(wantedLength, objectToFill);
	else if(this.length > wantedLength) {
		this.splice(wantedLength);
		return this;
	} else
		return this;
}

Array.prototype.extend = function (wantedLength, objectToFill) {
	while(this.length < wantedLength)
		this.push(objectToFill);
	return this
}

Array.prototype.getElementsBeginingBy = function (str) {
	let elements = new Array(0);
	let addCurrentElement;

	for(let i = 0; i < this.length; i++) {
		if(this[i].length >= str.length) {
			addCurrentElement = true;
			for(let j = 0; j < str.length && addCurrentElement; j++) {
				if(this[i][j] != str[j])
					addCurrentElement = false;
				console.log(this[i][j] + " ; " + str[j] + " ; " + addCurrentElement);
			}
	
			if(addCurrentElement)
				elements.push(this[i]);
		}
	}
	return elements;
}

