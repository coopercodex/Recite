import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const Genres = ({ title, apiUrl }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getData();
  }, [apiUrl]);

  const getData = async () => {
    await fetch(apiUrl)
      .then(response => response.json())
      .then(data =>  setBooks(data.items));
  }
  console.log(books)

  return (
    <>
    <div>
      <h2 className='book-title'>{title}</h2>
      <div className='main-genre'>
        {books.map((book, id) => (
          <div className='main-genre'><img src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} /> 
            <div className='single-book-title-genre'>{book?.volumeInfo.title}</div>
            </div>
        ))}
      </div>
    </div>
  </>
  )
}
Genres.prototype = {
  title: PropTypes.string,
  apiUrl: PropTypes.string
};