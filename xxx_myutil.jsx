import React from 'react'


const myutil = React.createClass({
}
);

myutil.calcCosSin = function(deg){
    const rad=deg*Math.PI/180.0;
    return {cos: Math.cos(rad), sin:Math.sin(rad)};
}
export default myutil