import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

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

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

describe('MaskedInput', () => {
  const wrap = (props = {}) => shallow(<MaskedInput {...props} />)

  it('renders', () => {
    expect(toJSON(wrap(props))).toMatchSnapshot()
  })

  it('renders with valid === false', () => {
    expect(toJSON(wrap({ ...props, valid: false }))).toMatchSnapshot()
  })
})
