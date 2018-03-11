import React from 'react'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList } from './PersonaList'
import { PersonaDetails } from './PersonaDetails'

class Home extends React.Component {
  state = { persona: 'Nobody',
            personaList: ['American Dad', 'Roger', 'Chuck' ]
  }

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
            <PersonaList items={this.state.personaList} personaChanged={this.personaChanged} />
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
