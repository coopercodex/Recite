import React, { useState, useEffect } from 'react'
import { Books } from './Books'
import { useHistory } from 'react-router-dom'
import { clear } from '@testing-library/user-event/dist/clear'




export const Searchbar = ({ setBooks }) => {
  // let history = useHistory();

  const [book, setBook] = useState('')
  const [searchResults, setSearchResults] = useState([])
  // useEffect(() => {
  //     getData();
  // }, []);

  const handleChange = (event) => {
    let book = event.target.value;
    if (book === 'bible') {
      book = 'kingjames'
      setBook(book)
    }
    setBook(book)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    if (book) {
      getData()
    }
    setBook('')

  }

  const getData = async () => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${key}&maxResults=10`)
    const data = await response.json()
      // .then(response => response.json())
      // .then(data => {
      //   console.log(data.items)
        setBooks(data.items)
      // });
  }
  // const clearInputs = () => {
  //   // setBooks()
  //   setBook('')
  // }
  console.log(book)
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
