import React from 'react';
import { FcDislike } from 'react-icons/fc';

export const Books = ({ favs, deleteFav }) => {
  return (
    <>
      {favs.length > 0 ? <h1>Favorites: {favs[0]?.volumeInfo.categories[0]} </h1> : <h1>Add Favorites 💌</h1>}
      {!favs.length && <div className='loading'>
        <img className='loading' src='http://media0.giphy.com/media/1sSfhxzWHJ4vC/giphy.gif' alt='loading' />
      </div>}

      <div className='main'>
        {favs.map((item, id) => (
          <div className='main'>
            <img className='main-image' src={item?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={item?.id} key={item?.id} />
            <div className='book-hover'>
              <h3>Fav? <FcDislike onClick={() => deleteFav(item.id)} /> </h3>
              <h4>Rating: </h4>
              {item?.volumeInfo.averageRating > 0 ? <p>{item?.volumeInfo.averageRating}</p> : <p>N/A</p>}
              <h4>Description: </h4>
              <p>{item?.volumeInfo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  )

}
