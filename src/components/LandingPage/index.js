import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.jpg';

const LandingPageWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.dgr};
    marginBottom: 1.45rem;
    h1 {
        img {
            height: 80px;
        }
    }
`;

const LandingPageContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const LandingPage = () => (
  <LandingPageWrapper>
    <LandingPageContainer>
      <h1 style={{ margin: 0 }}>
        Luke Secomb
      </h1>
      <h3>Web Developer | Digital Designer</h3>
      <h4>Work Smarter<br/><br/>Not Harder</h4>
      <p>Dont be afraid to say hi</p>
    </LandingPageContainer>
  </LandingPageWrapper>
)

export default LandingPage
