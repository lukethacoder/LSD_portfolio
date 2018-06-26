import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {LandingPageWrapper, LandingPageContainer } from '../components/LandingPage'
import { primaryFont, primaryGold, pageWidth, primaryWhite, backgroundDarkGrey, evenDarkerGrey } from '../theme/variables';

import img_gatsbyjs from '../images/gatsbyjs.png';
import img_sass from '../images/sass.png';
import img_camera from '../images/camera.png';
import img_npm from '../images/npm.png';
import img_restful from '../images/restful-api.png';
import img_grapql from '../images/grapql.png';
import img_adobe from '../images/acc.png';
import img_gulp from '../images/gulp.png';
import img_react from '../images/react.png';
import img_maya from '../images/maya.jpg';
import img_vscode from '../images/vs-code.png';
import img_gihub from '../images/github.png';

const About = () => (
    <div>
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
                I have <br/><strong>experience</strong> with:<br/>
                <AboutGrid>
                    <div>
                        <a href="http://gatsbyjs.org"><img src={img_gatsbyjs}/></a>
                    </div>
                    <div>
                        <a href="https://reactjs.org/"><img src={img_react}/></a>
                    </div>
                    <div>
                        <a href="https://www.adobe.com/au/"><img src={img_adobe}/></a>
                    </div>

                    <div>
                        <a href="https://500px.com/lukesecomb"><img src={img_camera}/></a>
                    </div>
                    <div>
                        <a href="https://www.npmjs.com"><img src={img_npm}/></a>
                    </div>
                    <div>
                        <a href="http://sass-lang.com/"><img src={img_sass}/></a>
                    </div>
                    
                    <div>
                        <a href="https://gulpjs.com/"><img src={img_gulp}/></a>
                    </div>
                    <div>
                        <a href="https://graphql.org/"><img src={img_grapql}/></a>
                    </div>
                    <div>
                        <a href="https://restfulapi.net/"><img src={img_restful}/></a>
                    </div>

                    <div>
                        <a href="https://code.visualstudio.com/"><img src={img_vscode}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/lukethacoder"><img src={img_gihub}/></a>
                    </div>
                    <div>
                        <a href="https://www.autodesk.eu/products/maya/overview"><img src={img_maya}/></a>
                    </div>

                </AboutGrid>
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
const AboutGrid = styled.div`
  width: 100% !important;
  height: auto;
  margin-left: 0 !important ;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  margin-top: 25px !important;
  div {
      width: 100%;
      justify-self: flex-start;
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 100%;
      justify-content: flex-start;
      align-content: center;
      transition: .5s;
      &:hover {
          transition: .5s;
          a {
              background-color: ${primaryGold};
              transition: .1s;
              img {
                  filter: grayscale(100%);
                  transition: .1s;
              }
          }
      }
      a {
        width: 100%;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 100%;
        justify-content: center;
        align-content: center;
        background-color: ${primaryWhite};
        transition: .5s;
        img {
            width: 100%;
            display: grid;
            justify-self: center;
            align-self: center;
            padding: 15%;
            transition: .5s;
        }
      } 
  }
`