'use strict'

import React, {
  PropTypes as types
}
from 'react'

const ClockLabel = React.createClass({
  propTypes: {
    x: types.number,
    y: types.number,
    fontSize: types.number,
    label: types.string
  },
  getDefaultProps() {
    return {
      x: 0,
      y: 0,
      fontSize: 15,
      label: 'LL'
    }
  },
  render() {
    const th = this
    const props = th.props;

    let {
      x, y, label, fontSize
    } = props;


   let ostyle = {
      transformOrigin: 'bottom',
      position: 'absolute',
      transform: `translate(${x}px, ${y}px)`,
      fontSize: `${fontSize}px`,
      color: 'orange'
    };

    return (
      <span style={ostyle }>{label}</span>
    )
  }
})

export default ClockLabel
