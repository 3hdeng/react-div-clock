import React from 'react';
import ReactDOM from 'react-dom';
import ClockHand from './ClockHand';
import hmsHand from './hmsHand';

const cw=300, ch=300;
const divstyle={width:`${cw}px`, height:`${ch}px`};
const cstyle={cw:`${cw}`, ch:`${ch}`}; //, left: 100, bottom:200}
let hourStyle=Object.assign({backgroundColor:'red'}, cstyle);
let minStyle= Object.assign({backgroundColor:'cyan'}, cstyle);
let secStyle= Object.assign({backgroundColor:'yellow'}, cstyle);
//height=`${hourHand}*2+50`
ReactDOM.render(<div style={divstyle}>
<hmsHand width={50} height={80} hmsKind='hour' hmsValue={3} style={hourStyle} />
<hmsHand width={20} height={120} hmsKind='min' hmsValue={42} style={minStyle} />
<hmsHand width={10} height={140} hmsKind='sec' hmsValue={12} style={secStyle} />
</div>,  
document.getElementById('mypart'));
