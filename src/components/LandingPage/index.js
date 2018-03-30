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

export const LandingPageWrapper = styled.div`
    width: ${pageWidth};
    height: 80vh;
    margin: 0 auto 1.45rem auto;
    position: relative;
`;

export const LandingPageContainer = styled.div`
  margin: 0 auto;
  height: auto;
  display: grid;
  align-content: center;
  padding-bottom: 5%;
  position: absolute;
  bottom: 0;
  left: 0;
  h1 {
    font-family: ${primaryFont};
    color: ${primaryWhite};
    font-weight: 700;
    font-size: 10vw;
    line-height: .85;
  }
  h3 {
    font-family: ${primaryFont};
    color: ${primaryGold};
    font-weight: 400;
    font-size: 3vw;
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
