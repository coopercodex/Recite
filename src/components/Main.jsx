import React, { useState, useEffect } from 'react'
import endpoints from '../Endpoints'

export const Main = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch(endpoints.endPointsNewest)
      .then(response => response.json())
      .then(data => setBooks(data.items));

  }

  console.log(books[0]?.id)
  return (
    <>
      <h2 className='newest-eds'>Newest Editions...</h2>
      <div className='main'>
        {books.map((book, id) => (
          <div className='main'>
            <img className='main-image' src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />
            <p className='single-book-title'>{book?.volumeInfo.title}</p>
          </div>
        ))}
      </div>
    </>
  )
}
