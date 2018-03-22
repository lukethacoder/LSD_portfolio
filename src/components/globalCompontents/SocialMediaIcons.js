import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faAlignRight } from '@fortawesome/fontawesome-free-solid'

const SocialMediaIcons = () => (
    <ul>
        <li><a href="#" target="_blank"><FontAwesomeIcon icon={["fab","linkedin"]}/></a></li>
        <li><a href="#" target="_blank"><FontAwesomeIcon icon={["fab","github"]}/></a></li>
        <li><a href="#" target="_blank"><FontAwesomeIcon icon={["fab","instagram"]}/></a></li>
        <li><a href="#" target="_blank"><FontAwesomeIcon icon={["fab","500px"]}/></a></li>
    </ul>
)

export default SocialMediaIcons