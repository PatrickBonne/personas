import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Home } from 'pages/home'

import { store } from 'app-state'

class App extends Component {
  render () {
    return (
      <Header appName='personas' />
    )
  }
}

const Header = (props) =>
  <Provider store={store}>
    <Home appName='personas' />
  </Provider>

export { App }
