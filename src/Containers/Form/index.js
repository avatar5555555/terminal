// @flow
import * as yup from 'yup'
import { withFormik } from 'formik'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'

import Form from './Form'

import { isPhone } from 'src/services/validation'
import { getOperatorsList, getIsLoading } from 'src/store/selectors'
import { operatorsListReadRequest, paymentRequest } from 'src/store/actions'

const mapPropsToValues = ({ location }) => {
  const { state } = location
  return {
    sum: '',
    phone: '',
    operator: state ? state.name : '',
    card: '',
    cvv: ''
  }
}

const validationSchema = yup.object().shape({
  phone: yup
    .string()
    .ensure()
    .test('check if phone valid', 'invalidPhone', value => isPhone(value))
    .required('required'),
  sum: yup
    .number()
    .min(1, 'minSum')
    .max(1000, 'maxSum')
    .required('required'),
  card: yup
    .number()
    .required('required')
    .min(12, 'invalidCard'),
  cvv: yup
    .number()
    .required('required')
    .min(3, 'invalidCvv')
})

const handleSubmit = (values, formikBag) => {
  const { pay } = formikBag.props

  pay(values)
}

const mapState = state => {
  const operators = getOperatorsList(state)
  const selectOptions = operators.map(item => ({
    label: item.name,
    value: item.name
  }))

  return {
    list: selectOptions,
    getIsLoading
  }
}

const bindActions = dispatch => ({
  fetchList: () => dispatch(operatorsListReadRequest()),
  pay: () => dispatch(paymentRequest())
})

export default compose(
  injectIntl,
  connect(
    mapState,
    bindActions
  ),
  withFormik({
    mapPropsToValues,
    handleSubmit,
    validationSchema,
    validateOnBlur: false
  })
)(Form)
