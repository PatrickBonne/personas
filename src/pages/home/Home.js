import React from 'react'
// import { connect } from 'react-redux'
import { HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea } from './HomeGrid'
import { PersonaList, PersonaDetails, PersonaAddNew, PersonaActions } from 'components/persona'
import { TestComponentUser, TestComponentUserWithRenderProp } from 'components/persona/RenderProps'
import { WithStore } from 'app-state'

// class Home extends React.Component {
//   personaChanged = (newPersona) => {
//     this.props.selectPersona(newPersona)
//   }

//   personaAdded = (newPersona) => {
//     // this.setState({personaListEntries: [...this.state.personaListEntries, newPersona]})
//   }

//   render () {
//     return (
//       <div>
//         <HomeGrid>
//           <PersonaListArea>
//             <PersonaList items={this.props.personas} personaChanged={this.personaChanged} />
//           </PersonaListArea>
//           <PersonaDetailsArea>
//             <TestComponentUser />
//             <TestComponentUserWithRenderProp />
//             <PersonaDetails persona={this.props.selectedPersona} />
//           </PersonaDetailsArea>
//           <PersonaAddNewArea>
//             <PersonaAddNew personaNew={this.props.addPersona} />
//           </PersonaAddNewArea>
//         </HomeGrid>
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   personas: state.personas.personaList,
//   selectedPersona: state.personas.selectedPersona
// })

// const mapDispatchToProps = (dispatch) => ({
//   selectPersona: (personaName) => dispatch(PersonaActions.selectPersona(personaName)),
//   addPersona: (personaName) => dispatch(PersonaActions.addPersona(personaName))
// })

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Home)

class Home extends React.Component {
  render () {
    return (
      <WithStore selector={state => ({
        selectedPersona: state.personas.selectedPersona,
        personas: state.personas.personaList
      })}>
        {
          ({personas, selectedPersona, addPersona}, dispatch) =>
            <HomeGrid>
              <PersonaListArea>
                <PersonaList items={personas} personaChanged={personaName => dispatch(PersonaActions.selectPersona(personaName))} />
              </PersonaListArea>
              <PersonaDetailsArea>
                <TestComponentUser />
                <TestComponentUserWithRenderProp />
                <PersonaDetails persona={selectedPersona} />
              </PersonaDetailsArea>
              <PersonaAddNewArea>
                <PersonaAddNew personaNew={personaName => dispatch(PersonaActions.addPersona(personaName))} />
              </PersonaAddNewArea>
            </HomeGrid>
        }
      </WithStore>
    )
  }
}

export default Home
