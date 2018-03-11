import glamorous from 'glamorous'
import { Grid } from 'helpers/Grid'

let grid = new Grid(['selectionArea detailArea', 
                     'addNewArea    detailArea'], 
                     { gridTemplateColumns: '2fr 3fr' }
)

const HomeGrid = glamorous.div(grid.container, {
  height: '100vh',
  padding: '5px',
  boxSizing: 'border-box'
})

const gridItemLayout = {
  display: 'flex',
  justifyContent: 'flex-start',
  allignItems: 'center',
  flexFlow: 'column nowrap',
  border: '1px solid black'}

const PersonaListArea = glamorous.div(grid.selectionArea, gridItemLayout)
const PersonaDetailsArea = glamorous.div(grid.detailArea, gridItemLayout)
const PersonaAddNewArea = glamorous.div(grid.addNewArea, gridItemLayout)

export {HomeGrid, PersonaListArea, PersonaDetailsArea, PersonaAddNewArea}
