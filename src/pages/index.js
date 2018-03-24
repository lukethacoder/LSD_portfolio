import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import bg_img from '../images/bg_img.jpg'
import { primaryWhite, primaryDarkGrey, primaryGold, primaryFont, pageWidth } from '../theme/variables';

const IndexPageContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  /* background-color: rgba( 33, 32, 36, 0.5); */
`;

const WorkContainer = styled.div`
  background-color: ${primaryDarkGrey};
  padding: 5% 0;
  div {
    width: ${pageWidth};
    margin: 0 auto;
    p {
      width: 75%;
      font-size: 2.8em;
      line-height: 1.1;
      color: ${primaryWhite};
      font-family: ${primaryFont};
      font-weight: 400;
      margin-bottom: 1em;
      strong {
        color: ${primaryGold};
        font-style: normal;
      }
      a {
        color: ${primaryGold};
        text-decoration: none;
      }
      em {
        font-size: 0.5em;
        font-style: normal;
        margin: .2em 0;
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
          Gday, I am <strong>Luke</strong>, Web Developer and Digital Designer
        </p>
        <p>
          Welcome to <strong>my website</strong>, it's great to have <strong>you</strong> here.
        </p>
        <p>
          This website uses <strong>GatsbyJS*</strong>, and is hosted with <strong>Github</strong> and <strong>Netlify</strong>.
          <br />
          <em>
            *React, Node.js, webpack, gulp, styled components, SASS, fontawesome and some other magic.
          </em>
        </p>
        <p>
          Cool stuff, eh? If you are <strong>keen for a chat</strong>, hit me up at <strong><a href="#">hello@lukesecomb.digital</a></strong>
        </p>
        <p>
          <strong>Stay creative and have an awesome Friday</strong>
        </p>
      </div>
    </WorkContainer>
    <Link to="/resume/">Go to page 2</Link>
  </IndexPageContainer>
)

export default IndexPage
