// @flow

import { connect } from 'react-redux'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'

import MainPage from './MainPage'

import { getOperatorsList, getIsLoading } from 'src/store/selectors'
import { operatorsListReadRequest } from 'src/store/actions'
import type { State, Theme } from 'src/types'

export const styles = (theme: Theme) => ({
  spinner: {
    marginTop: theme.spacing.unit * 10
  }
})

export const mapState = (state: State) => ({
  list: getOperatorsList(state),
  isLoading: getIsLoading(state)
})

export const bindActions = (dispatch: Function) => ({
  fetchList: () => dispatch(operatorsListReadRequest())
})

export default compose(
  withStyles(styles),
  connect(
    mapState,
    bindActions
  )
)(MainPage)
