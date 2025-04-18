import React from 'react'
import { Link } from 'react-router-dom'
import { BiCategoryAlt } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";




const Navbar = () => {
  return (
    <div className='border-y border-gray-300 py-2 shadow-md hidden md:block  w-full'>
        <div className='w-11/12 mx-auto flex justify-between items-center'>
        {/* left side */}
<div>
    <ul className='flex gap-8 items-center'>
        <li className='shadow-md px-3 py-3'>
        <BiCategoryAlt className='text-3xl text-[#6C7FD8]' />

        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
            Home
            </Link>
        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
           Categories
            </Link>
        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
           Offers
            </Link>
        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
           Blog
            </Link>
        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
            About Us
            </Link>
        </li>
        <li>
            <Link className='text-primary text-gray-700 hover:text-[#6C7FD8]'>
          Contact Us
            </Link>
        </li>
    </ul>
</div>
{/* right side */}
<div className="relative lan-primary text-gray-500">
  <select className="border border-gray-400 py-2 px-8 outline-none rounded w-full appearance-none ">
    <option value="">Select city</option>
    <option value="dhaka">Dhaka</option>
    <option value="chittagong">Chittagong</option>
    <option value="sylhet">Sylhet</option>
    <option value="rajshahi">Rajshahi</option>
  </select>
  <IoLocationOutline className="absolute top-2 left-2 text-2xl pointer-events-none text-[#6C7FD8]" />
  <MdOutlineArrowDropDown   className="absolute top-2 right-2 text-2xl pointer-events-none text-[#6C7FD8]"/>

</div>

        </div>
    </div>
  )
}

export default Navbar