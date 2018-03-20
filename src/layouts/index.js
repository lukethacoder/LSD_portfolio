import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import fontawesome from '@fortawesome/fontawesome'
import FontAWesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCoffee } from '@fortawesome/fontawesome-free-solid'

import { primaryDarkGrey, primaryGold, hola } from '../theme/variables';

import Header from '../components/Header'
import Footer from '../components/Footer'
import './index.css'

const TheBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${primaryDarkGrey};
`;

const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const ChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${props => props.theme.dgr};
`;
// theme={mainTheme}
const TemplateWrapper = ({ children }) => (
  <TheBody>
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
