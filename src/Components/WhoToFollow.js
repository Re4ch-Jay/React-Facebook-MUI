import { Card, CardContent, Typography, ListItem, ListItemAvatar, ListItemText, Button, CardActions, Avatar } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

function WhoToFollow() {
  return (
      <Card sx={{ minWidth: 275, margin: "20px 0", borderRadius: 3}} elevation={0}>
        <CardContent>
          <Typography fontWeight={500} variant="h6" gutterBottom>
            Who to follow
          </Typography>
        <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[500] }} src="user3.jpg" />              
            </ListItemAvatar>
            <ListItemText primary="Angelica" secondary="@angelica" />
            <Button variant="outlined" size="small">
              Follow
            </Button>
        </ListItem>
        <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[500] }} src="user2.jpg" />              
            </ListItemAvatar>
            <ListItemText primary="David" secondary="@david07" />
            <Button variant="outlined" size="small">
              Follow
            </Button>
        </ListItem>
        </CardContent>
        <CardActions>
          <Button size="small">Show More</Button>
        </CardActions>
      </Card>
  )
}

export default WhoToFollow