class PersonaActions {
  static selectPersona = (personaName) => ({
    type: 'SELECT_PERSONA',
    personaName
  })
}

export { PersonaActions }
