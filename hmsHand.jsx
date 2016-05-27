import React, {
  PropTypes as types
}
from 'react'
import ClockHand from './ClockHand'


class hmsHand extends React.Component {
  

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
    
    hmsHand.defaultProps=
     {
      hmsKind: 'hour',
      hmsValue: 0,
      width: 4,
      height: 120,
      style: {}
    };
    
    hmsHand.PropTypes= {
    hmsKind:types.string.isRequired,
    hmsValue: types.number,
    width: types.number,
    height: types.number,
    style: types.object
  };
  
  
  }
  render() {
    const props = this.props;
    let w = props.width,
      h = props.height,
      hmsValue=props.hmsValue,
      a = 0;
      
    switch(props.hmsKind){
      case 'hour':
        a=(hmsValue%12)*360/12;
        break;
      case 'min':
      case 'sec':
           a=(hmsValue%60)*360/60;
          break;
    }  
    
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


export default hmsHand
