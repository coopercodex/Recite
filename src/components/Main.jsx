import React, { useState, useEffect } from 'react'
import { Genres } from './Genres';
import endpoints from '../Endpoints'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


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
 
  return (
    <>
      <Navbar setBooks={setBooks} />
      <h2 className='newest-eds'>Newest Editions...</h2>
      <div className='main'>
        { books.map((book, id) => (
          <div className='main'>
            <img className='main-image' src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />
            <p className='single-book-title'>{book?.volumeInfo.title}</p>
          </div>
        ))}
      </div>
      <div>
      <Genres title='Coding' apiUrl={endpoints.endPointsCoding} />
      <Genres title='Art' apiUrl={endpoints.endPointsArt} />
      <Genres title='Classics' apiUrl={endpoints.endPointsClassics} />
      <Genres title='Scifi' apiUrl={endpoints.endPointsScifi} />
      <Genres title='Horror' apiUrl={endpoints.endPointsHorror} />
      </div>
      <Footer />
    </>
  )
}

