import React from 'react'
import { shallow } from 'enzyme'

import MenuButton from '.'

describe('MenuButton', () => {
  it('renders', () => {
    const wrapper = shallow(<MenuButton />)

    expect(wrapper).toMatchSnapshot()
  })
})
