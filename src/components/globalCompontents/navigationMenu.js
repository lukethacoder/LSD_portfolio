import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { primaryFont, primaryGold } from '../../theme/variables';

const NavigationItems = styled.div`
    width: 100%;
    display: block;
    > ul {
        width: auto;
        list-style-type: none;
        margin: 2rem 0;
        padding: 0;
        li {
            padding: .5rem 0;
            width: auto;
            display: inline-block;
            a {
                display: block;
                font-family: ${primaryFont};
                color: ${primaryGold};
                font-size: 1.5rem;
                text-decoration: none;
                margin-right: 20px;
            }
        }
    }
`

const NavigationMenu = () => (
    <NavigationItems>
        <ul>
            <li><a href="/work">Work</a></li>
            {/* <li><a href="/projects">Projects</a></li>
            <li><a href="#">Blog</a></li> */}
            <li><a href="/resume">Resume</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </NavigationItems>
    
)

export default NavigationMenu