import React from 'react';
import { useState, useEffect } from 'react';
import { Stack, Box, Typography } from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';
import { fetchAPI } from '../utils/fetchAPI';

const Feed = () => {

  const [categorySelected, setcategorySelected] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchAPI(`search?part=snippet&q=${categorySelected}`).then((data)=> setVideos(data.items));
  }, [categorySelected])

  return (
    <Stack sx={{flexDirection: {sx:"column", md:"row"}}}>
      <Box sx={{height: {sx:'auto', md:'92vh'}, borderRight:'1px solid #3d3d3d', px:{sx:0, md:2} }}>
      <SideBar 
      categorySelected={categorySelected} 
      setcategorySelected={setcategorySelected} />
        <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
          copyright 2024 MyTube
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto", height:'90vh', flex:'2'}}>
        <Typography  variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}}>
          {categorySelected} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>

    </Stack>
  )
}

export default Feed
