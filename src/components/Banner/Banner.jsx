import './Banner.css';
import axios from 'axios'
import {API_KEY, imageUrl} from '../../constants/constants'

import React, { useEffect, useState } from 'react'

function Banner() {
  const [movie, setMovie] = useState()
  
  useEffect( () => {
    const getData = async () => {
      try{
        const resp = await axios.get('https://api.themoviedb.org/3/movie/11?api_key=61169c6f28859e94729d211960eaef62')
        console.log(resp.data.backdrop_path)
        setMovie(resp.data)
        
      }catch(error){
        console.log(error)

      }
    }
    getData()
  },[])
  
  
  return (
    <div>
        <div className='Banner' style={{backgroundImage: movie ? `url(${imageUrl+movie.backdrop_path})` : ''}}>
            <div className='Content'>
                <h1 className='Title'>{movie ? movie.title : ""}</h1>
                <div className='Banner-Button'>
                    <button className="Button">Play</button>
                    <button className="Button">My list</button>
                </div>
                <h1 className='Description'>{movie ? movie.overview : ""}</h1>
            </div>
            <div className="fade_button"></div>
        </div>
    </div>
  )
}

export default Banner
