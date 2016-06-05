'use strict'

import React, {
  PropTypes as types
}
from 'react'
  //import classnames from 'classnames'


const ClockHand = React.createClass({
  propTypes: {
    angle: types.number,
    width: types.number,
    height: types.number,
    istyle: types.object
  },
  getDefaultProps() {
    return {
      angle: 0,
      width: 4,
      height: 100,
      istyle: {}
    }
  },
  render() {
    const props = this.props;

    let pstyle = {};
    if (props.istyle) pstyle = props.istyle;

    let angle = props.angle,
      height = props.height,
      width = props.width;

    let ostyle = {
      transformOrigin: 'bottom',
      position: 'absolute',
      display:'block',
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: '10px',
      border: '1px',
      borderColor: 'white',
      transform: `rotate(${angle}deg)`
    };
   
    Object.assign(ostyle, pstyle );
    if(pstyle.transform) 
      ostyle.transform=  pstyle.transform + ' ' + `rotate(${angle}deg)`;
   
    
    return (<div style={ostyle } ></div>);
  }
})

export default ClockHand
