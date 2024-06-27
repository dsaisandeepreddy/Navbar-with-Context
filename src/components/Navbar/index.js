// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const onToggleTheme = event => {
            toggleTheme(event.target.value)
          }
          return (
            <div>
              {isDarkTheme ? (
                <img
                  alt="website logo"
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                />
              ) : (
                <img
                  src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                  alt="website logo"
                />
              )}

              <ul>
                <li>
                  <Link to="/">
                    <h1>Home</h1>
                  </Link>
                </li>
                <li>
                  <Link to="/about">
                    <h1>About</h1>
                  </Link>
                </li>
              </ul>
              <button
                data-testid="theme"
                type="button"
                alt="theme"
                onClick={onToggleTheme}
              >
                {isDarkTheme ? (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                    alt="theme"
                  />
                ) : (
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                    alt="theme"
                  />
                )}
              </button>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
