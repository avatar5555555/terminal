// @flow
import React, { Fragment } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuIcon from '@material-ui/icons/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'

import type { MenuButtonProps } from 'src/types'

const MenuButton = ({ handleOpen, handleClose, anchor }: MenuButtonProps) => (
  <Fragment>
    <IconButton color="inherit" aria-label="Menu" onClick={handleOpen}>
      <MenuIcon />
    </IconButton>
    <Menu
      id="simple-menu"
      anchorEl={anchor}
      open={Boolean(anchor)}
      onClose={handleClose}
    >
      <MenuItem id="menu-item" onClick={handleClose}>
        Logout
      </MenuItem>
    </Menu>
  </Fragment>
)

export default MenuButton
