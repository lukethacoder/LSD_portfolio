import React, { Component } from 'react'
import Link from 'gatsby-link'

class RandomWord extends Component {
    render() {
      // const todaysDate = new Date();
      // const theDate = todaysDate.getDate();
      const dayofweek = [
        "an Amazing",
        "an Awesome",
        "a Blithesome",
        "an Excellent",
        "a Fabulous",
        "a Fantastic",
        "a Great",
        "an Incredible",
        "an Outstanding",
        "a Remarkable",
        "a Spectacular",
        "a Splendid",
        "a Super",
        "a Stellar",
        "a Wondrous",
      ]
      const today = (dayofweek[new Date().getDay()]);
      console.log(today);
      return (
        <strong>{today}</strong>
      )
    }
  }

export default RandomWord