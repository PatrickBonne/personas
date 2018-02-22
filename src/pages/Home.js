import React from 'react'
import { HomeGrid, LeftSideBar, ContentsArea } from './HomeGrid'

// class PersonaList extends React.Component {
//   render () {
//     return (
//       <ul>
//         <li>American Dad</li>
//         <li>Roger</li>
//         <li>Steve</li>
//         <li>Chuck Norris</li>
//       </ul>

//     )
//   }
// }

const Persona = ({ name }) =>
  <button onClick={function () { console.log(`${name} here!`) }}>{ name }</button>

const PersonaList = ({ children }) => {
  return (
    <ol>
      { React.Children.map(children, (persona) => <li>{persona}</li>) }
    </ol>
  )
}

const Home = (props) => {
  return (
    <div>
      <HomeGrid>
        <LeftSideBar>
          <h1>Names</h1>
          <br />
          <PersonaList>
            <Persona name='American Dad' />
            <Persona name='Roger' />
            <Persona name='Steve' />
            <Persona name='Chuck Norris' />
          </PersonaList>
        </LeftSideBar>
        <ContentsArea> Contents </ContentsArea>
      </HomeGrid>
    </div>
  )
}

export { Home }
