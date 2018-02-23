import React from 'react'
import { HomeGrid, LeftSideBar, ContentsArea } from './HomeGrid'
import { Persona } from './Persona'
import { PersonaList } from './PersonaList'

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
            <h1>Names</h1>
            <PersonaList personaChanged={this.personaChanged}>
              <Persona name='American Dad' />
              <Persona name='Roger' />
              <Persona name='Steve' />
              <Persona name='Chuck Norris' />
            </PersonaList>
          </LeftSideBar>
          <ContentsArea>
            <h1>Persona details</h1>
            <p>{ this.state.persona }</p>
          </ContentsArea>
        </HomeGrid>
      </div>
    )
  }
}

export { Home }
