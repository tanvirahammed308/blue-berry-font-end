import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from "../../assets/img/berry-logo.png";

import { IoSearchOutline } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import { FaRegUser, FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { TbCategory } from "react-icons/tb";
import { RiTwitterXFill } from "react-icons/ri";

const MainHeader = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className='w-full px-3 lg:w-11/12 lg:mx-auto py-5 flex  items-center gap-5 justify-between'>
      {/* Logo */}
      <div>
        <img src={logo} alt="Berry Logo" />
      </div>

      {/* Search bar */}
      <div className='relative hidden md:block'>
        <input
          type="text"
          placeholder='Search here...'
          className='border border-gray-500 outline-none py-2 px-3 md:w-[350px] rounded-md shadow-md text-gray-500'
        />
        <IoSearchOutline className='absolute right-2 top-2 text-2xl text-gray-400' />
      </div>

      {/* Desktop Right Icons */}
      <div className='hidden md:flex items-center space-x-5'>
        <div className='flex items-center gap-2'>
          <BsCart4 className='text-3xl text-[#6C7FD8]' />
          <div className='flex flex-col leading-4'>
            <h3 className='text-gray-400 font-semibold text-sm'>4 items</h3>
            <h3 className='text-gray-600 font-bold mx-2'>Cart</h3>
          </div>
        </div>
        <Link to="/login" className='flex items-center'>
          <FaRegUser className='text-3xl text-[#6C7FD8]' />
          <h2 className='text-gray-600 font-bold mx-2'>Login</h2>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className='block md:hidden relative'>
        <TbCategory className='text-3xl text-[#6C7FD8]' onClick={handleToggleNav} />
      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className='absolute bg-[#6C7FD8] border border-gray-600 top-20 w-[300px] right-0 transition-all duration-300 ease-in px-5 py-3 h-screen rounded z-30'>
          <ul className='flex flex-col space-y-4 items-center mt-8 text-white'>
            <li>
              <Link to="/" className='lan-secondary'>Home</Link>
            </li>
            <li>
              <Link to="/categories" className='lan-secondary'>Categories</Link>
            </li>
            <li>
              <Link to="/offers" className='lan-secondary'>Offers</Link>
            </li>
            <li>
              <Link to="/blog" className='lan-secondary'>Blog</Link>
            </li>
            <li>
              <Link to="/about" className='lan-secondary'>About Us</Link>
            </li>
            <li>
              <Link to="/contact" className='lan-secondary'>Contact Us</Link>
            </li>
          </ul>

          <div className='border-t border-white mt-8'></div>

          {/* Social Icons */}
          <div className='mt-5 gap-3 flex justify-center items-center'>
            <FaFacebookSquare className='text-white text-2xl' />
            <RiTwitterXFill className='text-white text-2xl' />
            <FaInstagramSquare className='text-white text-2xl' />
            <FaLinkedin className='text-white text-2xl' />
          </div>
        </div>
      )}

{/* <div className='relative block md:hidden'>
        <input
          type="text"
          placeholder='Search here...'
          className='border border-gray-500 outline-none py-2 px-3 md:w-[350px] rounded-md shadow-md text-gray-500'
        />
        <IoSearchOutline className='absolute right-2 top-2 text-2xl text-gray-400' />
      </div> */}


    </div>
  );
};

export default MainHeader;
