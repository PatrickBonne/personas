import React, { Component } from 'react'
import { Home } from 'pages/home'

class App extends Component {
  render () {
    return (
      <Header appName='personas' />
    )
  }
}

const Header = (props) =>
  <div>
    <Home appName='personas' />
  </div>

export { App }
