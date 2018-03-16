import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';

const IndexPageContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${props => props.theme.ofw};
  h1 {
    color: ${props => props.theme.dgr};
  }
`;

const IndexPage = () => (
  <IndexPageContainer>
    <LandingPage />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/resume/">Go to page 2</Link>
  </IndexPageContainer>
)

export default IndexPage
