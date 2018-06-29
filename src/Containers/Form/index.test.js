import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Form from './Form'
import styles from './styles'

import { mapPropsToValues, bindActions, mapState, handleSubmit } from '.'

import { mountWithIntl } from 'src/testHelpers'
import fakeData from 'src/fakeData'

const props = {
  errors: { phone: 'invalidPhone', sum: 'required' },
  touched: { phone: false, sum: true },
  values: { phone: 'string', sum: 'string', operator: 'string' },
  handleChange: jest.fn(),
  handleBlur: jest.fn(),
  fetchList: jest.fn(),
  handleSubmit: jest.fn(),
  setFieldValue: jest.fn(),
  intl: { formatMessage: jest.fn() },
  list: [{ label: 'mts', value: 'mts' }],
  classes: {
    root: 'string',
    input: 'string',
    button: 'string',
    icon: 'string'
  }
}

const mockStore = configureStore()
const initialState = {
  list: [],
  isLoading: false
}

describe('Form with state', () => {
  const wrap = (props = {}, store = {}) =>
    shallow(<Form store={store} {...props} />)

  it('renders', () => {
    const store = mockStore(initialState)
    expect(wrap(props, store)).toMatchSnapshot()
  })

  it('calls fetchList on componentDidMount', () => {
    const store = mockStore(initialState)
    const wrapper = mountWithIntl(<Form store={store} {...props} />)

    expect(wrapper).toBeDefined()
    expect(props.fetchList).toBeCalled()
  })
})

describe('Form', () => {
  const wrap = (props = {}) => shallow(<Form {...props} />)

  it('renders spinner if data is loading', () => {
    const wrapper = wrap({ ...props, isLoading: true })

    expect(wrapper.dive().find('#spinner')).toBeDefined()
  })

  it('calls setFieldValue onSelect', () => {
    const wrapper = wrap(props)

    wrapper
      .dive()
      .find('#operator')
      .simulate('change', { target: { value: 'hello' } })

    expect(props.setFieldValue.mock.calls.length).toBe(1)
  })
})

describe('Form functions', () => {
  it('styles returns object', () => {
    const obj = styles({
      spacing: { unit: 5 },
      breakpoints: { down: jest.fn() }
    })

    expect(obj.root.margin).toBe(5)
  })

  it('mapPropsToValues return obj with fulfilled operator', () => {
    const name = 'mts'
    const obj = mapPropsToValues({ location: { state: { name } } })

    expect(obj.operator).toBe(name)
  })

  it('mapPropsToValues return obj with empty operator', () => {
    const obj = mapPropsToValues({ location: {} })

    expect(obj.operator).toBe('')
  })

  it('handleSubmit calls pay with values and pass it into', () => {
    const mockNf = jest.fn()
    const operator = 'mts'
    handleSubmit({ operator }, { props: { pay: mockNf } })

    expect(mockNf.mock.calls.length).toBe(1)
    expect(mockNf.mock.calls[0][0]).toEqual({ operator })
  })

  it('mapState returns prepared list of operators', () => {
    const mappedProps = mapState({ ...initialState, list: fakeData })

    expect(mappedProps.list[0]).toEqual({ label: 'mts', value: 'mts' })
  })

  it('bindActions takes dispatch and returns object with fn', () => {
    const mockDispatch = jest.fn()

    const actions = bindActions(mockDispatch)

    actions.fetchList()
    actions.pay()

    expect(mockDispatch.mock.calls.length).toBe(2)
  })
})
