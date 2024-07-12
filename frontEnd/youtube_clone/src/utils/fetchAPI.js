
import axios from 'axios';

const Base_URL='https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'x-rapidapi-key': '3e2971fde5msh6d4ed6eefddbec7p105e9ajsn8b52e5dfa976',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async (url)=>{
    const {data}=await axios.get(`${Base_URL}/${url}`, options)
    return data;
}


