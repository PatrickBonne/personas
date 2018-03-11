import React from 'react'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList } from './PersonaList'
import { PersonaDetails } from './PersonaDetails'

class Home extends React.Component {
  state = { persona: 'Nobody',
            personaListEntries: ['American Dad', 'Roger', 'Chuck' ]
  }


  personaChanged = (newPersona) => {
    this.setState({
      persona: newPersona
    })
  }

  personaAdded = (newPersona) => {
    this.setState( { personaListEntries: [...this.state.personaListEntries, newPersona]})
  }

  render () {
    var enteredName=''
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
            <div>
              <h1>Add new persona</h1>
              Name: <input onChange={(evt) => enteredName=evt.target.value} type='text' />
              <br/>
              <button onClick={() => this.personaAdded(enteredName) }>Add</button>
            </div>
          </PersonaAddNewArea>
        </HomeGrid>
      </div>
    )
  }
}

export { Home }
