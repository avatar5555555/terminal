import React from 'react'
import { shallow } from 'enzyme'

import MainPage from './MainPage'

import { styles, mapState, bindActions } from '.'

import fakeData from 'src/fakeData'

const props = {
  fetchList: jest.fn(),
  list: fakeData,
  isLoading: false,
  classes: { spinner: 'string' }
}

describe('MainPage', () => {
  const wrap = (props = {}) => shallow(<MainPage {...props} />)
  it('renders', () => expect(wrap(props)).toMatchSnapshot())

  it('renders spinner if data is loading', () => {
    const wrapper = wrap({ ...props, isLoading: true })
    const spinner = wrapper.dive().find('#spinner')

    expect(spinner).toBeDefined()
  })
})

describe('MainPage functions', () => {
  it('styles return object with where unit multiplied at 10', () => {
    const obj = styles({ spacing: { unit: 5 } })

    expect(obj.spinner.marginTop).toBe(50)
  })

  it('bindActions return obj with fn', () => {
    const mockDispatch = jest.fn()
    const actions = bindActions(mockDispatch)
    actions.fetchList()

    expect(mockDispatch.mock.calls.length).toBe(1)
  })

  it('mapState return new object', () => {
    const mappedProps = mapState({ list: fakeData, isLoading: false })

    expect(mappedProps.list).toEqual(fakeData)
  })
})
