import React from 'react'
import { shallow } from 'enzyme'

import MaskedInput, { MInput } from '.'

const props = {
  mask: 'string',
  id: 'string',
  value: '',
  onChange: jest.fn(),
  onBlur: jest.fn(),
  error: '',
  valid: true,
  className: 'string'
}

describe('MInput', () => {
  it('renders', () => {
    const wrapper = shallow(<MInput />)

    expect(wrapper).toMatchSnapshot()
  })
})

describe('MaskedInput', () => {
  const wrap = (props = {}) => shallow(<MaskedInput {...props} />)

  it('renders', () => {
    expect(wrap(props)).toMatchSnapshot()
  })

  it('renders with valid === false', () => {
    expect(wrap({ ...props, valid: false })).toMatchSnapshot()
  })
})
