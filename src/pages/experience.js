import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import {LandingPageWrapper, LandingPageContainer } from '../components/LandingPage'
import resume from '../content/luke-secomb-public-resume.pdf'
import { primaryGold, primaryFont, primaryDarkGrey, otherGrey, primaryWhite, secondaryGrey, otherGreyLight } from '../theme/variables';

const Experience = () => (
  <ExperienceWrapper>
    <LandingPageWrapper>
      <LandingPageContainer>
        <h1>Experience</h1>
        <h3>Download the pdf <HereLink href={resume} download>here</HereLink></h3>
      </LandingPageContainer>
    </LandingPageWrapper>
    <ExperienceContentWrapper>
      
      <ExperienceItemContainer>
        <h2>Education</h2>
        <div>
          <ExperienceItemContent>
            <h5>2016 - present</h5>
            <h3>Bachelor of Web Design & Production</h3>
            <h4>University of Canberra</h4>
          </ExperienceItemContent>
          <ExperienceItemContent>
            <h5>2017</h5>
            <h3>Cross-Cultural Design & Healthy Aging</h3>
            <h4>South China Agricultural University</h4>
          </ExperienceItemContent>
          <ExperienceItemContent>
            <h5>2014 - 2015</h5>
            <h3>Cert II in Information, Digital Media & Technology</h3>
            <h4>Trinity Christian School</h4>
          </ExperienceItemContent>
        </div>

        <h2>Experience</h2>
        <div>
          <ExperienceItemContent>
            <h5>2017 - present</h5>
            <h3>Freelance Web Designer / Developer</h3>
            <h4>Luke Secomb Digital</h4>
          </ExperienceItemContent>
          <ExperienceItemContent>
            <h5>2018 - present</h5>
            <h3> Intern / Freelancer</h3>
            <h4>2B Design & Advertising</h4>
          </ExperienceItemContent>
          <ExperienceItemContent>
            <h5>2015 - Present</h5>
            <h3>Nightfill Captain / Nightfill Team</h3>
            <h4>Coles Wanniassa</h4>
          </ExperienceItemContent>
        </div>

        <h2>Professional Skills</h2>
        <div>
          <ExperienceItemContent>
            <h5>Working hard since '98</h5>
            <h3>Creativity</h3>
            <h3>Critial Thinking</h3>
            <h3>Initiative</h3>
            <h3>Flexibility</h3>
          </ExperienceItemContent>
        </div>

        <h2>Technical Skills</h2>
        <div>
          <ExperienceItemContent>
            <h5>Creating schmick digital content using</h5>
            <h3>Adobe XD</h3>
            <h3>Illustrator</h3>
            <h3>Photoshop / Lightroom</h3>
            <h3>inDesign</h3>
          </ExperienceItemContent>
          <ExperienceItemContent>
            <h5>Developing beautiful and functional websites using</h5>
            <h3>HTML5 + CSS (SASS) XD</h3>
            <h3>Javascript</h3>
            <h3>React + GatsbyJS</h3>
            <h3>NodeJS + Gulp</h3>
          </ExperienceItemContent>
        </div>
      </ExperienceItemContainer>
    </ExperienceContentWrapper>
  </ExperienceWrapper>
  
)

export default Experience

const ExperienceWrapper = styled.div``

const ExperienceContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  color: ${primaryWhite};
`
const ExperienceItemContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  @media (min-width: 1079px) {
      grid-template-columns: 50% 50%;
      grid-auto-rows: 1fr;
  }
  h2 {
    align-self: center;
    justify-self: flex-start;
    font-size: 64px;
  }
  > div {
    padding: 24px 0;
    display: grid;
    align-content: center;
    /* border-bottom: 4px ${primaryGold} solid; */
  }
`

const ExperienceItemContent = styled.div`
  padding: 16px 0;
  align-content: center;
  h5 {
    margin: 4px 0;
    color: ${otherGreyLight};
  }
  h3 {
    margin: 4px 0 16px 0;
    font-size: 32px;
    color: ${primaryGold};
  }
  h4 {
    margin: 8px 0;
  }
`

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
