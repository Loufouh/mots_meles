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
