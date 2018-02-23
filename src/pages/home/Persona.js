import React from 'react'

const Persona = ({ name, personaChanged }) =>
  <button onClick={() => {
    personaChanged(`${name} here!`)
    console.log(`${name} here!`)
  }}>{ name }</button>

export { Persona }
