import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

require("typeface-montserrat");
require("typeface-abril-fatface");

import bg_img from '../images/bg_img.jpg'

import { primaryDarkGrey, primaryGold, primaryWhite, primaryFont, secondaryFont, tertiaryFont, backgroundDarkGrey } from '../theme/variables';

import Header from '../components/Header'
import Footer from '../components/Footer'
import Bluryness from '../components/globalCompontents/getScroll'


const TheBody = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: ${primaryDarkGrey};
`;

const BodyContainer = styled.div`
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  background-color: ${backgroundDarkGrey};
  overflow: hidden;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

// class GetScrollPosition extends React.Component {
//   render() {
//       let scrollPosition = window.pageYOffset;
//       let blurValue = "blur(5px)";

//       if (scrollPosition > 200) {
//         blurValue = 'blur(100)';
//       }
//       else {
//         blurValue = 'blur(5px)';
//       }
      
//       return <div style={{ filter: blurValue }}></div>
//   }
// }
// const ScrollYo = styled(GetScrollPosition)``;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url(${bg_img});
  background-position: 0;
  background-size: 100vw;
  opacity: .7;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`

class ScrollPrettyPlease extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: 'blur(0px)',
      opacity: '',
      backgroundSize: '100%'
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
    let bgSize = ''
    if (e < 100) {
      bgSize = "10" + `${( e / 10 )}` + "%"
    }
    else {
      bgSize = "1" + `${( e / 10 )}` + "%"
    }

    this.setState({
      filter: "blur(" + `${e / 50}` + "px)",
      opacity: `${1 / (e / 300)}`,
      backgroundSize: `${(bgSize)}`
    })

  }

  render() {
    return (
       <BackgroundImage style={{
         filter: this.state.filter,
         opacity: this.state.opacity,
         backgroundSize: this.state.backgroundSize,
         backgroundPosition: 'center'
       }} />
    );
  }
}

class ScrollyPlease extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(e) {
    // let scrollVal = window.pageYOffset;
    // console.log(scrollVal);
    // let blurFinalValue = "blur(" + (scrollVal / 100) + "px)";
    // console.log(blurFinalValue);
    // return blurFinalValue

    
    // filter: "blur(" + `${window.pageYOffset / 10}` + "px)",
    // opacity: `${window.pageYOffset / 1000}`
    console.log('scroll event');
    console.log(e);
  }
  
  render() {
    return (
      <BackgroundImage onscroll={this.handleScroll} style={{
        filter: "blur(" + `${this.handleScroll / 10}` + "px)",
        opacity: `${this.handleScroll / 1000}`
      }}/>
    );
  }
  
}

const TemplateWrapper = ({ children }) => (

  <TheBody>
    <ScrollPrettyPlease/>
    <BodyContainer>
      <Helmet
        title="Luke Secomb - Web Developer | Digital Designer"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
          { property: 'og:title', content: 'Luke Secomb - Web Developer | Digital Designer'},
          { property: 'og:description', content: ''},
          { property: 'og:url', content: 'https://lukesecomb.digital'},
          { property: 'og:image', content: ''}
        ]}
        script={[
          {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"}
        ]}
      />
      <Header />
      <ChildrenContainer>
        {children()}
      </ChildrenContainer>
      <Footer />
    </BodyContainer>
    
  </TheBody>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
