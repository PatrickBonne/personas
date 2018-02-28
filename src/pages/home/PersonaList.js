import React from 'react'

const PersonaList = ({ children, personaChanged }) => {
  return (
    <div>
      <h1>Names</h1>
      <ul>
        { React.Children.map(children, (persona) => <li>{React.cloneElement(persona, { personaChanged })}</li>) }
      </ul>
    </div>
  )
}

export { PersonaList }
