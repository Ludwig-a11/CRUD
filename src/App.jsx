import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardMovie from './components/CardMovie'
import Form from './components/Form'

const URL = 'https://movies-crud-academlo.herokuapp.com/movies/'


function App() {
  const [movies, setMovies] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  
  const getAllMovies = () => {
    axios.get(URL)
    .then(res => setMovies(res.data))
    .catch(err => console.log(err))
    
  }
 useEffect(() => {
  getAllMovies()
 },[])
 
 //console.log(movies);
 const createMovie = newMovie => {

      //recibe dos parametros el url y la data necesaria ára crear el registro 
    axios.post(URL,newMovie)
    .then(res => {console.log(res.data)
        getAllMovies()
      })
    .catch(err => console.log(err))
  
 }

 

  const updateMovie = id => {

  const updateMovie = {
      name:'interestellar',
      duration:'120 minutes'
  }

  axios.patch(`${URL}${id}/`,updateMovie)
  .then(res => {
    console.log(res.data)
    getAllMovies() 
  })
  .catch(err => console.log(err))
  
}

const showForm = () => setIsShowForm(!isShowForm)

 //A se le debe pasar un key = id del objeto recibido 
  return (
    <div className="App">
      <div>
        <button className='create-movie-btn' onClick={showForm}>{isShowForm ? 'X' : 'Create Movie'}</button>
      </div>
      <div>
        {
          isShowForm && <Form createMovie={createMovie} />
        }
      </div>
      {
        movies?.map(movie => (
          <CardMovie  
          key={movie.id}
          movie={movie}
          URL={URL}
          getAllMovies={getAllMovies}
          updateMovie={updateMovie}
          />
        ))
      }
    </div>
  )
}

export default App
