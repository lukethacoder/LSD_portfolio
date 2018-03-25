import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import fontawesome from '@fortawesome/fontawesome'
import FontAWesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faAlignRight } from '@fortawesome/fontawesome-free-solid'

import logo from '../../images/logo.jpg';

import SocialMediaIcons from '../globalCompontents/SocialMediaIcons'

import {
  primaryDarkGrey,
  primaryGold,
  primaryFont,
  secondaryFont,
  tertiaryFont,
  primaryWhite,
  otherGreyLighter,
  pageWidth
} from '../../theme/variables';


const LandingPageWrapper = styled.div`
    width: ${pageWidth};
    height: 100vh;
    margin: 0 auto 1.45rem auto;
`;

const LandingPageContainer = styled.div`
  margin: 0 auto;
  height: 100vh;
  display: grid;
  align-content: center;
  padding-bottom: 5%;
  h1 {
    font-family: ${primaryFont};
    color: ${primaryWhite};
    font-weight: 700;
    font-size: 10em;
    line-height: .85;
  }
  h3 {
    font-family: ${primaryFont};
    color: ${primaryGold};
    font-weight: 400;
    font-size: 2.5em;
  }
`;

const LandingPage = () => (
  <LandingPageWrapper>
    <LandingPageContainer>
      <h1>Luke<br/>Secomb</h1>
      <h3>Web Developer | Digital Designer</h3>
    </LandingPageContainer>
  </LandingPageWrapper>
)

export default LandingPage
