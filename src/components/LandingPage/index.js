import React from 'react'
import styled from 'styled-components'

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
const LandingPage = () => (
  <LandingPageWrapper>
    <LandingPageContainer>
      <h1>Luke<br/>Secomb</h1>
      <h3>Web Developer | Digital Designer</h3>
    </LandingPageContainer>
  </LandingPageWrapper>
)

export default LandingPage


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
  br {
    display: block;
    @media (min-width: 890px) {
      display: none;
    }
  }
  span {
    @media (min-width: 890px) {
      display: none;
    }
  }
  h1 {
    font-family: ${primaryFont};
    color: ${primaryWhite};
    font-weight: 700;
    font-size: 5em;
    line-height: .85;
    @media (min-width: 720px) {
      font-size: 7em;
    }
    @media (min-width: 1079px) {
      font-size: 8em;
    }
    @media (min-width:1439px) {
      font-size: 10em;
    }
  }
  h3 {
    font-family: ${primaryFont};
    color: ${primaryGold};
    font-weight: 400;
    font-size: 1.25em;
    @media (min-width: 720px) {
      font-size: 1.75em;
    }
    @media (min-width: 1079px) {
      font-size: 2.25em;
    }
    @media (min-width:1439px) {
      font-size: 2.75em;
    }
  }
`;