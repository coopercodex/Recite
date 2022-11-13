import React, { useState, useEffect } from 'react'
import { Genres } from './Genres';
import endpoints from '../Endpoints'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Books } from './Books';


export const Main = () => {
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
      await fetch(endpoints.endPointsNewest)
        .then(response => response.json())
        .then(data => { setBooks(data.items) });
    } catch (error) {
      setHasError(true);
    }
    setisLoading(false);
  }
  const addFavorite = (id) => {
    const data = books.find(item => item.id === id);
    setFavorites([...favorites, data])
    console.log(data)
  } 
  console.log(favorites)
  return (
    <>
    <Navbar setBooks={setBooks} />
    <h2 className='newest-eds'>Popular Releases...</h2>
    <div className='main'>
      {hasError && <p>Something went wrong...</p>}
      {isLoading ? (
      <div className='loading'>
        <img className='main' src='https://media.tenor.com/wfEN4Vd_GYsAAAAM/loading.gif' alt='loading' />
      </div>
      ) : (books.map((book, id) => (
        <div className='main'>
          <img className='main-image' src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />
          <div className='book-hover'>
          <button onClick={() => addFavorite(book.id)}>Favs</button>
            <h4>Rating: </h4> 
          {book?.volumeInfo.averageRating > 0 ?  <p>{book?.volumeInfo.averageRating}</p> : <p>N/A</p>}
            <h4>Description: </h4>
            <p>{book?.volumeInfo.description}</p>
          </div>
        </div>
      )))}
    </div>
    <div>
      <Books books={books} add={addFavorite} favs={favorites} />
      <Genres title='Coding' apiUrl={endpoints.endPointsCoding} add={addFavorite} favs={favorites} />
      <Genres title='Art' apiUrl={endpoints.endPointsArt} />
      <Genres title='Classics' apiUrl={endpoints.endPointsClassics} add={addFavorite} favs={favorites} />
      <Genres title='Scifi' apiUrl={endpoints.endPointsScifi} add={addFavorite} favs={favorites} />
      <Genres title='Horror' apiUrl={endpoints.endPointsHorror} add={addFavorite} favs={favorites} />
      </div>
      <Footer />
    </>
  )
}

