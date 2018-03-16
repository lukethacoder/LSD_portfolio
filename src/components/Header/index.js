import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.jpg';

const HeaderWrapper = styled.div`
  background: #F2C76D;
  marginBottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          <img src={logo} alt="Luke Secomb Digital Logo" />
        </Link>
      </h1>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
