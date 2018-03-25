import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

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
import './index.css'

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background: url(${bg_img});
  background-position: 0 -250px;
  background-size: 100%;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
`

const TheBody = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
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

const TemplateWrapper = ({ children }) => (
  <TheBody>
    <BackgroundImage />
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
