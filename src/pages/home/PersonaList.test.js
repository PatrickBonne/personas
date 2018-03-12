import React from 'react'
import renderer from 'react-test-renderer'
import { PersonaList } from './PersonaList'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PersonaList items={['P1', 'P2']} personaChanged={() => {}} />
    ).toJSON()
  expect(tree).toMatchSnapshot()
})
