import React, { Component } from 'react'
import Link from 'gatsby-link'

class DayOfWeek extends Component {
    render() {
      // const todaysDate = new Date();
      // const theDate = todaysDate.getDate();
      const dayofweek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
      const today = (dayofweek[new Date().getDay()]);
      console.log(today);
      return (
        <strong>{today}</strong>
      )
    }
  }

export default DayOfWeek