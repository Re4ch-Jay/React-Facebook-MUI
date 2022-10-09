import { Avatar, AvatarGroup, Box, Button, Divider, CardContent, Typography, CardActions, Card, ListItem, ListItemAvatar, ListItemText, List } from '@mui/material'
import React from 'react'
import LatestConversation from './LatestConversation'
import OnlineFriends from './OnlineFriends'
import WhoToFollow from './WhoToFollow'

function Rightbar() {
  return (
    <Box flex={4} p={2} sx={{
      display: {
        xs: "none",
        sm: "block"
      }
    }}
    >
     <Box position="fixed">
        <Typography variant="h6" fontWeight={200}>Online Friends</Typography>
        <OnlineFriends/>
        <WhoToFollow/>
        <Typography variant="h6" fontWeight={200}>Latest Conversation</Typography>
        <LatestConversation/>
     </Box>

     
    </Box>
  )
}

export default Rightbar