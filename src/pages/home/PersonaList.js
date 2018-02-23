import React from 'react'

const PersonaList = ({ children, personaChanged }) => {
  return (
    <ul>
      { React.Children.map(children, (persona) => <li>{React.cloneElement(persona, { personaChanged })}</li>) }
    </ul>
  )
}

export { PersonaList }
