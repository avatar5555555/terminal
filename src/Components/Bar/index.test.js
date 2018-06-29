import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Bar from './Bar'

import ConnectedBar, { styles, bindActions } from '.'

const props = {
  classes: { root: 'string' },
  pathname: '/',
  goBack: jest.fn()
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
    expect(wrapper).toMatchSnapshot()
  })
})

describe('DisconnectedBar', () => {
  const wrap = (props = {}) => shallow(<Bar {...props} />)
  it('calls goBackFn on click', () => {
    const mockBackFn = jest.fn()
    const wrapper = wrap({
      ...props,
      pathname: '/notRoot',
      goBack: mockBackFn
    })
    wrapper.find('#back-button').simulate('click', { preventDefault() {} })

    expect(mockBackFn.mock.calls.length).toBe(1)
  })

  it('renders MenuButton if pathname is "/"', () => {
    const wrapper = wrap({ ...props })
    wrapper.find('#menu-button').length

    expect(wrapper.find('#menu-button').length).toBe(1)
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

    actions.goBack()

    expect(mockDispatch.mock.calls.length).toBe(1)
  })
})
