import React from 'react'
import ModeNightIcon from '@mui/icons-material/ModeNight';
import { blue, deepOrange } from '@mui/material/colors';
import { Avatar, Switch, ListItem, ListItemAvatar } from '@mui/material'

function ListSidebar({menuComp, setMode, mode}) {
  return (
    <div>
        {menuComp.map(item => (
          <ListItem key={item.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[500] }}>
                {item.icon}
              </Avatar>
            </ListItemAvatar>
            {item.text}
          </ListItem>
        ))}    
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[500] }}>
              <ModeNightIcon />
            </Avatar>
          </ListItemAvatar>
          <Switch onChange={e => setMode(mode === 'dark' ? 'light' : 'dark')}/>
        </ListItem>
    </div>
  )
}

export default ListSidebar