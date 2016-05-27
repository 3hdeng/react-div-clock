import React from 'react';
import ReactDOM from 'react-dom';
import ClockHand from './ClockHand';
import HmsHand from './HmsHand';
import HourHand from './HourHand';

const cw=300, ch=300;
const divstyle={width:`${cw}px`, height:`${ch}px`};
const cstyle={cw:`${cw}`, ch:`${ch}`}; //, left: 100, bottom:200}
console.log(cstyle);

let hourStyle=Object.assign({backgroundColor:'red'}, cstyle);
let minStyle= Object.assign({backgroundColor:'cyan'}, cstyle);
let secStyle= Object.assign({backgroundColor:'yellow'}, cstyle);
//height=`${hourHand}*2+50`
ReactDOM.render(<div style={divstyle}>
<HmsHand width={16} height={80} hmsKind='hour' hmsValue={3} style={hourStyle} />
<HmsHand width={10} height={110} hmsKind='min' hmsValue={35} style={minStyle} />
<HmsHand width={4} height={140} hmsKind='sec' hmsValue={12} style={secStyle} />
</div>,  
document.getElementById('mypart'));
