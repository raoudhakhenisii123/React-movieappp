import React from 'react'
import Moviecard from './Moviecard'


const MovieList=({movies = [], onaddmovie = () => {}})=>(

<div className='movie-List'>
 
 {
    movies.map(el => <Moviecard key={el.id} movie={el}/>)
 }
<button className='new-movie-card' onClick={()  => {onaddmovie({ id:Math.random(),
    title:prompt('enter your movie'),
     image: prompt('enter your address movie'),
     rating:Number(prompt('movie rating')) ,
     year:Number(prompt('movie year'))})}}> Add new movie </button>
</div>
)

export default MovieList