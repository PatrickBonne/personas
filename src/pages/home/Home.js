import React from 'react'
import { connect } from 'react-redux'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList, PersonaDetails, PersonaAddNew, PersonaActions } from 'components/persona'

class Home extends React.Component {
  state = {
    persona: 'Nobody'
    // personaListEntries: ['American Dad', 'Roger', 'Chuck']
  }

  personaChanged = (newPersona) => {
    this.props.selectPersona(newPersona)
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
            <PersonaDetails persona={this.props.selectedPersona} />
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
  personas: state.personas.personaList,
  selectedPersona: state.personas.selectedPersona
})

const mapDispatchToProps = (dispatch) => ({
  selectPersona: (personaName) => dispatch(PersonaActions.selectPersona(personaName))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
