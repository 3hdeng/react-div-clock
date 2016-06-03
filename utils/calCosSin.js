'use strict';

//var invariant = require('invariant');

function calCosSin(deg){
    const rad=deg*Math.PI/180.0;
    return {cos: Math.cos(rad), sin:Math.sin(rad)};
}

module.exports = calCosSin;