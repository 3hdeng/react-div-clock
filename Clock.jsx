import React, {
  PropTypes as types
}
from 'react'
import ClockHand from './ClockHand'
import HmsHand from './HmsHand'

class HmsHand extends React.Component {
  //=== ES6 class , 
  //=== instead of providing a separate getInitialState method, 
  //=== set up your own state property in the constructor.

  constructor(props) {
    super(props);
    //=== props
    Clock.defaultProps = {
      cw: 350,
      ch: 350,
      style: {
        hmsColor: {
          h: 'red',
          m: 'cyan',
          s: 'red'
        },
        backgroundColor: 'white',
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

    Clock.propTypes = {
      cw: types.number,
      ch: types.number,
      style: types.object
    };
    //=== initial state
    this.state = {
      cw: props.cw,
      ch: prop.ch,
      hVal: 0,
      mVal: 0,
      sVal: 0
    };
  }

  getStyles() {
    const props = this.props;

    let pstyle = {};
    if (props.style) {
      pstyle = props.style;
    }

    pstyle.cw = props.cw;
    pstyle.ch = props.ch;

    return pstyle;
  }

  render() {
    const pstyle = this.getStyles();
    const pstate = this.state;

    const divstyle = {
      width: `${pstyle.cw}px`,
      height: `${pstyle.ch}px`
    };
    const cstyle = {
      cw: pstyle.cw,
      ch: `${pstyle.ch}`
    }; //, left: 100, bottom:200}
    //console.log(cstyle);

    const hourStyle = Object.assign({
      backgroundColor: pstyle.hmsColor.h
    }, cstyle);
    const minStyle = Object.assign({
      backgroundColor: `${pstyle.hmsColor.m}`
    }, cstyle);
    const secStyle = Object.assign({
      backgroundColor: `${pstyle.hmsColor.s}`
    }, cstyle);
    const hw = pstyle.hSize.w,
      hh = pstye.hSize.h;
    const mw = pstyle.mSize.w,
      mh = pstyle.mSize.h;
    const sw = pstyle.sSize.w,
      sh = pstyle.sSize.h;



    return (<div style={divstyle}>
<HmsHand width={hw} height={hh} hmsKind='hour' hmsValue={pstate.hVal} style={hourStyle} />
<HmsHand width={mw} height={mh} hmsKind='min' hmsValue={pstate.mVal} style={minStyle} />
<HmsHand width={sw} height={sh} hmsKind='sec' hmsValue={pstate.sVal} style={secStyle} />
</div>);
  }

  //=== animation loop
  componentWillMount() {
      const th = this
      th._looping = true
    },

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
    },

    componentWillUnmount() {
      const th = this
      window.removeEventListener('resize', th.resizeClock)
      th._looping = false
    },


    // resize clock when div size changed

    resizeClock() {
      const th = this
      let elm = ReactDOM.findDOMNode(th)
      let size = numcal.min(elm.offsetWidth, elm.offsetHeight)
      th.setState({
        cw: size,
        ch: size
      })
    }
    //===

}


export default Clock
