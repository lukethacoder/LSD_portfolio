import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import DayOfWeek from '../components/DayOfWeek';
import RandomWord from '../components/globalCompontents/RandomWord';
import bg_img from '../images/bg_img.jpg';
import { primaryWhite, primaryDarkGrey, primaryGold, primaryFont, pageWidth } from '../theme/variables';

const IndexPage = () => (
    <IndexPageContainer>
      <LandingPage />
      <WorkContainer>
        <div>
          <p>
            Hello, I am <strong>Luke</strong>,<br/>Web Developer and<br/>Digital Designer
          </p>
          <p>
            Welcome to <strong>my<br/>website</strong>, it's great<br/>to have <strong>you</strong> here.
          </p>
          <p>
            This website uses <br/><strong>GatsbyJS*</strong>, and is <br/>hosted with <strong>Github </strong><br/>and <strong>Netlify</strong>.
            <br />
            <em>
              *React, Node.js, webpack, gulp, styled <br/>components, SASS, FontAwesome <br/>and some other magic.
            </em>
          </p>
          <p>
            Cool stuff, eh?<br/>If you are <strong>keen for<br/>a chat</strong>, hit me up at<br/><strong><a href="#">hello@lukesecomb.digital</a></strong>
          </p>
          <p>
            <strong>Stay creative and have<br/><RandomWord/> <DayOfWeek/></strong>
          </p>
        </div>
      </WorkContainer>
    </IndexPageContainer>
)

export default IndexPage


const IndexPageContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: rgba( 33, 32, 36, 0.5); */
`;

const WorkContainer = styled.div`
  background-color: transparent;
  padding: 5% 0;
  div {
    width: ${pageWidth};
    margin: 0 auto;
    p {
      width: 100%;
      font-size: 2.25em;
      line-height: 1.1;
      color: ${primaryWhite};
      font-family: ${primaryFont};
      font-weight: 400;
      margin-bottom: 1.5em;
      @media (min-width: 720px) {
        font-size: 2.75em;
      }
      @media (min-width: 1079px) {
        font-size: 3.25em;
      }
      @media (min-width:1439px) {
        font-size: 3.75em;
      }
      strong {
        color: ${primaryGold};
        font-style: normal;
      }
      a {
        color: ${primaryGold};
        text-decoration: none;
      }
      em {
        display: block;
        font-size: 0.5em;
        font-style: normal;
        margin: 0;
        line-height: 1.25;
      }
    }
  }
`
