import React from 'react'
import bg_img from '../../images/camera-profile.jpg'

export const DynamicBackgroundImage = React.createContext({
    image: bg_img,
    changeStateo: () => {},
    consoleo: () => {console.log('run me')}
});

// export const DynamicBackgroundImage = React.createContext({
//   state: ({
//     image: this.state
//   }),
//   toggleTheme: () => {},
// });