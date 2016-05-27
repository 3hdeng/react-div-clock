import React, {
  PropTypes as types
}
from 'react'
import ClockHand from './ClockHand'


class HourHand extends React.Component {
  

  /*getDefaultProps() {
    return {
      angle: 0,
      width: 4,
      height: 120,
      style: {}
    }
  }*/

  constructor(props) {
    super(props);
    
    HourHand.defaultProps=
     {
      angle: 0,
      width: 4,
      height: 120,
      style: {}
    };
    
    HourHand.PropTypes= {
    angle: types.number,
    width: types.number,
    height: types.number,
    style: types.object
  };
  
  
  }
  render() {
    const props = this.props;
    let w = props.width,
      h = props.height,
      a = props.angle;
    
     /*let istyle = {
       cw: `calc(100%)`,
       ch: `calc(100%)`,
      left: `calc(50%)`,
      bottom: `calc(50%)`,
      backgroundColor: 'red'
    };*/
    let istyle = {
       cw: 300, //clockwidth
       ch: 300,
      left: 150,
      bottom: 150,
      backgroundColor: 'red'
    };
    
    
    let pstyle={};  
    if(props.style){
      pstyle=props.style;
      /*if(!pstyle.cw) pstyle.cw=istyle.cw;
       if(!pstyle.ch) pstyle.ch=istyle.ch;
       if(!pstyle.left) pstyle.left=istyle.left;
       if(!pstyle.bottom) pstyle.bottom=istyle.bottom;
       */
    }else{
      pstyle=istyle;
    }
    if(!pstyle.left) pstyle.left=(pstyle.cw -w)/2;
    if(!pstyle.bottom ) pstyle.bottom= pstyle.ch/2;
    
   
    //if(props.style)   Object.assign(pstyle, ostyle )
    return (<ClockHand width={w} height={h} angle={a} style={pstyle} />);
  }


}


export default HourHand
//==========
/*static propTypes = {
    hasSelected: PropTypes.bool,
    type: PropTypes.oneOf(['hour', 'minute']),
    value: PropTypes.number,
  };

  static defaultProps = {
    value: null,
    type: 'minute',
    hasSelected: false,
  };
  ReactDOM.render(<div height={300}>
<ClockHand width={10} height={hourHand} angle={45} style={{left:150, bottom:150, backgroundColor:'red'}} />
<ClockHand width={20} height={50} angle={90} style={{left:150, bottom:150, backgroundColor:'yellow'}}/>
</div>, 


*/