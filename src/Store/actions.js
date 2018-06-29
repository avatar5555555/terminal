// constants and action creators for operators list
export const OPERATORS_LIST_READ_REQUEST = 'OPERATORS_LIST_READ_REQUEST'
export const OPERATORS_LIST_READ_SUCCESS = 'OPERATORS_LIST_READ_SUCCESS'
export const OPERATORS_LIST_READ_FAILURE = 'OPERATORS_LIST_READ_FAILURE'

export const operatorsListReadRequest = () => ({
  type: OPERATORS_LIST_READ_REQUEST
})

export const operatorsListReadSuccess = data => ({
  type: OPERATORS_LIST_READ_SUCCESS,
  payload: data
})

export const operatorsListReadFailure = error => ({
  type: OPERATORS_LIST_READ_FAILURE,
  payload: error
})

// payment constants and action creators
export const PAYMENT_REQUEST = 'PAYMENT_REQUEST'
export const PAYMENT_SUCCESS = 'PAYMENT_SUCCESS'
export const PAYMENT_FAILURE = 'PAYMENT_FAILURE'

export const paymentRequest = data => ({
  type: PAYMENT_REQUEST,
  payload: data
})

export const paymentSuccess = () => ({
  type: PAYMENT_SUCCESS
})

export const paymentFailure = error => ({
  type: PAYMENT_FAILURE,
  payload: error
})
