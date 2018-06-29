// @flow

import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import { FormattedMessage } from 'react-intl'

import MenuButton from '../MenuButton'

import type { BarProps } from 'src/types'

type State = {
  anchorEl: HTMLElement | null
}

class Bar extends Component<BarProps, State> {
  state = {
    anchorEl: null
  }

  handleOpen = (e: { currentTarget: HTMLElement }) =>
    this.setState({ anchorEl: e.currentTarget })

  handleClose = () => this.setState({ anchorEl: null })

  render() {
    const { classes, pathname, goBack } = this.props
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
              id="menu-button"
            />
          ) : (
            <IconButton
              id="back-button"
              color="inherit"
              aria-label="Menu"
              onClick={goBack}
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

export default Bar
