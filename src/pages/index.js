import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import DayOfWeek from '../components/DayOfWeek';
import RandomWord from '../components/globalCompontents/RandomWord';
import bg_img from '../images/bg_img.jpg';
import { primaryWhite, primaryDarkGrey, primaryGold, primaryFont, pageWidth } from '../theme/variables';


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
      font-size: 3.25em;
      line-height: 1.1;
      color: ${primaryWhite};
      font-family: ${primaryFont};
      font-weight: 400;
      margin-bottom: 1.5em;
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
          This website uses<br/><strong>GatsbyJS*</strong>, and is<br/>hosted with <strong>Github</strong><br/>and <strong>Netlify</strong>.
          <br />
          <em>
            *React, Node.js, webpack, gulp, styled<br/>components, SASS, fontawesome<br/>and some other magic.
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
