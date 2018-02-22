import glamorous from 'glamorous'
import { Grid } from 'helpers/Grid'

let grid = new Grid(['leftSideBar content'], { gridTemplateColumns: '2fr 3fr' })

const HomeGrid = glamorous.div(grid.container, {
  height: '100vh',
  padding: '5px',
  boxSizing: 'border-box'
})

const gridItemLayout = {
  display: 'flex',
  justifyContent: 'center',
  allignItems: 'center',
  border: '1px solid black'}

const LeftSideBar = glamorous.div(grid.leftSideBar, gridItemLayout)
const ContentsArea = glamorous.div(grid.content, gridItemLayout)

export {HomeGrid, LeftSideBar, ContentsArea}
