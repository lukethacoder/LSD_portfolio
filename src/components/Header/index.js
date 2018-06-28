import React, {Component} from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faAlignRight, faTimes } from '@fortawesome/fontawesome-free-solid'

import SocialMediaIcons from '../globalCompontents/SocialMediaIcons'

import { primaryDarkGrey, primaryGold, pageWidth, navWidth, primaryWhite, primaryFont } from '../../theme/variables';


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

class MenuOverlay extends Component {
  render() {
    return (
      <MenuOverlayChild style={this.props.isOpen ? {display: "block"} : {display: "none"}}>
        <CloseButton onClick={ this.props.isClosed}>
          <FontAwesomeIcon icon={faTimes}/>
        </CloseButton>
        <MenuList onClick={ this.props.isClosed}>
          <li><Link to="/work">Work</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          {/* <li><a href="#">Blog</a></li> */}
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/about">About</Link></li>
        </MenuList>
        <SocialMediaContainer>
          <SocialMediaIcons/>  
        </SocialMediaContainer>
      </MenuOverlayChild>
    )
  }
}

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menuVisState: false
    }
  }

  toggleMenu(whatIsIt) {
    console.log('pls open me')
    this.setState({
      menuVisState: whatIsIt
    })
  }

  render() {
    return (
      <div>
        <HeaderWrapper>
          <HeaderContainer>
            <SvgWrapper>
              <Link to="/">
                <LogoSVG />
              </Link>
            </SvgWrapper>
            
            <NavContainer>
              <NavIcon to="/" onClick={() => this.toggleMenu(true)}>
                <FontAwesomeIcon icon={faAlignRight}/>
              </NavIcon>
            </NavContainer>        
        </HeaderContainer>
      </HeaderWrapper>
      <MenuOverlay
        isOpen={this.state.menuVisState}
        isClosed={ () => this.toggleMenu(false)}
      ></MenuOverlay>
    </div>
    )
  }
}

const HeaderWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding: 2% 0;
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  width: ${navWidth};
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
  /* padding: 5% 5% 5% 0; */
  height: 50px;
  width: 50px;
  justify-content: center;
  align-content: center;
  z-index: 50;
  a {
    width: 100%;
    height: 100%;
    display: block;
    justify-content: center;
    align-content: center;
    svg {
      display: block;
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
  z-index: 50;
`;

const NavIcon = styled.a`
  justify-self: end;
  color: ${primaryGold};
  cursor: pointer;
  svg {
    font-size: 26px;
    padding: 5% 0;
    justify-self: end;
  }
`;

const MenuOverlayChild = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background-color: ${primaryDarkGrey};
  z-index: 999;
  grid-template-rows: 1fr 5vh;
  align-content: center;
  justify-content: center;  
}`

const CloseButton = styled.div`
  color: ${primaryWhite};
  transition: .5s;
  margin: 0;
  padding: 0;
  z-index: 99999;
  &:hover {
    color: ${primaryGold};
    transition: .5s;
  }
  svg {
    position: absolute;
    top: 25px;
    right: 2.5%;
    height: 50px;
    color: ${primaryGold};
    cursor: pointer;
    font-size: 26px;
    z-index: 99999;
    &:hover {
      text-decoration: none;
      color: ${primaryWhite};
      transition: .5s;
    }
  }
`

const MenuList = styled.ul`
  width: 100%;
  height: 100%;
  position: relative;
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  justify-content: center;
  align-content: center;
  li {
    width: auto;
    text-align: center;
    padding: 24px 0;
    a {
      text-align: center;
      text-decoration: none;
      color: ${primaryWhite};
      font-size: 6vw;
      line-height: 5vw;
      font-family: ${primaryFont};
      font-weight: 700;
      transition: .5s;
      margin: 0;
      padding;
      &:hover {
        color: ${primaryGold};
        transition: .5s;
      }
    }
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  position: absolute;
  bottom: 0;
  margin: 24px 0;
  ul {
    height: 20%;
    width: auto;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    align-self: center;
    list-style-type: none;
    li {
      padding: 0 8px;
      a {
        text-decoration: none;
        color: ${primaryGold};
        font-size: 2.5vh;
      }
    }
  }
  
`