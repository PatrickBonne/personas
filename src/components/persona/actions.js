class PersonaActions {
  static selectPersona = (personaName) => ({
    type: 'SELECT_PERSONA',
    personaName
  })

  static addPersona = (personaName) => ({
    type: 'ADD_PERSONA',
    personaName
  })
}

export { PersonaActions }
