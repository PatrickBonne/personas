import React from 'react'

class PersonaAddNew extends React.Component {
    state = {
      enteredName: ''
    }

    onAddName () {
      this.props.personaNew(this.state.enteredName)
      this.setState({enteredName: ''})
    }

    render () {
      return (
        <div>
          <h1>Add new persona</h1>
                Name: <input value={this.state.enteredName} onChange={(evt) => this.setState({enteredName: evt.target.value})} type='text' />
          <br />
          <button onClick={this.onAddName} disabled={this.state.enteredName === ''}>Add</button>
        </div>
      )
    }
}

export { PersonaAddNew }
