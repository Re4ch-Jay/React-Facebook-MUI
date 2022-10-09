import { Box } from '@mui/material'
import React from 'react'

import Post from './Post';
import WhatOnYourMind from './WhatOnYourMind';

function Feed() {
  return (
    <Box flex={4} p={2}> 
        <WhatOnYourMind/>
        {postList.map(post => (
           <div key={post.id}>
              <Post
              avatar={post.avatar}
              name={post.name}
              date={post.date}
              image={post.image}
              caption={post.caption}
              />
           </div>
        ))}
       
    </Box>
  )
}

export default Feed


const postList = [
  {
    id: 1,
    avatar: "user4.jpg",
    name: "Phat Panhareach",
    date: "September 14, 2022",
    image: "paella.jpg",
    caption: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    id: 2,
    avatar: "user1.jpg",
    name: "John",
    date: "September 14, 2022",
    image: "1.png",
    caption: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    id: 3,
    avatar: "user2.jpg",
    name: "David",
    date: "September 14, 2019",
    image: "2.png",
    caption: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    id: 4,
    avatar:"user3.jpg",
    name: "Rose",
    date: "September 14, 2021",
    image: "3.png",
    caption: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  },
  {
    id: 5,
    avatar: "user5.jpg",
    name: "Jill",
    date: "September 14, 2016",
    image: "4.png",
    caption: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
  }
]
