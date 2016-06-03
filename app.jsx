import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';

//const cw=300, ch=300;
//const divstyle={width:`${cw}px`, height:`${ch}px`};
const cstyle={backgroundColor: 'gray', fontSize:40, 
hmsColor:{h:'red', m:'orange', s:'yellow'}};
//hSize:{w:100, h:120}}; 

ReactDOM.render(<Clock cw={400} ch={400} istyle={cstyle}/>,  
document.getElementById('mypart'));
