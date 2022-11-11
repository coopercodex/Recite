import React from 'react'
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import { Searchbar } from './Searchbar';

const Navbar = () => {
  return (

    <div className='navbar'>
      <Link to='/' className='home-link'><h1>Recite</h1></Link>
      <div>
        <Searchbar />
      </div>
      <Link target='_blank' rel='noreferrer' className='shop' to='//www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi9n-qNgaX7AhX-C60GHajABRYYABAAGgJwdg&ohost=www.google.com&cid=CAESauD2x7OrSC507Y1eFJwTffzCvmvSNRECpqhMaQvIqUfRMcZ0yWM2fyr5b0g8_uNtBG-vcW4pjIz-Qkoc9pPtHC96STvVWC9l0oqnWxYUQzZG6P7d-8dSB1rILmJ04uqOoDMfHjl7uyzFOD4&sig=AOD64_30udRRcquAIOCf-Wrv0dDeS9nxFg&q&adurl&ved=2ahUKEwj-99-NgaX7AhWIADQIHbEMAwgQ0Qx6BAgGEAE' >Shop</Link>    </div>
  )
}


export default Navbar;
