/*
    ATTENTION : Toute cette partie du code est basée sur les
                dimensions de la police "monospace"
*/
"use strict";

const WIDTH_COEF = 18/8;
const HEIGHT_COEF =  75/48;

const FONTSIZE_MODE = {
    FONTSIZE: "fontsize",
    WIDTH: "width",
    HEIGHT: "height"
}

function font(size, fontname, sizeMode=FONTSIZE_MODE.FONTSIZE, ctx=targetContext) {
    if(sizeMode == FONTSIZE_MODE.WIDTH)
        size *= WIDTH_COEF;
    else if(sizeMode = FONTSIZE_MODE.HEIGHT)
        size *= HEIGHT_COEF;
	ctx.font = size + "px " + fontname;
}

function textAlign(alignment, ctx=targetContext) {
	ctx.textAlign = alignment;
}

function text(x, y, str, ctx=targetContext) {
	if(isStroking)
		ctx.strokeText(str, x, y);
	if(isFilling)
		ctx.fillText(str, x, y);
}

function getFontSize(size, sizeMode) {
    if(sizeMode == FONTSIZE_MODE.WIDTH)
        return size*WIDTH_COEF
    else if (sizeMode == FONTSIZE_MODE.HEIGHT)
        return size*HEIGHT_COEF;
    else {
        console.error("getFontSize : La nature de la valeur entrée est erronée, il est necessaire de connaitre soit la largeur, soit la hauteur d'un caractère pour calculer la taille de la police !");
        return 1;
    }
}

function getWidthOfChar(size, sizeMode=FONTSIZE_MODE.FONTSIZE) {
    if(sizeMode == FONTSIZE_MODE.FONTSIZE)
        return size/WIDTH_COEF;
    else if(sizeMode == FONTSIZE_MODE.HEIGHT)
        return size*HEIGHT_COEF/WIDTH_COEF;
    else {
        console.error("getWidthOfChar : La nature de la valeur entrée est erronée, il est necessaire de connaitre soit la taille de la police, soit la hauteur d'un caractère pour calculer sa largeur !");
        return 1;
    }
}

function getHeightOfChar(size, sizeMode=FONTSIZE_MODE.FONTSIZE) {
    if(sizeMode == FONTSIZE_MODE.FONTSIZE)
        return size/HEIGHT_COEF;
    else if(sizeMode == FONTSIZE_MODE.WIDTH)
        return size*WIDTH_COEF/HEIGHT_COEF; 
    else {
        console.error("getHeightOfChar : La nature de la valeur entrée est erronée, il est necessaire de connaitre soit la taille de la police, soit la largeur d'un caractère pour calculer sa hauteur !");
        return 1;
    }
}
