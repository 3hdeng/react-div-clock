import React, {
  PropTypes
}
from 'react';
import ReactDOM from 'react-dom';

import ClockFace from './ClockFace'
import HmsHand from './HmsHand'

class Clock extends React.Component {
  //=== ES6 class , 
  //=== instead of providing a separate getInitialState method, 
  //=== set up your own state property in the constructor.

  constructor(props) {

    //===
    Clock.propTypes = {
      cw: PropTypes.number.isRequired,
      ch: PropTypes.number.isRequired,
      istyle: PropTypes.object
    };
    //=== props
    Clock.defaultProps = {
      cw: 350,
      ch: 350,
      istyle: {
        hmsColor: {
          h: 'red',
          m: 'cyan',
          s: 'red'
        },
        fontSize: 20,
        backgroundColor: 'white',
        labelColor: 'orange',
        hSize: {
          w: 40,
          h: 90
        },
        mSize: {
          w: 20,
          h: 140
        },
        sSize: {
          w: 10,
          h: 160
        }
      }
    };
    // external props will override the defaultProps?
    super(props);

    if (!props.istyle) props.istyle = Clock.defaultProps.istyle;

    //if (!props.istyle.position) props.istyle.position = Clock.defaultProps.istyle.position;


    if (!props.istyle.hSize) props.istyle.hSize = {
      w: props.cw / 20,
      h: (props.ch / 2) * 0.65
    };
    if (!props.istyle.mSize) props.istyle.mSize = {
      w: props.cw / 30,
      h: (props.ch / 2) * 0.75
    };
    if (!props.istyle.sSize) props.istyle.sSize = {
      w: props.cw / 40,
      h: (props.ch / 2) * 0.85
    };

    if (!props.istyle.fontSize) props.istyle.fontSize = 20;
    if (!props.istyle.backgroundColor) props.istyle.backgroundColor = 'cyan';
    if (!props.istyle.labelColor) props.istyle.labelColor = 'orange';
    
    
    //=== initial state
    this.state = {
      cw: props.cw,
      ch: props.ch,
      hVal: 0,
      mVal: 0,
      sVal: 0
    };
  }

  getStyles() {
    const props = this.props;
    const state = this.state;

    let pstyle = {};
    if (props.istyle) {
      pstyle = props.istyle;
    }


    pstyle.cw = state.cw;
    pstyle.ch = state.ch;

    return pstyle;
  }

  render() {
    const pstyle = this.getStyles();
    const state = this.state;

    const divstyle = {
      width: `${pstyle.cw}px`,
      height: `${pstyle.ch}px`,
      display: 'block',
      position: 'absolute'
    };
    //backgroundColor: pstyle.backgroundColor,
    //position:'absolute', 
    //  borderRadius:`${pstyle.cw/2}px`


    const cstyle = {
      cw: pstyle.cw,
      ch: pstyle.ch
    }; //, left: 100, bottom:200}


    const hourStyle = Object.assign({
      backgroundColor: pstyle.hmsColor.h
    }, cstyle);
    const minStyle = Object.assign({
      backgroundColor: pstyle.hmsColor.m
    }, cstyle);
    const secStyle = Object.assign({
      backgroundColor: pstyle.hmsColor.s
    }, cstyle);



    const hw = pstyle.hSize.w,
      hh = pstyle.hSize.h;
    const mw = pstyle.mSize.w,
      mh = pstyle.mSize.h;
    const sw = pstyle.sSize.w,
      sh = pstyle.sSize.h;

    const facestyle = {
      backgroundColor: pstyle.backgroundColor,
      fontSize: pstyle.fontSize,
      labelColor: pstyle.labelColor
    };
    const labels = 'XII,I,II,III,IV,V,VI,VII,VIII,IX,X,XI'.split(',');

    return (<div style={divstyle}>
      <ClockFace cw={pstyle.cw} ch={pstyle.ch}  labels={labels} istyle={facestyle} />
<HmsHand width={hw} height={hh} hmsKind='hour' hmsValue={state.hVal} istyle={hourStyle} />
<HmsHand width={mw} height={mh} hmsKind='min' hmsValue={state.mVal} istyle={minStyle} />
<HmsHand width={sw} height={sh} hmsKind='sec' hmsValue={state.sVal} istyle={secStyle} />
</div>);
  }

  //=== animation loop
  componentWillMount() {
    const th = this
    th._looping = true
  }

  componentDidMount() {
    const th = this

    function _loop() {
      if (!th._looping) {
        return
      }
      let now = new Date()
      th.setState({
        hVal: now.getHours(),
        mVal: now.getMinutes(),
        sVal: now.getSeconds()
      })
      window.requestAnimationFrame(_loop)
    }

    window.addEventListener('resize', th.resizeClock)
    _loop()
    th.resizeClock()
  }

  componentWillUnmount() {
    const th = this
    window.removeEventListener('resize', th.resizeClock)
    th._looping = false
  }


  // resize clock when div size changed

  resizeClock() {
      //const th = this;
      //let elm = ReactDOM.findDOMNode(th);
      //let size = Math.min(window.width, window.height);
      //console.log("resizeClock: " + size)
      /*th.setState({
        cw: size,
        ch: size
      })*/
    }
    //===

}


export default Clock
