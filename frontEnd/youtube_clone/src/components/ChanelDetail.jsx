import React from 'react'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import Videos from './Videos';
import ChanelCard from './ChanelCard';
import { useParams } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';

function ChanelDetail() {

  const {id} =useParams();
  
  const [chanelDetails, setchanelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchAPI(`channels?part=snippet&id=${id}`).then((data)=> setchanelDetails(data?.items[0]));
  }, [id])

  useEffect(()=>{
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
  }, [id])

 
  return (
    <Box display='flex' flexDirection='column' alignItems='center' minHeight='95vh' >
      <div style={{background:' linear-gradient(90deg, rgba(228,46,65,1) 0%, rgba(163,36,60,0.9810049019607843) 38%, rgba(77,19,28,1) 100%)', height:"250px", width:'100%'} }/>
      <ChanelCard channel={chanelDetails} marginTop='-110px'/>
      <div className='VideoDiv' >
      <Videos videos={videos}/>
      </div>
     
    </Box>
  )
}

export default ChanelDetail
