// import deepFreeze from 'deep-freeze-es6'
import reducer from './reducer'

describe('initial state', () => {
  it('has a list of initial personas', () => {
    expect(reducer(undefined, '')).toEqual([
      'American Dad',
      'Roger',
      'Chuck'
    ])
  })
})
