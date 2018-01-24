import React, { Component } from 'react'

class App extends Component {
  render () {
    return (
      <Header appName='personas' />
    )
  }
}

const Header = (props) =>
  <div>
    Hello from our { props.appName } app.
  </div>

export { App }
