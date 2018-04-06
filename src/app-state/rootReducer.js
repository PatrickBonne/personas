import { combineReducers } from 'redux'
import personas from 'components/persona/reducer'

const appReducer = combineReducers({
  personas
})

// See answer from Dan Abramov: https://stackoverflow.com/a/35641992/1272679
const rootReducer = (state, action) => {
  if (action.type === 'RESET_APPLICATION') {
    state = undefined
  }

  return appReducer(state, action)
}

export { rootReducer }
