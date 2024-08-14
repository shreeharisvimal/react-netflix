import React, { useEffect,useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './RowPost.css'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(props.url).
    then((Response)=>{
      console.log(Response.data.results)
      setMovies(Response.data.results)
    }).catch(err=>{
      alert('Network error')
    })

  }, [])
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          { movies.map((movie)=>
            <div className='inside'>
              <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+movie.backdrop_path}`} alt="poster" />
              <h2 className='textOverlay'>{props.isSmall ? movie.title : movie.original_name}</h2>

            </div>
              
              
          )} 
        </div>
    </div>
  )
}

export default RowPost
