const initialState = {
  personaList: [
    'American Dad',
    'Roger',
    'Chuck'
  ],
  selectedPersona: 'Nobody'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_PERSONA':
      if (state.personaList.find((personaName) => personaName === action.personaName)) {
        return { ...state, selectedPersona: action.personaName }
      }
      return state
    case 'ADD_PERSONA':
      if (state.personaList.find((personaName) => personaName === action.personaName)) {
        return state
      }
      return {...state, personaList: [...state.personaList, action.personaName]}

    default:
      return state
  }
}

export default reducer
