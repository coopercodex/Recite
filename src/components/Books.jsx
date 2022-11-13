import React from 'react'
import Navbar from './Navbar'

export const Books = ({ books, add, favs }) => {
  console.log(favs)
  return (
    <>
     {favs.length > 0 ? <h1>Favorites...</h1> : <h1>Add Favs...</h1> }
     
      <div className='main'>
        {favs.map((item, id) => (
          <div className='main'>
            <img className='main-image' src={item?.volumeInfo.imageLinks.thumbnail} alt='book cover' id={item?.id} key={item?.id} />
            <div className='book-hover'>
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
        
  //  )
  // )
}
