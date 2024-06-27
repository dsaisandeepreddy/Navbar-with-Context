// Write your code here
import {Component} from 'react'

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <div>
              <Navbar />
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1>Lost Your Way?</h1>
              <p>we cannot seem to find the page you are looking for.</p>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
