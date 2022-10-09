import { Box, List, ListItemText } from '@mui/material'
import React from 'react'
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BadgeIcon from '@mui/icons-material/Badge';
import ListSidebar from './ListSidebar';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import GroupIcon from '@mui/icons-material/Group';
import BrowseGalleryIcon from '@mui/icons-material/BrowseGallery';
function Sidebar({setMode, mode}) {
  return (  
    <Box flex={3} p={2} sx={{
      display: {
        xs: "none",
        sm: "block"
      }
    }}
    >
      <Box position='fixed'>
        <List sx={{ width: '100%', maxWidth: 360}} >
          <ListSidebar menuComp={menuComp} setMode={setMode} mode={mode}/>
        </List>
      </Box>
    </Box>
  )
}

export default Sidebar


const menuComp = [
  {
    id: 1,
    icon: <ImageIcon/>,
    text:  <ListItemText primary="Photos" secondary="Jan 9, 2022" />
  },
  {
    id: 2,
    icon: <WorkIcon />,
    text:  <ListItemText primary="Work" secondary="Software Developer" />
  },
  {
    id: 3,
    icon: <BeachAccessIcon />,
    text:  <ListItemText primary="Trip" secondary="July 29, 2021" />
  },
  {
    id: 4,
    icon: <AccountBalanceIcon />,
    text:  <ListItemText primary="Bank" secondary="" />
  },
  {
    id: 5,
    icon: <BadgeIcon />,
    text:  <ListItemText primary="Shopping" secondary="Aeon Mall" />
  },
  {
    id: 6,
    icon: <SportsEsportsIcon />,
    text:  <ListItemText primary="Gaming" secondary="Free Time" />
  },
  {
    id: 7,
    icon: <GroupIcon />,
    text:  <ListItemText primary="Groups" secondary="Oct 9, 2022" />
  },
  {
    id: 8,
    icon: <BrowseGalleryIcon />,
    text:  <ListItemText primary="Gallery" secondary="300+ Photos" />
  }
]
  