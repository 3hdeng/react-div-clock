'use strict'

import React, {
  PropTypes as types
}
from 'react'

import ClockLabel from './ClockLabel';
import TickHand from './TickHand';
import myutil from './myutil.js';



const ClockFace = React.createClass({
  statics: {
    m1: function() {
      return {}
    }
  },

  propTypes: {
    cw: types.number,
    ch: types.number,
    istyle: types.object,
    labels: types.array
  },
  getDefaultProps() {
    return {
      cw: 350,
      ch: 350,
      labels: '12,1,2,3,4,5,6,7,8,9,10,11'.split(','),
      istyle: {
        backgroundColor: 'white',
        labelColor:'red',
        fontSize: 20
      }
    }
  },
  
  getStyles() {
    const props = this.props;
    
    let pstyle = {};
    if (props.istyle) {
      pstyle = props.istyle;
    }

    pstyle.cw = props.cw;
    pstyle.ch = props.ch;

    return pstyle;
  },


  getLabels(cw, ch, labels, pstyle) {
    let fontSize= pstyle.fontSize;
    let rlabels = labels.map((label, i, labels) => {
      const r = Math.min(cw, ch) * 0.8/2;
      const x = r * myutil.CosSinTable[i].cos + cw / 2 - fontSize/2;
      const y = r * myutil.CosSinTable[i].sin + ch / 2 - fontSize/2;

      return (
        <ClockLabel key={ `clock-label-` + i }
           label={label} labelColor={pstyle.labelColor}  x={x} y={y}  fontSize={fontSize}/>
      )
    });
    return rlabels;
  },

 getTicks(fontSize, pstyle) {
    let arr= myutil.range(0,60);
    let rticks = arr.map((v, i) => {
      
      return (
        <TickHand key={`tick-` + i} width={fontSize/10} height={fontSize/3}   tickValue={i} istyle={pstyle}/>
      )
    });
    return rticks;
  },

  render() {
    const th = this;
    const props = th.props;

    const pstyle = th.getStyles();
    const cw = pstyle.cw;
    const ch = pstyle.ch;
   
    const divstyle = {
      width: `${cw}px`,
      height: `${ch}px`,
      backgroundColor: pstyle.backgroundColor,
      borderRadius: `${cw/2}px`,
      display:'block',
      position:'absolute',
      left: '0px',
      top:'0px', 
      border:`10px solid ${pstyle.labelColor}`,
      margin:'0px',
      padding:'0px'
    };
    let tstyle= Object.assign({}, pstyle);
    tstyle.backgroundColor= pstyle.labelColor;
    let labels_render = th.getLabels(cw, ch, props.labels, tstyle);
    let ticks_render=th.getTicks(tstyle.fontSize, tstyle);
    //display: 'block',
    //position: 'absolute',
   
    
    return (
      <div  style={divstyle}>
      {labels_render}
      {ticks_render}
      {props.children}
      </div>
    )
  }
})


//=== <ClockLabel key={ `clock-label-test`} x={100} y={100} label='yy' fontSize={32} />
export default ClockFace
