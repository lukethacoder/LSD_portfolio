import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.jpg';

const FooterWrapper = styled.div`
  background: #F2C76D;
  marginBottom: 1.45rem;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const Footer = () => (
    <FooterWrapper>
      <h1 style={{ margin: 0 }}>
        <h4>This is the footer m8</h4>
      </h1>
    </FooterWrapper>
)

export default Footer
