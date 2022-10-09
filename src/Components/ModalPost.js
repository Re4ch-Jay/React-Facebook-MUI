import React from 'react'
import { Button, Avatar, Modal, TextField, Typography, List, ListItem, ListItemAvatar, ListItemText, ButtonGroup } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import { blue, green, yellow } from '@mui/material/colors';
import { Box, Stack } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    width: 400,
    height: 280,
    
  };


function ModalPost({open, setOpen}) {
  
  return (
    <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style} bgcolor={'background.default'} color={'text.primary'}>
            <Typography textAlign="center">
                Create Post
            </Typography>
            <List>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[500] }} src="user4.jpg" />
                    </ListItemAvatar>  
                    <ListItemText primary="Phat Panhareach"/>
                </ListItem>
            </List>
            <TextField
                    id="standard-multiline-static"
                    label="What is on your mind?"
                    variant="standard"
                    fullWidth 
                    multiline
                    rows={3}
                    />
            <Stack direction="row" spacing={3} sx={{marginTop: 1}}>
                <AddPhotoAlternateIcon sx={{color: 'red'}} />
                <EmojiEmotionsIcon sx={{color: yellow[600]}}/>
                <VideoCameraBackIcon sx={{color: green[600]}} />
            </Stack>
            <Stack direction="row" spacing={2} sx={{marginTop: 1}}>
                <ButtonGroup fullWidth>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                        Cancel
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Post
                    </Button>
                </ButtonGroup>
                
            </Stack>
        </Box>
    </Modal>
  )
}

export default ModalPost