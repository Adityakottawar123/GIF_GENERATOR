import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Spinner from './Spinner'
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag,setTag] = useState('')
  // const [gif, setGif] = useState('');
  // const [loader,setLoader] = useState(false)
  
  // async function fetchData(){
  //   setLoader(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource)
  //   setGif(imageSource)
  //   setLoader(false)
  // }

  // useEffect ( () =>{
  //   fetchData();
  // },[])

  // function clcikHandler(){
  //   fetchData()
  // }

  const {gif,loader,fetchData} = useGif();

  // function changeHandler(event){
  //   setTag(event.target.value)
  // }

  return (
    <div className='w-1/2  bg-blue-500 border border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>

      <h1 className=' mt-15px text-2xl underline uppercase font-semibold'>Random {tag} Gif</h1>

      {
        loader ? (<Spinner/>) : (<img src={gif} width="450"></img>)
      }
      
      <input
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />
      <button className='w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]'
      onClick={() => fetchData(tag)}>

        Generate

      </button>

    </div>
  )
}

export default Tag;