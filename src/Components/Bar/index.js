// @flow

import { withStyles } from '@material-ui/core/styles'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import Bar from './Bar'

import type { Theme, State } from 'src/types'

export const styles = (theme: Theme) => ({
  root: {
    marginBottom: theme.spacing.unit
  }
})

const mapState = (state: State) => ({
  pathname: state.router.location.pathname
})

export const bindActions = (dispatch: Function) => ({
  goBack: () => dispatch(push('/'))
})

export default compose(
  connect(
    mapState,
    bindActions
  ),
  withStyles(styles)
)(Bar)
