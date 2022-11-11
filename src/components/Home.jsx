import React from 'react'
import {Main} from './Main'
import { Genres } from './Genres'
import endpoints from '../Endpoints'

export const Home = () => {
  return (
    <div className='bookscontainer'>
      <Main />
      <Genres title='Coding' apiUrl={endpoints.endPointsCoding} />
      <Genres title='Art' apiUrl={endpoints.endPointsArt} />
      <Genres title='Classics' apiUrl={endpoints.endPointsClassics} />
      <Genres title='Scifi' apiUrl={endpoints.endPointsScifi} />
       <Genres title='Horror' apiUrl={endpoints.endPointsHorror} /> 
    </div>
  
  )
}
