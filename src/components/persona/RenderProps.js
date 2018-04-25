import React from 'react'

class TestComponent extends React.Component {
  state = { a: 'Nice' }
  render () {
    return this.props.render ? this.props.render(this.state) : this.props.children(this.state)
  }
}

class TestComponentUser extends React.Component {
  render () {
    return (
      <TestComponent>
        { ({a}) => {
          return (
            <div>
              <p>I am so good</p>
              <p>But you are also {a}</p>
            </div>
          )
        }}
      </TestComponent>
    )
  }
}

class TestComponentUserWithRenderProp extends React.Component {
  render () {
    return (
      <TestComponent render={
        ({a}) => {
          return (
            <div>
              <p>I am so good</p>
              <p>But you are also {a}</p>
            </div>
          )
        }
      } />
    )
  }
}

export { TestComponentUser, TestComponentUserWithRenderProp }
