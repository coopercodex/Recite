// import React from 'react'
import { Main } from './Main'
// import { Genres } from './Genres'
// import endpoints from '../Endpoints'
// import { Searchbar } from './Searchbar'

import React, { Route, useState, useEffect } from 'react'
import endpoints from '../Endpoints'
import { Books } from './Books';
import Footer from '../components/Navbar';
import { Link } from 'react-router-dom';
const key = 'AIzaSyDtkwfURWB2svWs7KliBJgLfs0RvGymjSc'



export const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setisLoading(true);
    setHasError(false);
    try {
      await fetch(`https://www.googleapis.com/books/v1/volumes?q=react&key=${key}&maxResults=10`)
        .then(response => response.json())
        .then(data => { setBooks(data.items) });
    } catch (error) {
      setHasError(true);
    }
    setisLoading(false);
  }



  return (
    <div className='books-page'>
      <Link to='/' className='home-link' style={{ color: '#61DBFB' }} ><h1>Home</h1></Link>
      <h1 className='newest-eds' style={{ color: '#61DBFB' }}>Study Hall</h1>
      <div className='main'>
        {!books && <div className='loading'>
          <img className='loading' src='https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif' alt='loading' />
        </div>}


        {books.map((book, id) => (
          <div className='main'>
            <img className='main-image' src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />

          </div>
        ))
        }
      </div>
    </div>
  )

}

