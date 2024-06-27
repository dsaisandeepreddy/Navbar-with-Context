// Write your code here
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <div>
              <Navbar />
              {isDarkTheme ? (
                <div className="dark-mode">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                    alt="home"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                    alt="home"
                  />
                </div>
              )}
              <h1>Home</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
