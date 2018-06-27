// @flow

import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { compose } from 'redux'
import { withStyles } from '@material-ui/core/styles'

import { getOperatorsList, getIsLoading } from 'src/store/selectors'
import { operatorsListReadRequest } from 'src/store/actions'
import OperatorCard from 'src/Components/OperatorCard'

type Item = {
  src: string,
  name: string
}

type Props = {
  fetchList: Function,
  list: Array<Item>,
  isLoading: boolean,
  classes: { spinner: string }
}

const styles = theme => ({
  spinner: {
    marginTop: theme.spacing.unit * 10
  }
})

class MainPage extends Component<Props> {
  componentDidMount() {
    this.props.fetchList()
  }

  render() {
    const { list, isLoading, classes } = this.props

    return (
      <Grid container spacing={16} alignItems="center" direction="column">
        {isLoading ? (
          <CircularProgress size={70} className={classes.spinner} />
        ) : (
          list.map(item => <OperatorCard key={item.name} {...item} />)
        )}
      </Grid>
    )
  }
}

const mapState = state => ({
  list: getOperatorsList(state),
  isLoading: getIsLoading(state)
})

const bindActions = dispatch => ({
  fetchList: () => dispatch(operatorsListReadRequest())
})

export default compose(
  withStyles(styles),
  connect(
    mapState,
    bindActions
  )
)(MainPage)
