import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faAlignRight } from '@fortawesome/fontawesome-free-solid'

import { primaryDarkGrey, primaryGold, pageWidth } from '../../theme/variables';

import logo from '../../images/luke-secomb-digital-logo.svg';

const LogoSVG = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 226.86">
  <g id="Layer_2" data-name="Layer 2">
  <g id="Layer_1-2" data-name="Layer 1">
  <path class="cls-1" d="M106.94,22.24,19.24,59l87.7,37v22.24L0,71.71V46.48L106.94,0Z"/>
  <path class="cls-1" d="M243.06,204.62l87.7-36.73-87.7-37V108.67L350,155.15v25.24L243.06,226.86Z"/>
  <path class="cls-1" d="M242.6,0Q151.42,151.75,136.33,178.45t-15.09,35.39q0,9.77,8.26,9.77,18.25,0,67-68.93,1.08-2.17,2.61-2.17a1.16,1.16,0,0,1,.87,1.3q0,1.3-2.17,3.47l-9.35,12.83q-41.09,56.74-60.64,56.74a19.19,19.19,0,0,1-15.32-7.06q-6-7.06-6-17.91A51.52,51.52,0,0,1,112,178.78q5.54-11.18,37.67-64.59Q189,48.85,215.89.87Z"/>
  </g></g>
</svg>
);

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 2% 0;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: ${pageWidth};
  max-height: 125px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr; 
  /* SVGWrapper */
  /* NavContainer */
`;

const SvgWrapper = styled.div`
  display: flex;
  height: auto;
  width: auto;
  margin: 0;
  padding: 5% 5% 5% 0;
  height: 100%;
  a {
    justify-self: start;
    svg {
      fill: ${primaryGold};
      height: 100%;
      /* min-height: 0; */
  }
}
`;

const NavContainer = styled.div`
  align-content: center;
  justify-content: end;
  display: grid;
`;

const NavList = styled.ul`
  width: 50%;
  float: right;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: none; /* grid */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  align-content: right;
  a {
    text-decoration: none;
    li {
      justify-self: right;
      color: ${primaryGold};
      margin: 1% 10%;
    }
  }
`;

const NavIcon = styled.a`
  justify-self: end;
  color: ${primaryGold};
  svg {
    font-size: 24px;
    padding: 5% 0;
    justify-self: end;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
        <SvgWrapper>
          <Link to="/">
            <LogoSVG />
          </Link>
        </SvgWrapper>
        
        <NavContainer>
          <NavList>
            <Link to="/blog"><li>Blog</li></Link>
            <Link to="/resume"><li>Resume</li></Link>
            <Link to="/about"><li>About</li></Link>
          </NavList>
          <NavIcon to="/">
            <FontAwesomeIcon icon={faAlignRight}/>
          </NavIcon>
        </NavContainer>        
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
