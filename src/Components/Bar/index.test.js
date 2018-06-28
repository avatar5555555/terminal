import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import configureStore from 'redux-mock-store'

import ConnectedBar, { Bar, styles, bindActions } from '.'

const props = {
  classes: { root: 'string' },
  pathname: '/',
  back: jest.fn()
}
const mockStore = configureStore()
const initialState = {
  router: {
    location: {
      pathname: ''
    }
  }
}

describe('Bar', () => {
  let store, wrapper

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<ConnectedBar store={store} {...props} />)
  })

  it('renders', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

describe('DisconnectedBar', () => {
  const wrap = (props = {}) => shallow(<Bar {...props} />)
  it('calls backFn on click', () => {
    const mockBackFn = jest.fn()
    const wrapper = wrap({
      ...props,
      pathname: '/notRoot',
      back: mockBackFn
    })
    wrapper.find('#back-button').simulate('click', { preventDefault() {} })

    expect(mockBackFn.mock.calls.length).toBe(1)
  })

  it('renders MenuButton if pathname is "/"', () => {
    const wrapper = wrap({ ...props })
    wrapper.find('#menu-button').length

    expect(wrapper.find('#menu-button').length).toBe(1)
  })

  it('checks aria-owns prop if anchorEl is set', () => {
    const wrapper = wrap({ ...props })

    const buttonProps = wrapper
      .setState({ anchorEl: 'HTMLElement' })
      .find('#menu-button')
      .props()

    expect(buttonProps['aria-owns']).toBe('simple-menu')
  })

  it('it set anchorEl on menu click and drop on select', () => {
    const wrapper = shallow(<Bar {...props} />)

    expect(wrapper.state('anchorEl')).toBe(null)

    wrapper
      .find('#menu-button')
      .dive()
      .find('[aria-label="Menu"]')
      .simulate('click', { currentTarget: 'wow' })

    expect(wrapper.state('anchorEl')).toBe('wow')

    wrapper
      .find('#menu-button')
      .dive()
      .find('#menu-item')
      .simulate('click')

    expect(wrapper.state('anchorEl')).toBe(null)
  })
})

describe('functions', () => {
  it('styles return object with field root', () => {
    const classes = styles({ spacing: { unit: 5 } })

    expect(classes.root.marginBottom).toBe(5)
  })

  it('calls dispatch', () => {
    const mockDispatch = jest.fn()

    const actions = bindActions(mockDispatch)

    actions.back()

    expect(mockDispatch.mock.calls.length).toBe(1)
  })
})
