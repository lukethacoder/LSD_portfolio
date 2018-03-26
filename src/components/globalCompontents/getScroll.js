import React, { Component } from 'react'

class ScrollPlease extends Component {
    constructor() {
      super();
      this.state = {
        blurValue : "blur(1px)"
      }
    }
    componentDidMount() {
      setInterval( () => {
        let scrollVal = 100;
        console.log(scrollVal);
        let blurFinalValue = "blur(" + (scrollVal / 100) + ")";
        console.log(blurFinalValue);
        this.setState({
            blurValue : blurFinalValue
        })
      },3000)
    }
  
    render() {
        return(
            <p>{this.state.blurFinalValue}</p>
        );
      }
}

export default ScrollPlease