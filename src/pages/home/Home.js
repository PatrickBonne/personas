import React from 'react'
import { connect } from 'react-redux'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList, PersonaDetails, PersonaAddNew } from 'components/persona'

class Home extends React.Component {
  state = {
    persona: 'Nobody'
    // personaListEntries: ['American Dad', 'Roger', 'Chuck']
  }

  personaChanged = (newPersona) => {
    this.setState({
      persona: newPersona
    })
  }

  personaAdded = (newPersona) => {
    // this.setState({personaListEntries: [...this.state.personaListEntries, newPersona]})
  }

  render () {
    return (
      <div>
        <HomeGrid>
          <PersonaListArea>
            <PersonaList items={this.props.personas} personaChanged={this.personaChanged} />
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

const mapStateToProps = (state) => ({
  personas: state.personas
})

const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
