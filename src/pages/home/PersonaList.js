import React from 'react'
import { PersonaListItem } from './PersonaListItem'

const PersonaList = ( {items, personaChanged} ) => {
  return (
    <div>
      <h1>Names</h1>
      <ul>
        { items.map( (item) =>  <li><PersonaListItem name={item} personaChanged={personaChanged} /> </li>)}
      </ul>
    </div>
  )
}

export { PersonaList }
