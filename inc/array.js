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

function fitArray(wantedLength, arr, objectToFill) {
	if(arr.length < wantedLength)
		return extendArray(wantedLength, arr, objectToFill);
	else if(arr.length > wantedLength) {
		arr.splice(wantedLength);
		return arr;
	} else
		return arr;
}

function extendArray(wantedLength, arr, objectToFill) {
	while(arr.length < wantedLength)
		arr.push(objectToFill);
	return arr
}
