import * as actions from './actions'

import { call, fork, takeEvery, put } from 'redux-saga/effects'
import api from 'src/services/api'

const operatorsListRequest = function*() {
  try {
    const data = yield call([api, api.getOperatorsList])
    yield put(actions.operatorsListReadSuccess(data))
  } catch (error) {
    yield put(actions.operatorsListReadFailure(error))
  }
}
const paymentRequest = function*({ payload }) {
  try {
    yield call([api, api.postPayment], payload)
    yield put(actions.paymentSuccess())
  } catch (error) {
    yield put(actions.paymentFailure(error))
  }
}

const watchOperatorsListRequest = function*() {
  yield fork(operatorsListRequest)
}
const watchPaymentRequest = function*({ payload }) {
  yield fork(paymentRequest, { payload })
}

const runWatchers = function*() {
  yield takeEvery(
    actions.OPERATORS_LIST_READ_REQUEST,
    watchOperatorsListRequest
  )

  yield takeEvery(actions.PAYMENT_REQUEST, watchPaymentRequest)
}

export default runWatchers
