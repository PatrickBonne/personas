import React from 'react'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaListItem } from './PersonaListItem'
import { PersonaList } from './PersonaList'
import { PersonaDetails } from './PersonaDetails'

class Home extends React.Component {
  state = { persona: 'Nobody' }

  personaChanged = (newPersona) => {
    this.setState({
      persona: newPersona
    })
  }

  render () {
    return (
      <div>
        <HomeGrid>
          <PersonaListArea>
            <PersonaList personaChanged={this.personaChanged}>
              <PersonaListItem name='American Dad' />
              <PersonaListItem name='Roger' />
              <PersonaListItem name='Steve' />
              <PersonaListItem name='Chuck Norris' />
              <PersonaListItem name='Patrick' />
            </PersonaList>
          </PersonaListArea>
          <PersonaDetailsArea>
            <PersonaDetails persona={this.state.persona} />
          </PersonaDetailsArea>
          <PersonaAddNewArea>
            <div>
              Add new persona
            </div>
          </PersonaAddNewArea>
        </HomeGrid>
      </div>
    )
  }
}

export { Home }
