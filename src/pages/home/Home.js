import React from 'react'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList } from './PersonaList'
import { PersonaDetails } from './PersonaDetails'
import { PersonaAddNew } from './PersonaAddNew'

class Home extends React.Component {
  state = {
    persona: 'Nobody',
    personaListEntries: ['American Dad', 'Roger', 'Chuck']
  }

  personaChanged = (newPersona) => {
    this.setState({
      persona: newPersona
    })
  }

  personaAdded = (newPersona) => {
    this.setState({personaListEntries: [...this.state.personaListEntries, newPersona]})
  }

  render () {
    return (
      <div>
        <HomeGrid>
          <PersonaListArea>
            <PersonaList items={this.state.personaListEntries} personaChanged={this.personaChanged} />
          </PersonaListArea>
          <PersonaDetailsArea>
            <PersonaDetails persona={this.state.persona} />
          </PersonaDetailsArea>
          <PersonaAddNewArea>
            <PersonaAddNew personaNew={this.personaAdded} />
          </PersonaAddNewArea>
        </HomeGrid>
      </div>
    )
  }
}

export { Home }
