import { Avatar, AvatarGroup } from '@mui/material'
import React from 'react'

function OnlineFriends() {
  return (
    <AvatarGroup max={6} total={24}>
        <Avatar alt="Remy Sharp" src="user1.jpg" />
        <Avatar alt="Travis Howard" src="user2.jpg" />
        <Avatar alt="Agnes Walker" src="user3.jpg" />
        <Avatar alt="Remy Sharp" src="user1.jpg" />
        <Avatar alt="Travis Howard" src="user2.jpg" />
        <Avatar alt="Agnes Walker" src="user3.jpg" />
    </AvatarGroup>
  )
}

export default OnlineFriends