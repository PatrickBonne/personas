
import React from 'react'

class PersonaDetails extends React.Component {
  render () {
    return (
      <div>
        <h1>Persona details</h1>
        <p>
          { this.props.persona }
        </p>
      </div>
    )
  }
}

export { PersonaDetails }
