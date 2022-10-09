import React from 'react'
import { Avatar, Divider, Typography, ListItem, ListItemAvatar, ListItemText, List, Button } from '@mui/material'
function LatestConversation() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="user1.jpg" />
            </ListItemAvatar>
            <ListItemText
            primary="Brunch this weekend?"
            secondary={
                <React.Fragment>
                <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                >
                    Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
            }
            />
        </ListItem>
        <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Travis Howard" src="user2.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Summer BBQ"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                }
                />
            </ListItem>
        <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="user3.jpg" />
                </ListItemAvatar>
                <ListItemText
                primary="Oui Oui"
                secondary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                    </React.Fragment>
                }
                />
            </ListItem>
            <Button size="small">Show More</Button>
    </List>
)}

export default LatestConversation