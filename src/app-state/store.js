import { createStore, applyMiddleware, compose } from 'redux'

import { createLogger } from 'redux-logger'

import { rootReducer } from './rootReducer'
import { loadState, saveState } from './localStorage'

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  loadState(),
  composeEnhancers(
    applyMiddleware(
      loggerMiddleware
    )
  )
)

store.subscribe(() => {
  saveState({
    ...store.getState()
  })
})

export { store }
