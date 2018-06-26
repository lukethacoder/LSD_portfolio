import React, { Component } from 'react'
// import Link from 'gatsby-link'
import styled from 'styled-components'
import DynamicBackgroundImage from '../../layouts/index'

class BackgroundImageNode extends Component {
    constructor(props) {
      super(props)
      this.state = {
        filter: 'blur(0px)',
        opacity: '',
        backgroundImage: this.props.image
      }
      this.handleScroll = this.handleScroll.bind(this);
      console.log(this.props.image);
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
            backgroundImage: `url( ${this.state.backgroundImage} )`
          }}/>
        </div>
      );
    }
  }

  const BackgroundImageNodeContainer = ({ image }) => ( 
    <BackgroundImageNode image={image}/>
  )



export default BackgroundImageNodeContainer


const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-position: 0;
  background-size: cover;
  opacity: .7;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden; 
`