import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const mainTheme = {
  fontPrimary: ``,
  fontSecondary: ``,
  fontTertiary: ``,
  // Primary Colours
  dgr: '#212024',
  ofw: '#F9F9F9',
  yel: '#D9B262',
  // Secondary Colours
  gr: `#47464D`,
  offw: `#F1F1F1`,
  yelr: `#F2C76D`,
  // Typographical Colours / Other Greys
  // dgr
  // gr
  grl: '#78787F',
  grll: '#9D9DA5',
  grlll: '#B8B8BF'
}
const greenTheme = {
  fontPrimary: ``,
  fontSecondary: ``,
  fontTertiary: ``,
  // Primary Colours
  dgr: '#006837',
  ofw: '#F9F9F9',
  yel: '#D9B262',
  // Secondary Colours
  gr: `#47464D`,
  offw: `#F1F1F1`,
  yelr: `#F2C76D`,
  offfw: `#FCFCFC`,
  // Typographical Colours / Other Greys
  // dgr
  // gr
  grl: '#78787F',
  grll: '#9D9DA5',
  grlll: '#B8B8BF'
}

const TheBody = styled.body`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.offw};
`;

const BodyContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  margin: 0;
`;

const TemplateWrapper = ({ children }) => (
  <TheBody theme={mainTheme}>
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
          {"src": "https://use.fontawesome.com/releases/v5.0.6/js/all.js", "type": "text/javascript"},
          {"src": "https://fonts.googleapis.com/css?family=GFS+Didot|Montserrat:300,400", "type": "text/stylesheet"}
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
