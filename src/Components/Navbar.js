import styled from '@emotion/styled'
import { AppBar, Toolbar, Typography, Box, InputBase, Badge, Avatar } from '@mui/material'
import React, {useState} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import { Notifications } from '@mui/icons-material';
import MenuComp from './MenuComp';
const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
})

const Search = styled("box")(({ theme } )=> ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: 5,
  width: "40%",
}))
const Icons = styled(Box)(({ theme })=> ({
  display: 'flex',
  gap: 20,
  alignItems: "center"
}))

function Navbar() {
  const [openProfile, setOpenProfile] = useState(false)

  return (
    <AppBar position='sticky' elevation={0}>
      <StyledToolbar>
        <Typography variant='h5' sx={{
          display: {
            xs: "none",
            sm: 'block'
          }
        }}>Facebook</Typography>
        <FacebookIcon sx={{display: {xs: "block", sm: 'none'}, fontSize: 40 }}/>
         <Search >
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={9} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{width: 30, height: 30}} onClick={e => setOpenProfile(true)} src="user4.jpg"/>
  	    </Icons>
      </StyledToolbar>
      <MenuComp setOpenProfile={setOpenProfile} openProfile={openProfile}/>
    </AppBar>
  )
}

export default Navbar