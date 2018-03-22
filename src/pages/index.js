import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import LandingPage from '../components/LandingPage';
import { primaryWhite, primaryDarkGrey } from '../theme/variables';

const IndexPageContainer = styled.div` 
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: ${primaryDarkGrey};
`;

const WorkContainer = styled.div`
  background-color: ${primaryWhite};
  padding: 5% 0;
`

const IndexPage = () => (
  <IndexPageContainer>
    <LandingPage />
    <WorkContainer>
      <div>

      </div>
    </WorkContainer>
    <Link to="/resume/">Go to page 2</Link>
  </IndexPageContainer>
)

export default IndexPage
