import React from 'react'
import renderer from 'react-test-renderer'
import { PersonaDetails } from './PersonaDetails'

it('renders correctly', () => {
  const tree = renderer
    .create(<PersonaDetails persona='Chuck' />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
