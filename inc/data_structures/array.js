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

function arraysAreEquals(arr1, arr2) {
	if(arr1 === arr2)
		return true;
	else if(arr1 == undefined || arr2 == undefined)
		return false;
	else if(arr1.length != arr2.length)
		return false;

	for(let i = 0; i < arr1.length; i++) {
		if(arr1[i] != arr2[i])
			return false;
	}
	return true;
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

Array.prototype.contains = function (object, conditionFunc=undefined, useExternalFunc=false) {
	if(useExternalFunc == false) {
		if(this.indexOf(object) >= 0)
			return true;
		else
			return false;
	}

	for(let i = 0; i < this.length; i++) {
		if(conditionFunc(this[i], object))
			return true;
	}
	return false;
}
Array.prototype.indexOfSequenceInReverse = function (str) {
	return this.slice().reverse().indexOfSequence(str);
}	

Array.prototype.indexOfSequence = function (str) {
	return this.join("").indexOf(str);
}
