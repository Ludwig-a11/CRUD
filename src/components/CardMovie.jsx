import React from 'react'
import axios from 'axios'

const CardMovie = ({movie,getAllMovies,URL,updateMovie}) => {

    const deleteMovie = id => {
        axios.delete(`${URL}${id}/`)
        .then(res => {
            console.log(res.data)
            getAllMovies()
        })
        .catch(err => console.log(err))
    }

    
   
  return (
    <article className='card'>
        <h2>{`#${movie.id} ${movie.name}`}</h2>
        <ul>
            <li>Duration: {movie.duration}</li>
            <li>Genere: {movie.genere}</li>
            <li>Realise Date: {movie.release_date}</li>
        </ul>
        <button className='trash-btn' onClick={() => deleteMovie(movie.id)}><i class="fa-solid fa-trash"></i></button>
        <button className='update-btn' onClick={() => updateMovie(movie.id)}><i class="fa-solid fa-pen"></i></button>
    </article>
  )
}

export default CardMovie