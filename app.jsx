import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

//const cw=300, ch=300;
//const divstyle={width:`${cw}px`, height:`${ch}px`};
const cstyle={backgroundColor: 'gray', hmsColor:{h:'blue', m:'green', s:'cyan'}}; 

console.log(cstyle);


ReactDOM.render(<Clock cw={400} ch={400} style={cstyle} />,  
document.getElementById('mypart'));
