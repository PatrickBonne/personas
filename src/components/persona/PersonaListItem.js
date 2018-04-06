import React from 'react'

const PersonaListItem = ({ name, personaChanged }) =>
  <button onClick={() => {
    personaChanged(`${name}`)
  }}>{ name }</button>

export { PersonaListItem }
