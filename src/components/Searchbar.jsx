import React, { useState } from 'react'







export const Searchbar = ({ setBooks }) => {
  

  const [book, setBook] = useState('')
  


  const handleChange = (event) => {
    let currentBook = event.target.value;

    if (currentBook === 'bible') {
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
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${process.env.REACT_APP_API_KEY}&maxResults=10`)
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