// @flow

import * as yup from 'yup'
import { withFormik } from 'formik'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { withStyles } from '@material-ui/core/styles'

import Form from './Form'
import styles from './styles'

import { isPhone } from 'src/services/validation'
import { getOperatorsList, getIsLoading } from 'src/store/selectors'
import { operatorsListReadRequest, paymentRequest } from 'src/store/actions'
import type { State, FormikProps, FormikBag, FormValues } from 'src/types'

export const mapPropsToValues = ({ location }: FormikProps) => {
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
    .test('check if phone valid', 'invalidPhone', isPhone)
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
    .string()
    .min(3, 'invalidCvv')
    .required('required')
})

export const handleSubmit = (values: FormValues, formikBag: FormikBag) => {
  const { pay } = formikBag.props

  pay(values)
}

export const mapState = (state: State) => {
  const operators = getOperatorsList(state)
  const selectOptions = operators.map(item => ({
    label: item.name,
    value: item.name
  }))

  return {
    list: selectOptions,
    isLoading: getIsLoading(state)
  }
}

export const bindActions = (dispatch: Function) => ({
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
  }),
  withStyles(styles)
)(Form)
