import deepFreeze from 'deep-freeze-es6'
import reducer from './reducer'
import { PersonaActions } from 'components/persona'

describe('initial state', () => {
  it('has a list of initial personas', () => {
    expect(reducer(undefined, '')).toEqual({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })
  })
})

describe('selecting persona', () => {
  it('sets selectedPersona to the current persona', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })

    expect(reducer(initialState, PersonaActions.selectPersona('Roger'))).toEqual(
      { ...initialState, selectedPersona: 'Roger' }
    )
  })

  it('sets selectedPersona to the current persona when there is a valid persona already selected', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Chuck'
    })

    expect(reducer(initialState, PersonaActions.selectPersona('American Dad'))).toEqual(
      { ...initialState, selectedPersona: 'American Dad' }
    )
  })

  it('does not change the state if selected persona is not known', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })

    expect(reducer(initialState, PersonaActions.selectPersona('Jeroen'))).toBe(initialState)
  })

  it('adds a person to the personaList', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })

    expect(reducer(initialState, PersonaActions.addPersona('Jeroen'))).toEqual({...initialState, personaList: [...initialState.personaList, 'Jeroen']})
  })

  it('does not change the state if selected persona is not known', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })

    expect(reducer(initialState, PersonaActions.selectPersona('Jeroen'))).toBe(initialState)
  })

  it('does not add duplicate names', () => {
    const initialState = deepFreeze({
      personaList: [
        'American Dad',
        'Roger',
        'Chuck'
      ],
      selectedPersona: 'Nobody'
    })

    expect(reducer(initialState, PersonaActions.addPersona('Chuck'))).toBe(initialState)
  })
})
