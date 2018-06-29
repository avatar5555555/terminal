import { push } from 'connected-react-router'

import * as actions from './actions'
import reducer from './reducers'
import { getIsLoading, getOperatorsList } from './selectors'
import * as sagas from './sagas'

import { getDevTools } from '.'

import fakeData from 'src/fakeData'
import { call, put, fork } from 'redux-saga/effects'
import api from 'src/services/api'
import toast from 'src/services/toast'

describe('actions', () => {
  it('operatorsListReadSuccess returns object with passed data', () => {
    const data = 'data'
    const action = actions.operatorsListReadSuccess(data)

    expect(action.payload).toBe(data)
  })

  it('operatorsListReadFailure returns object with passed error', () => {
    const error = 'error'
    const action = actions.operatorsListReadFailure(error)

    expect(action.payload).toBe(error)
  })

  it('paymentSuccess returns object with type PAYMENT_SUCCESS', () => {
    const action = actions.paymentSuccess()

    expect(action.type).toBe(actions.PAYMENT_SUCCESS)
  })

  it('paymentFailure returns object with passed error', () => {
    const error = 'error'
    const action = actions.paymentFailure(error)

    expect(action.payload).toBe(error)
  })
})

describe('getDevtoolsEnhancer', () => {
  it('returns custom devToolsExtension if passed', () => {
    const mock = jest.fn()
    expect(getDevTools(mock)).toBe(mock)
  })

  it('returns default devToolsExtension not passed', () => {
    const enhancer = getDevTools()
    expect(enhancer).toBeInstanceOf(Function)

    expect(enhancer).toBeInstanceOf(Function)
  })
})

describe('reducer', () => {
  it('reducer returns updated state accordingly to OPERATORS_LIST_READ_REQUEST', () => {
    const state = reducer(null, actions.operatorsListReadRequest())

    expect(state.isLoading).toBeTruthy()
  })

  it('reducer returns updated state accordingly to OPERATORS_LIST_READ_SUCCESS', () => {
    const state = reducer(
      null,
      actions.operatorsListReadSuccess({ data: 'data' })
    )

    expect(state.isLoading).toBeFalsy()
  })

  it('reducer returns updated state accordingly to OPERATORS_LIST_READ_FAILURE', () => {
    const state = reducer(null, actions.operatorsListReadFailure())

    expect(state.isLoading).toBeFalsy()
  })
})

describe('sagas', () => {
  it('operatorsListRequest and operatorsListReadSuccess', () => {
    const gen = sagas.operatorsListRequest()

    expect(gen.next().value).toEqual(call([api, api.getOperatorsList]))

    expect(gen.next(fakeData).value).toEqual(
      put(actions.operatorsListReadSuccess(fakeData))
    )
  })

  it('operatorsListRequest and operatorsListReadFailure', () => {
    const gen = sagas.operatorsListRequest()

    expect(gen.next().value).toEqual(call([api, api.getOperatorsList]))

    expect(gen.throw('error').value).toEqual(
      put(actions.operatorsListReadFailure('error'))
    )
  })

  it('paymentRequest and paymentSuccess', () => {
    const gen = sagas.paymentRequest({ payload: 'payload' })

    expect(gen.next().value).toEqual(call([api, api.postPayment], 'payload'))

    expect(gen.next().value).toEqual(put(actions.paymentSuccess()))

    expect(gen.next().value).toEqual(
      call([toast, toast.success], 'Successes.payment')
    )

    expect(gen.next().value).toEqual(put(push('/')))
  })

  it('paymentRequest and paymentSuccess', () => {
    const gen = sagas.paymentRequest({ payload: 'payload' })

    gen.next()
    expect(gen.throw('error').value).toEqual(
      put(actions.paymentFailure('error'))
    )

    expect(gen.next().value).toEqual(
      call([toast, toast.error], 'Errors.serverError')
    )
  })

  it('watchOperatorsListRequest', () => {
    const gen = sagas.watchOperatorsListRequest()

    expect(gen.next().value).toEqual(fork(sagas.operatorsListRequest))
  })

  it('watchPaymentRequest', () => {
    const gen = sagas.watchPaymentRequest({ payload: 'payload' })

    expect(gen.next().value).toEqual(
      fork(sagas.paymentRequest, { payload: 'payload' })
    )
  })
})

describe('selectors', () => {
  it('getOperatorsList returns initial state if state is not passed', () => {
    const list = getOperatorsList()

    expect(list).toBeInstanceOf(Array)
  })

  it('getIsLoading returns initial state if state is not passed', () => {
    const isLoading = getIsLoading()

    expect(isLoading).toBeFalsy()
  })
})
