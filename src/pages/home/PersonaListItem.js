import React from 'react'

const PersonaListItem = ({ name, personaChanged }) =>
  <button onClick={() => {
    personaChanged(`${name} here!`)
    console.log(`${name} here!`)
  }}>{ name }</button>

export { PersonaListItem }
