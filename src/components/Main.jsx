import React, { useState, useEffect } from 'react'
import { FcLike } from 'react-icons/fc';
import { Genres } from './Genres';
import endpoints from '../Endpoints'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Books } from './Books';
import { Home } from '../components/Home';



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
  }
  const deleteFav = (id) => {
    const gone = favorites.filter(item => item.id !== id);
    setFavorites(gone)
  }
  if (favorites) {
    window.onbeforeunload = () => true
  } else {
    window.onbeforeunload = undefined
  }

  return (
    <>
      {!books.length && <div className='loading'>
        <img className='loading' src='https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif' alt='loading' />
      </div>}
      <Navbar setBooks={setBooks} />
      <h1 className='newest-eds'>Popular Releases</h1>
      <div className='main'>
        {hasError && <p>Something went wrong...</p>}
        {isLoading ? (
          <div className='loading'>
            <img className='main' src='https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif' alt='loading' />
          </div>
        ) : (books.map((book, id) => (
          <div className='main'>
            <img className='main-image' src={book?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={book?.id} key={book?.id} />
            <div className='book-hover'>
              <h3>Fav? <FcLike onClick={() => addFavorite(book.id)} /> </h3>
              <h4>Rating: </h4>
              {book?.volumeInfo.averageRating > 0 ? <p>{book?.volumeInfo.averageRating}</p> : <p>N/A</p>}
              <h4>Description: </h4>
              <p>{book?.volumeInfo.description}</p>
            </div>
          </div>
        )))}
      </div>
      <div>
        {!books && <div className='loading'>
          <img className='main' src='https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif' alt='loading' />
        </div>}
        <Books books={books} add={addFavorite} favs={favorites} deleteFav={deleteFav} key={books.id} />
        <Genres title='Coding' apiUrl={endpoints.endPointsCoding} add={addFavorite} favs={favorites} key={books.id} />
        <Genres title='Art' apiUrl={endpoints.endPointsArt} add={addFavorite} favs={favorites} key={books.id} />
        <Genres title='Classics' apiUrl={endpoints.endPointsClassics} add={addFavorite} favs={favorites} key={books.id} />
        <Genres title='Scifi' apiUrl={endpoints.endPointsScifi} add={addFavorite} favs={favorites} key={books.id} />
        <Genres title='Thrillers' apiUrl={endpoints.endPointsHorror} add={addFavorite} favs={favorites} key={books.id} />
      </div>
      {/* <></><Home book={books} /> */}
      <Footer />
    </>
  );

}
