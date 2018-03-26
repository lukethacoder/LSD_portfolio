import React, { Component } from 'react'
import Link from 'gatsby-link'

class RandomWord extends Component {
  constructor() {
    super();
    this.state = {
      curTime : "an Awesome"
    }
  }
  componentDidMount() {
    setInterval( () => {
      const wordsOfNiceness = [
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
      let randomIndex = Math.floor(Math.random() * wordsOfNiceness.length);
      const niceWords = (wordsOfNiceness[randomIndex]);
      // console.log(niceWords);
      this.setState({
        curTime : niceWords
      })
    },3000)
  }

  render() {
      return(
          <strong>{this.state.curTime}</strong>
      );
    }
  }

export default RandomWord