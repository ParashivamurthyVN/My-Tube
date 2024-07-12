
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import {Search} from '@mui/icons-material';


const SearchBar = () => {

  const navigate=useNavigate();
  const [searchTerm, setsearchTerm]=useState('');

  const handleClick = (e)=>{
    e.preventDefault()

    if(searchTerm){
      navigate(`/search/${searchTerm}`);
     setsearchTerm('');
    }
  }

  return (
    <Paper component='form'
    onSubmit={handleClick}
    sx={{borderRadius:20, border:'1px solid #e3e3e3', pl:2, mr:{sm:5}, boxShadow:"none"}}>
    <input className='search-bar' placeholder='search...' onChange={(e)=>setsearchTerm(e.target.value)} value={searchTerm}/>
    <IconButton type='submit' sx={{color:'red', p:'10px'}}>
        <Search/>
    </IconButton>

    </Paper>
  )
}

export default SearchBar