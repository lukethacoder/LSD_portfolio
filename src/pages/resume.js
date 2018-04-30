import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {LandingPageWrapper, LandingPageContainer } from '../components/LandingPage'
import resume from '../content/luke-secomb-public-resume.pdf'
import { primaryGold, primaryFont, primaryDarkGrey, otherGrey, primaryWhite, secondaryGrey } from '../theme/variables';

const HereLink = styled.a`
  color: ${otherGrey};
  font-family: ${primaryFont};
  text-decoration: none;
  transition: .25s;
  &:hover {
    color: ${secondaryGrey};
    transition: .25s;
  }
`

const Resume = () => (
  <LandingPageWrapper>
    <LandingPageContainer>
      <h1>Resume</h1>
      <h3>Download the pdf <HereLink href={resume} download>here</HereLink></h3>
    </LandingPageContainer>
  </LandingPageWrapper>
)

export default Resume
