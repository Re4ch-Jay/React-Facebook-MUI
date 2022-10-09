import { Menu, MenuItem } from '@mui/material'
import React from 'react'

function MenuComp({setOpenProfile, openProfile}) {
  return (
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e => setOpenProfile(false)}
        open={openProfile}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
        }}
    >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
    </Menu>
  )
}

export default MenuComp