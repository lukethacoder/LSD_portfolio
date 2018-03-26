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
        display: inline-grid;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 1fr;
        grid-column-gap: 1.5rem;
        justify-content: space-between;
        margin: 2rem 0;
        padding: 0;
        li {
            align-self: center;
            justify-self: center;
            padding: .5rem 0;
            width: auto;
            a {
                display: block;
                font-family: ${primaryFont};
                color: ${primaryGold};
                font-size: 1.5rem;
                text-decoration: none;
            }
        }
    }
`

const NavigationMenu = () => (
    <NavigationItems>
        <ul>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </NavigationItems>
    
)

export default NavigationMenu