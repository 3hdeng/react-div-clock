'use strict'

import React, {
  PropTypes as types
}
from 'react'

import ClockLabel from './ClockLabel';
//xxx import myutil from './myutil';
//xxx const myutil=require('./myutil.js');
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


  getLabels(cw, ch, labels, fontSize) {
    let rlabels = labels.map((label, i, labels) => {
      const r = Math.min(cw, ch) * 0.9/2;
      const x = r * myutil.CosSinTable[i].cos + cw / 2 - fontSize/2;
      const y = r * myutil.CosSinTable[i].sin + ch / 2 - fontSize/2;

      return (
        <ClockLabel key={ `clock-label-` + i }
           label={label}   x={x} y={y}  fontSize={fontSize}/>
      )
    });
    return rlabels;
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
      top:'0px'
    };
    let labels_render = th.getLabels(cw, ch, props.labels, pstyle.fontSize);

    //display: 'block',
    //position: 'absolute',
    // key='clock-label-test'

    return (
      <div  style={divstyle}>
      {labels_render}
      </div>
    )
  }
})


//=== <ClockLabel key={ `clock-label-test`} x={100} y={100} label='yy' fontSize={32} />
export default ClockFace