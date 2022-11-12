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
    const book = event.target.value;
    setBook(book);
    // setSearchTerm(event.target.value)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(book)
    getData();
  }

  const getData = async () => {
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${key}&maxResults=10`)
      .then(response => response.json())
      .then(data => { setBooks(data.items) });
  }
  // const clearInputs = () => {
  //   // setBooks()
  //   setBook('')
  // }
  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <input
          type='text' required
          onChange={handleChange}
          placeholder='Search Books...'
        />
        <button type='submit'>Search</button>
      </form>
      {/* {searchResults.map((item, id) => (
        <Books books={item} id={item.id} key={item.id} />
      ))}  */}
    </div>
  )
}
