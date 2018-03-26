import React from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

const SocialMediaIcons = () => (
    <ul>
        <li><a href="https://www.linkedin.com/in/luke-secomb/" target="_blank"><FontAwesomeIcon icon={["fab","linkedin"]}/></a></li>
        <li><a href="https://github.com/lukethacoder" target="_blank"><FontAwesomeIcon icon={["fab","github"]}/></a></li>
        <li><a href="https://www.instagram.com/lukesecombdigital/" target="_blank"><FontAwesomeIcon icon={["fab","instagram"]}/></a></li>
        <li><a href="500px.com/lukesecomb" target="_blank"><FontAwesomeIcon icon={["fab","500px"]}/></a></li>
    </ul>
)

export default SocialMediaIcons