import React, {
  PropTypes as types
}
from 'react'
import ClockHand from './ClockHand'


class HmsHand extends React.Component {

  constructor(props) {
    super(props);

    HmsHand.defaultProps = {
      hmsKind: 'hour',
      hmsValue: 0,
      width: 4,
      height: 120,
      istyle: {
        cw: 300,
        ch: 300,
        left: 150,
        bottom: 150,
        backgroundColor: 'red'
      }
    };

    HmsHand.propTypes = {
      hmsKind: types.string.isRequired,
      hmsValue: types.number,
      width: types.number,
      height: types.number,
      istyle: types.object
    };
  }

  getStyles() {
    const props = this.props;
    let w = props.width,
      h = props.height,
      hmsValue = props.hmsValue,
      a = 0;

   
    switch (props.hmsKind) {
      case 'hour':
        a = (hmsValue.hour % 12) * 30 + (hmsValue.min%60)*0.5;	
        break;
      case 'min':
	 a = (hmsValue.min % 60) * 6 + (hmsValue.sec%60)*0.1;
	 break;
      case 'sec':
      case 'tick':  
        a = (hmsValue.sec % 60) * 6;
        
        break;
    }



    let pstyle = {};
    if (props.istyle) {
      pstyle = props.istyle;
    }

  
    if (!pstyle.left) pstyle.left = (pstyle.cw - w) / 2;
    if (!pstyle.bottom) pstyle.bottom = pstyle.ch / 2;

    pstyle.w = w;
    pstyle.h = h;
    pstyle.angle = a;
    //if(props.hmsKind == 'tick') 
    //   console.log("tckValue=" + props.hmsValue + "angle=" + a);
       
    return pstyle;
  }
  render() {
    let pstyle = this.getStyles();
    return (<ClockHand width={pstyle.w} height={pstyle.h} angle={pstyle.angle} istyle={pstyle} />);
  }


}


export default HmsHand
