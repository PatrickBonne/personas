import React from 'react'
import { HomeGrid, LeftSideBar, ContentsArea } from './HomeGrid'
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
          <LeftSideBar>
            <PersonaList personaChanged={this.personaChanged}>
              <PersonaListItem name='American Dad' />
              <PersonaListItem name='Roger' />
              <PersonaListItem name='Steve' />
              <PersonaListItem name='Chuck Norris' />
              <PersonaListItem name='Patrick' />
            </PersonaList>
          </LeftSideBar>
          <ContentsArea>
            <PersonaDetails persona={this.state.persona} />
          </ContentsArea>
        </HomeGrid>
      </div>
    )
  }
}

export { Home }
