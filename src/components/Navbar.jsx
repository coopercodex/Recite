import React from 'react'
import { Link, Route } from 'react-router-dom';
import { Searchbar } from './Searchbar';
import PropTypes from 'prop-types'
import { Home } from './Home';


const Navbar = ({ setBooks, books }) => {

  return (
    <>
      {!setBooks.length && <div className='loading'>
        <img className='main' src='https://media0.giphy.com/media/WoWm8YzFQJg5i/giphy.gif' alt='loading' />
      </div>}
      <div className='navbar'>
        <Link to='/' onClick={() => window.location.reload()} className='home-link' ><h1>Recite</h1></Link>
        <div>
          <Searchbar setBooks={setBooks} />
        </div>
        <Link to='/books' className='book-link' style={{ textDecoration: 'none', color: 'black' }}><h1>Books</h1></Link>
        <Link target='_blank' rel='noreferrer' className='shop' to='//www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi9n-qNgaX7AhX-C60GHajABRYYABAAGgJwdg&ohost=www.google.com&cid=CAESauD2x7OrSC507Y1eFJwTffzCvmvSNRECpqhMaQvIqUfRMcZ0yWM2fyr5b0g8_uNtBG-vcW4pjIz-Qkoc9pPtHC96STvVWC9l0oqnWxYUQzZG6P7d-8dSB1rILmJ04uqOoDMfHjl7uyzFOD4&sig=AOD64_30udRRcquAIOCf-Wrv0dDeS9nxFg&q&adurl&ved=2ahUKEwj-99-NgaX7AhWIADQIHbEMAwgQ0Qx6BAgGEAE' >Shop</Link>
      </div>
    </>
  )
}


export default Navbar;

Navbar.propTypes = {
  setBooks: PropTypes.func.isRequired
};
