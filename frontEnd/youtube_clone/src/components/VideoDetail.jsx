import React from 'react'
import ReactPlayer from 'react-player'
import {  Typography, Stack, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Videos from './Videos';
import { fetchAPI } from '../utils/fetchAPI';

const VideoDetail = () => {

  const {id}=useParams();
  const [videos, setVideos] = useState([]);
  const [VideoDetail, setVideoDetail] = useState(null);


  useEffect(()=>{
    fetchAPI(`videos?part=snippet,statistics&id=${id}`).then((data)=> setVideoDetail(data.items[0]));

     fetchAPI(`search?part=snippet&relaedToVideoId=${id}&type=video`).then((data)=> setVideos(data.items));
  }, [id])

  if(!VideoDetail?.snippet) return 'Loading....'

   const {snippet:{title, channelId, channelTitle }, statistics:{viewCount, likeCount}}= VideoDetail

  return (
   <Box minHeight='95vh'>
    <Stack direction={{sx:'column', md:'row'}} >
      <Box flex={1}>
        <Box sx={{position:'sticky', top:'86px', width:'100%'}}>
         <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className='react-player'  controls />
         <Typography variant='h5' color='#fff' fontWeight='bold' p={2} mb='-25px'>
           {title}
         </Typography>
         <Stack direction='row' justifyContent='space-between' sx={{color:'#fff'}} px={1} py={2} >
           <Link to={`/chanel/${channelId}`}>
            <Typography variant={{sm:'subtitle1', md:'h6' }} color='grey' >{channelTitle} </Typography>
           </Link>
           <Stack direction='row' gap='20px' alignContent='center' >
            <Typography variant='body1' sx={{opacity:'0.7'}}>{parseInt(viewCount).toLocaleString()} views</Typography>
            <Typography variant='body1' sx={{opacity:'0.7'}}>{parseInt(likeCount).toLocaleString()} likes</Typography>
           </Stack>
         </Stack>
        </Box>
      </Box>
      <Box px={2} py={{sx:2, md:1}} justifyContent='center' alignItems='center'>
      <Videos videos={videos} direction='column' /> 
      </Box>
    </Stack>
   </Box>
  )
}

export default VideoDetail

