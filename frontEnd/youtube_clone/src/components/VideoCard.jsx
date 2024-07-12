import React from 'react'
import {  Card, Typography, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoChannelTitle,demoChannelUrl,demoVideoTitle,demoVideoUrl } from '../utils/constants';

function VideoCard({video: {id:{videoId}, snippet}}) {
  return (
    <Card sx={{width:{sx:'100%', sm:'358px', md:'320px' }, boxShadow:'none', borderRadius:'0px'} }  >
      <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
         <CardMedia 
            image={snippet?.thumbnails?.high?.url}
            alt={snippet?.title}
            sx={{width:{sx:'100%', sm:'358px', md:'320px' }, height:180}}
         />
      </Link>
      <CardContent sx={{backgroundColor:'#1e1e1e', height:'106px'}}>
      <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
      <Typography variant='subtitle1' fontWeight='bold' color='#FFF'>
        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
      </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/video/${snippet?.channelId}` : demoChannelUrl}>
      <Typography variant='subtitle2' color='gray'>
        {snippet?.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
      </Typography>
      </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard