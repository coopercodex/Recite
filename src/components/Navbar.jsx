import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { Searchbar } from './Searchbar';

const Navbar = () => {
  return (
  
    <div className='navbar'>
      <Link to='/' className='home-link'><h1>Recite</h1></Link>
      <div>
    <Searchbar />
    </div>
      Navbar
    </div>
  )
}


export default Navbar;
