import React from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'



const Form = ({createMovie}) => {

    
//handleSubmit empaqueta las acciones que vamos hacer 
    const {register, handleSubmit, reset} = useForm()

    const defaultValuesForm = {
        duration: '',
        genre:'',
        name:'',
        release_date:''
    }


    const submit = data => {
        createMovie(data)
        reset(defaultValuesForm)
    }

  return (
    <form className='new-form' onSubmit={handleSubmit(submit)}>
        
        <div>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' {...register('name')}></input>
        </div>
        <div>
            <label htmlFor='genre'>Genre</label>
            <input type='text' id='genre' {...register('genre')}></input>
        </div>
        <div>
            <label htmlFor='duration'>Duration</label>
            <input type='text' id='duration' {...register('duration')}></input>
        </div>
        <div>
            <label htmlFor='date'>Release Date</label>
            <input type='date' id='date' {...register('date')}></input>
        </div>
        <button className='sub-btn'>Submit</button>
    </form>
  )
}

export default Form