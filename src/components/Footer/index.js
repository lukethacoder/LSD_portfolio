import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../../images/logo.jpg';
import SocialMediaIcons from '../globalCompontents/SocialMediaIcons';
import NavigationMenu from '../globalCompontents/navigationMenu'
import { pageWidth, primaryGold, otherGrey, primaryFont } from '../../theme/variables';

const FooterWrapper = styled.div`
  width: ${pageWidth};
  margin: 0 auto 5rem auto;
  display: block;
  grid-template-rows: 1fr;
  p {
    color: ${otherGrey};
    font-family: ${primaryFont};
    font-size: 1.25rem;
  }
  > ul {
    width: auto;
    margin: 0 0 0 .5rem;
    padding: 0;
    list-style-type: none;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    align-content: start;
    justify-content: start;
    li {
      width: auto;
      margin: 0 1rem 0 0;
      a {
        color: ${primaryGold};
        text-decoration: none;
        font-size: 2rem;
      }
    }
  }
`;

const Footer = () => (
    <FooterWrapper>
      <p>Dont be afraid to say hi</p>
      <SocialMediaIcons/>
      <NavigationMenu/>
    </FooterWrapper>
)

export default Footer
