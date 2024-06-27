// Write your code here
import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Navbar />
              {isDarkTheme ? (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                    alt="about"
                  />
                  <h1>About</h1>
                </div>
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                    alt="about"
                  />
                  <h1>About</h1>
                </div>
              )}
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
