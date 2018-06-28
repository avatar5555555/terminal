// @flow
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { withStyles } from '@material-ui/core/styles'
import { FormattedMessage } from 'react-intl'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

import MenuButton from '../MenuButton'

type Props = {
  classes: { root: string },
  pathname: string,
  back: Function
}

type State = {
  anchorEl: HTMLElement | null
}
const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit
  }
})

class Bar extends Component<Props, State> {
  state = {
    anchorEl: null
  }

  handleOpen = e => this.setState({ anchorEl: e.currentTarget })

  handleClose = () => this.setState({ anchorEl: null })

  render() {
    const { classes, pathname, back } = this.props
    const isRoot = pathname === '/'
    const { anchorEl } = this.state

    return (
      <AppBar position="static" color="default" className={classes.root}>
        <Toolbar>
          {isRoot ? (
            <MenuButton
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              handleOpen={this.handleOpen}
              handleClose={this.handleClose}
              anchor={anchorEl}
            />
          ) : (
            <IconButton color="inherit" aria-label="Menu" onClick={back}>
              <ArrowBack />
            </IconButton>
          )}

          <Typography variant="title" color="inherit">
            <FormattedMessage id="Title" />
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

const mapState = state => ({
  pathname: state.router.location.pathname
})

const bindActions = dispatch => ({
  back: () => dispatch(push('/'))
})

export default compose(
  connect(
    mapState,
    bindActions
  ),
  withStyles(styles)
)(Bar)
