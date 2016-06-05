import React, {
  PropTypes as types
}
from 'react'
import HmsHand from './HmsHand'
import myutil from './myutil';

class TickHand extends React.Component {

  constructor(props) {
    super(props);

    TickHand.defaultProps = {
      tickValue: 0,
      width: 4,
      height: 15,
      istyle: {
        cw: 300,
        ch: 300,
        left: 150,
        bottom: 150,
        backgroundColor: 'red'
      }
    };

    TickHand.propTypes = {
      tickValue: types.number,
      width: types.number,
      height: types.number,
      istyle: types.object
    };
  }

  getStyles() {
    const props = this.props;
    let w = props.width,
      h = props.height,
      tickValue = props.tickValue;
     

    if(tickValue%15 == 0){
           w=2*w;
           h=2*h;
    }else if(tickValue%5 == 0){
      w=1.5*w;
      h=1.5*h;
    }
    
    //console.log("tickWH=" + w + "," + h);
    
    
    
    let pstyle = {};
    if (props.istyle) {
      pstyle = props.istyle;
    }

  
    if (!pstyle.left) pstyle.left = (pstyle.cw - w) / 2;
    if (!pstyle.bottom) pstyle.bottom = pstyle.ch / 2;

    pstyle.w = w;
    pstyle.h = h;
    const cs=myutil.CosSinTable60[tickValue];
    const r = Math.min(pstyle.cw, pstyle.ch) /2 -h-3;
    const x = r * cs.cos;
    const y = r * cs.sin;
    pstyle.transform=`translate(${x}px, ${y}px)`;
    return pstyle;
  }
  
  render() {
    let pstyle = this.getStyles();
    const props = this.props;
    //console.log("tickValue in TickHand.jsx: " + props.tickValue);
    return(<HmsHand width={pstyle.w} height={pstyle.h} hmsKind='tick' hmsValue={props.tickValue} istyle={pstyle} />);
  }


}


export default TickHand
