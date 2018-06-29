import React from 'react'
import { shallow } from 'enzyme'

import Router from '.'

it('renders', () => {
  const wrapper = shallow(<Router />)

  expect(wrapper).toMatchSnapshot()
})
