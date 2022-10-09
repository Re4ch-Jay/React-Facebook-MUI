import { Button, Avatar, Card, CardActions, CardContent, Divider, IconButton, Modal, TextField, Typography, List, ListItem, ListItemAvatar, ListItemText, ButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { blue, green, yellow } from '@mui/material/colors';
import { Box, Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import ModalPost from './ModalPost';


function WhatOnYourMind() {
    const [open, setOpen] = useState(false)

  return (
    <Card>
        <CardContent>
            <Button onClick={() => setOpen(true)}>
                What's on your mind, Reach?....
            </Button>
            <ModalPost open={open} setOpen={setOpen} />
            <Divider/>
            <CardActions disableSpacing sx={{justifyContent: "space-between"}}>
                <IconButton aria-label="post photo">
                    <AddPhotoAlternateIcon sx={{color: 'red'}} />
                    <Typography fontSize={12}>Photo/Video</Typography>
                </IconButton>
                <IconButton aria-label="feeling">
                    <EmojiEmotionsIcon sx={{color: yellow[600]}}/>
                    <Typography fontSize={12}>Feeling/Activity</Typography>
                </IconButton>
                <IconButton aria-label="live">
                    <VideoCameraBackIcon sx={{color: green[600]}} />
                    <Typography fontSize={12}>Live Video</Typography>
                </IconButton>
            </CardActions>
        </CardContent>
    </Card>
  )
}

export default WhatOnYourMind