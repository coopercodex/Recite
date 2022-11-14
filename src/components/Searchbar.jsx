import React, { useState, useEffect } from 'react'
import { Books } from './Books'
import { useHistory } from 'react-router-dom'
import { clear } from '@testing-library/user-event/dist/clear'
const key = 'AIzaSyDtkwfURWB2svWs7KliBJgLfs0RvGymjSc'




export const Searchbar = ({ setBooks }) => {
  // let history = useHistory();

  const [book, setBook] = useState('')
  const [searchResults, setSearchResults] = useState([])
  // useEffect(() => {
  //     getData();
  // }, []);

  const handleChange = (event) => {
    let currentBook = event.target.value;
    if (currentBook === 'bible' || currentBook === 'greece') {
      currentBook = 'kingjames'
      setBook(currentBook)
    }
    setBook(currentBook)
   
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (book) {
      getData()

    } 
   
  }

  const getData = async () => {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${key}&maxResults=10`)
      .then(response => response.json())
      .then(data => { setBooks(data.items) })
      .catch(error => {console.log(error)})
  }
  

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text' required
          value={book}
          onChange={handleChange}
          placeholder='Search Books...'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
