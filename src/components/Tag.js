import React from 'react'
import { useState } from 'react';
// import axios from 'axios';
import { Spinner } from './Spinner';
import { useGif } from '../hooks/useGif';

// const API_KEY = process.env.GIPHY_API_KEY;
// const url = API_KEY;
export const Tag = () => {
  // const[gif , setGif] = useState('true');
  
  // const[loader, setLoader] = useState('false');

  const[tag, setTag] = useState('car');

  // async function fetchData(){
    
  //   try{
  //     setLoader(true);
  //     const url  = `https://api.giphy.com/v1/gifs/random?api_key=UCJfb7Iy2TEFrpbB4FeJMIxWyW4pFO67&tag=${tag}&rating=g `;
  //     const {data} = await axios.get(url);
  //     const output = data.data.images.downsized_large.url;
  //     // console.log(data);
  //     setGif(output);
  //     setLoader(false);
  //   } catch(error){
  //     console.error('Error fetching the Gif', error);
  //   }

  // }

  const [gif , loader , fetchData] = useGif(tag);

  function changeHandler (event){
    setTag(event.target.value);
  }

  // useEffect( () => {
  //   fetchData();
  // } , [])

  function clickHandler(){
    fetchData(); 
  }

  
  return (
    <div className='w-8/12  border border-black bg-blue-400 p-4 mt-4 mb-3 rounded-md  flex flex-col items-center overflow-hidden '>
        <h2 className='text-center py-2 text-2xl font-bold ' >Tag {tag} Gif</h2>
        
        {
          loader ? (<Spinner/>):(<img src={gif} alt='altrnate' width={450}  className=' mb-2 '/>)
        }
        
        <input className='w-10/12 bg-white border-black rounded-md mb-2 py-1 text-center' placeholder='Enter to Search'  onChange={changeHandler} />
        <button onClick={clickHandler} className='w-10/12 bg-white opacity-60 rounded-md py-1 text-xl hover:shadow-lg mb-6 '>
          Generate 
        </button>
    </div>
  )
}
