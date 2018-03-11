import React from 'react'
import renderer from 'react-test-renderer'
import { PersonaList } from './PersonaList'

it('renders correctly', () => {
  const tree = renderer
    .create(
      <PersonaList items={[]} personaChanged={() => {}}>
        <p>Text</p>
        <p>Text</p>
      </PersonaList>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})
