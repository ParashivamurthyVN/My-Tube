import React from 'react'
import {  Card, Typography, CardMedia, CardContent, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { demoProfilePicture} from '../utils/constants';

function ChanelCard({channel, marginTop }) {
  return (
    <Box sx={{display:'flex', borderRadius:'20px', boxShadow:'none', 
         alignItems:'center', width:{sx:'356px', md:'320px'}, 
         height:'326px',
         marginTop,
         justifyContent:'center'}}>
        <Link to={`/chanel/${channel?.id?.channelId}`}>
         <CardContent sx={{display:'flex', flexDirection:'column', 
         justifyContent:'center', textAlign:'center', color:'#fff'}}>
            <CardMedia 
                image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channel?.snippet?.title}
                sx={{borderRadius:'50%', mb:2, border:'2px solid #e3e3e3', 
                width:'180px', height:'180px'}}
            />
            <Typography variant='h6'>
            {channel?.snippet?.title}
            </Typography>
            {channel?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channel?.statistics?.subscriberCount).toLocaleString()} Subscribers
                </Typography>
            )}
         </CardContent>
        </Link>
    </Box>
  )
}

export default ChanelCard