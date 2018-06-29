// @flow

import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import MenuIcon from '@material-ui/icons/Menu'
import { FormattedMessage } from 'react-intl'

import type { BarProps } from 'src/types'

const Bar = ({ classes, pathname, goBack }: BarProps) => {
  const isRoot = pathname === '/'

  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar>
        {isRoot ? (
          <IconButton id="menu-button" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
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

export default Bar
