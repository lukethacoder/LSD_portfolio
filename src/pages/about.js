import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {LandingPageWrapper, LandingPageContainer } from '../components/LandingPage'
import { primaryFont, primaryGold, pageWidth, primaryWhite } from '../theme/variables';

const AboutInfo = styled.div`
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
      ul {
          margin: 25px auto;
          list-style-type: square;
          li {
              font-size: .75em;
          }
      }
    }
  }
`

const About = () => (
    <div>
    {/* <LandingPageWrapper>
        <LandingPageContainer>
            <h1>About</h1>
            <h2></h2>
        </LandingPageContainer>
    </LandingPageWrapper> */}
    <AboutInfo>
        <div>
            <p>
                Hello, I am <strong>Luke</strong>,<br/>Web Developer and<br/>Digital Designer.
            </p>
            <p>
                I am currently studying<br/>a Bachelor of <strong>Web<br/>Design & Production</strong><br/>at the <strong>University<br/>of Canberra.</strong>
            </p>
            <p>
                On the side I do<br/><strong>freelance</strong> work, <br/>designing and<br/>developing <strong>beautiful</strong>,<br/><strong>responsive</strong>, <strong>efficient</strong><br/>and <strong>user-friendly</strong><br/>websites.
            </p>
            <p>
                I have had previous<br/>experience with:<br/>
                <ul>
                    <li><a href="http://gatsbyjs.org" target="_blank">GatsbyJS</a> + <a href="reactjs.org" target="_blank" rel="noopener noreferrer">React</a></li>
                    <li><a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                    <li><a href="http://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a> + <a href="https://www.styled-components.com/" target="_blank" rel="noopener noreferrer">Styled Components</a></li>
                    <li>Digital Photography</li>
                    <li><a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js</a></li>
                    <li>HTML5 + CSS</li>
                    <li><a href="https://restfulapi.net/" target="_blank" rel="noopener noreferrer">RESTful API's</a></li>
                    <li><a href="https://graphql.org/" target="_blank" rel="noopener noreferrer">GraphQL</a></li>
                    <li><a href="https://gulpjs.com/" target="_blank" rel="noopener noreferrer">Gulp.js</a> + <a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">Grunt</a></li>
                    <li><a href="https://www.adobe.com/au/" target="_blank" rel="noopener noreferrer">Adobe Creative Suite</a></li>
                    <li>Film Photography</li>
                    <li><a href="https://www.autodesk.com.au/products/maya/overview" target="_blank" rel="noopener noreferrer">Autodesk Maya</a></li>
                </ul>
            </p>
            <p>
                I aspire to create<br/><strong>memorable</strong> designs<br/>and more than<br/><strong>functional</strong> digital<br/>experiences.
            </p>
            <p>
                I aim to think<br/><strong>critically</strong> and<br/><strong>creatively</strong> to <strong>solve<br/></strong> design problems<br/>and enjoy both<br/><strong>collaborating</strong><br/> within a team <br/>or working <strong><br/>individually</strong>.
            </p>
            <p>
                <strong>Flexibility</strong> is also<br/>important as<br/>working with code<br/>isn't always a<br/>straight forward<br/>process - <strong>bugs are fun</strong>.
            </p>
        </div>
    </AboutInfo>
    </div>
)

export default About