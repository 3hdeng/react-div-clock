import React from 'react';
import ReactDOM from 'react-dom';
import ClockHand from './ClockHand';

var hourHand=150;
//height=`${hourHand}*2+50`
ReactDOM.render(<div height={300}>
<ClockHand width={10} height={hourHand} angle={45} style={{left:150, bottom:150, backgroundColor:'red'}} />
<ClockHand width={20} height={50} angle={90} style={{left:150, bottom:150, backgroundColor:'yellow'}}/>
</div>,  
document.getElementById('mypart'));
