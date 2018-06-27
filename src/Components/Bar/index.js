// @flow
import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { withStyles } from '@material-ui/core/styles'
import { FormattedMessage } from 'react-intl'
import { withRouter, Link } from 'react-router-dom'
import { compose } from 'redux'

import MenuButton from '../MenuButton'

type Props = {
  classes: { root: string },
  location: { pathname: string }
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
    const { classes, location } = this.props
    const isRoot = location.pathname === '/'
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
            <IconButton
              component={Link}
              to="/"
              color="inherit"
              aria-label="Menu"
            >
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

export default compose(
  withRouter,
  withStyles(styles)
)(Bar)
