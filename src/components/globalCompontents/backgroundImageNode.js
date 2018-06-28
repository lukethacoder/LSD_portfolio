import React, { Component } from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'

class BackgroundImageNode extends Component {
    constructor(props) {
      super(props)
      this.state = {
        filter: 'blur(0px)',
        opacity: ''
      }
      this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e) {
      e = window.pageYOffset;
      this.setState({
        filter: "blur(" + `${e / 50}` + "px)",
        opacity: `${1 / (e / 200)}`
      })
    }

    render() {
      return (
        <div>
          <BackgroundImage style={{
            filter: this.state.filter,
            opacity: this.state.opacity,
            backgroundImage: `url( ${this.props.image} )`
          }}/>
        </div>
      );
    }
  }

  // const BackgroundImageNodeContainer = ({ image }) => (
  //   <BackgroundImageNode image={image}>
  //     {console.log(image)}
  //     {this.setTheOldStateNewAgain(image)}
  //   </BackgroundImageNode>
  // )



export default BackgroundImageNode


const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-position: top left;
  background-size: cover;
  opacity: .7;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden; 
`