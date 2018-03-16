import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.jpg';

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 2%;
  margin: 0 auto;
  background: green;
  h1 {
    img {
      width: 50px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: 100%;
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
