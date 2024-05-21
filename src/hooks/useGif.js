// import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';
// import Spinner from '../components/Spinner'
export const useGif = (tag) => {

    const[gif , setGif] = useState('true');
  
    const[loader, setLoader] = useState('false');
    
    // cost API_KEY = process.env.GIPHY_API_KEY;
    // const url = `https://api.giphy.com/v1/gifs/random?api_key=UCJfb7Iy2TEFrpbB4FeJMIxWyW4pFO67&tag=&rating=g `;
    async function fetchData(tag){
      
      try{
        setLoader(true);
        // const url  = ;
        const {data} = await axios.get(tag? `https://api.giphy.com/v1/stickers/random?api_key=UCJfb7Iy2TEFrpbB4FeJMIxWyW4pFO67&tag=&rating=g` : `https://api.giphy.com/v1/gifs/random?api_key=UCJfb7Iy2TEFrpbB4FeJMIxWyW4pFO67&tag=${tag}&rating=g `);
        const output = data.data.images.downsized_large.url;
        // console.log(data);
        setGif(output);
        console.log(tag);
        setLoader(false);
      } catch(error){
        console.error('Error fetching the Gif', error);
      }
  
    }
  
    useEffect( () => {
      fetchData();
    } , [])

    return [gif , loader, fetchData];
}
