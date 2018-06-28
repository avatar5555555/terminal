import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import OperatorCard, { styles } from '.'

const props = {
  src: 'string',
  name: 'string',
  classes: {
    image: 'string',
    container: 'string',
    root: 'string',
    icon: 'string',
    button: 'string',
    content: 'string'
  }
}

describe('OperatorCard', () => {
  const wrap = (props = {}) => shallow(<OperatorCard {...props} />)

  it('renders', () => {
    expect(toJSON(wrap(props))).toMatchSnapshot()
  })

  it('renders without crashing', () => {
    expect(wrap(props)).toBeDefined()
  })

  it('styles return object', () => {
    const classes = styles({
      spacing: { unit: 5 },
      breakpoints: { down: jest.fn() }
    })

    expect(classes.image.margin).toBe(5)
  })

  it('checks if Grid is item', () => {
    const item = wrap(props)
      .dive()
      .find('.OperatorCard-root-3')
      .prop('item')

    expect(item).toBeTruthy()
  })
})
