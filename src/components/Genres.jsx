import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';

export const Genres = ({ title, apiUrl }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setisLoading(true);
    setHasError(false);
    try {
      await fetch(apiUrl)
        .then(response => response.json())
        .then(data => { setBooks(data.items) });
    } catch (error) {
      setHasError(true);
    }
    setisLoading(false);
  }
  console.log(books[4])
  return (
    <>
      <div>
        <h2 className='book-title'>{title}</h2>
        <div className='main-genre'>
          {hasError && <h1>Something went wrong...</h1>}
          {isLoading ? (
            <div className='loading'>
              <img className='main' src='https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif' alt='loading' />
            </div>
          ) : (books.map((book, id) => (
            <div className='main-genre'><img src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />
              <div className='book-hover'>
                <h4>Rating: </h4>
                {book?.volumeInfo.averageRating > 0 ? <p>{book?.volumeInfo.averageRating}☆</p> : <p>N/A</p>}
                <h4>Description: </h4>
                <p>{book?.volumeInfo.description}</p>
              </div>
            </div>
          )))}
        </div>
      </div>
    </>
  )
}
Genres.propTypes = {
  title: PropTypes.string.isRequired,
  apiUrl: PropTypes.string,
};