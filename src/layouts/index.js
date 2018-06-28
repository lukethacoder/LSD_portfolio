import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import './index.css'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee, faSpinner } from '@fortawesome/fontawesome-free-solid'

require("typeface-montserrat");
require("typeface-abril-fatface");

import default_bg_img from '../images/camera-profile.jpg'
import { primaryDarkGrey, primaryGold, primaryWhite, primaryFont, secondaryFont, tertiaryFont, backgroundDarkGrey } from '../theme/variables';

import Header from '../components/Header'
import Footer from '../components/Footer'
import BackgroundImageNode from '../components/globalCompontents/backgroundImageNode'
import { DynamicBackgroundImage } from '../components/globalCompontents/theme-context'

class TemplateWrapper extends Component {
  constructor(props) {
      super(props);
      this.state = {
        image: default_bg_img
      }
  }

  render() {

    console.log(this.props);
    console.log(this.props.location.pathname);
    let useThisImage = null; 
    if (this.props.location.pathname === '/' | this.props.location.pathname === '/about') {
      useThisImage = this.state.image;
    }
    return (
      <TheBody>
      {/* <WorkInProgress>
        <a href="https://github.com/lukethacoder/LSD_portfolio" target="_blank">
          This website is a work in progress<br/>check out the <span>Github repo</span> <FontAwesomeIcon spin icon={faSpinner}/> 
        </a>
      </WorkInProgress> */}

      <BackgroundImageNode image={useThisImage}>
      </BackgroundImageNode>

      <BorderMeUp/>

      <BodyContainer>
        <Helmet
          title="Luke Secomb - Web Developer | Digital Designer"
          meta={[
            { name: 'description', content: '' },
            { name: 'keywords', content: '' },
            { property: 'og:title', content: 'Luke Secomb - Web Developer | Digital Designer'},
            { property: 'og:description', content: ''},
            { property: 'og:url', content: 'https://lukesecomb.digital'},
            { property: 'og:image', content: {default_bg_img}}
          ]}
          script={[
            {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"}
          ]}
        />
        <Header />
        <ChildrenContainer>
          {this.props.children(({...this.props}))}
        </ChildrenContainer>
        <Footer />
      </BodyContainer>
    </TheBody>
    );
  }
};


// const TemplateWrapper02 = ({ children }) => (
//   <TheBody>
//     <WorkInProgress>
//       <a href="https://github.com/lukethacoder/LSD_portfolio" target="_blank">
//         This website is a work in progress<br/>check out the <span>Github repo</span> <FontAwesomeIcon spin icon={faSpinner}/> 
//       </a>
//     </WorkInProgress>

//     <DynamicBackgroundImage.Provider 
//       value={{
//         // image: bg_img
//       }}
//     >
//       <DynamicBackgroundImage.Consumer>
//         {({image}) => (
//           <BackgroundImageNodeContainer image={image}>  
//             { console.log(image) }
//           </BackgroundImageNodeContainer>
//         )}
//       </DynamicBackgroundImage.Consumer>
//     </DynamicBackgroundImage.Provider>
       
//     <BodyContainer>
//       <Helmet
//         title="Luke Secomb - Web Developer | Digital Designer"
//         meta={[
//           { name: 'description', content: '' },
//           { name: 'keywords', content: '' },
//           { property: 'og:title', content: 'Luke Secomb - Web Developer | Digital Designer'},
//           { property: 'og:description', content: ''},
//           { property: 'og:url', content: 'https://lukesecomb.digital'},
//           { property: 'og:image', content: {bg_img}}
//         ]}
//         script={[
//           {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"}
//         ]}
//       />
//       <Header />
//       <ChildrenContainer>
//         {children()}
//       </ChildrenContainer>
//       <Footer />
//     </BodyContainer>
//   </TheBody>
// )

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


const TheBody = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 0 10px 0;
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
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const BorderMeUp = styled.div`
  width: 100vw;
  height: 10px;
  background-color: ${primaryGold};
  z-index: 1000;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`

// const WorkInProgress = styled.div`
//   position: fixed;
//   z-index: 100;
//   bottom: 10px;
//   right: 20px;
//   font-family: ${primaryFont};
//   a {
//     color: ${primaryGold};
//     text-decoration: none;  
//     span {
//       color: ${primaryWhite};
//     }  
//   }
// `
