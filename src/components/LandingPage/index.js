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
  pageWidth,
  otherGreyLight,
  otherGrey
} from '../../theme/variables';


const LandingPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    margin-bottom: 1.45rem;
`;

const LandingPageContainer = styled.div`
  margin: 0 auto;
  width: ${pageWidth};
  height: 100vh;
  display: grid;
  align-content: center;
  padding-bottom: 20%;
  h1 {
    font-family: ${tertiaryFont};
    color: ${primaryWhite};
    font-size: 6em;
  }
  h3 {
    font-family: ${primaryFont};
    color: ${otherGrey};
    font-weight: 400;
    font-size: 28px;
  }
  h4 {
    font-family: ${primaryFont};
    font-size: 32px;
    line-height: 18px;
    color: ${primaryGold};
    border-left: 3px solid ${primaryGold};
    padding: 15px 20px;
    margin: 0 0 1% 0;
    text-transform: uppercase;
    span {
      text-decoration: underline;
    }
  }
  p {
    font-family: ${primaryFont};
    color: ${otherGreyLight};
    padding: 0;
    margin: 0;
  }
`;

const SocialMediaIconsWrapper = styled.div`
  ul {
    list-style-type: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: start;
    li {
      margin-right: 10px;
      a {
        color: ${primaryGold};
      }
    }
  }
`

const LandingPage = () => (
  <LandingPageWrapper>
    <LandingPageContainer>
      <h1 style={{ margin: 0 }}>
        Luke Secomb
      </h1>
      <h3>Web Developer | Digital Designer</h3>
      <h4>Work Smarter<br/><br/><span>Not</span> Harder</h4>
      <p>Dont be afraid to say hi</p>
      <SocialMediaIconsWrapper>
        <SocialMediaIcons/>
      </SocialMediaIconsWrapper>
    </LandingPageContainer>
  </LandingPageWrapper>
)

export default LandingPage
