import React from 'react'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";


const SubHeader = () => {
  return (
    <div className='bg-[#3D4750] text-gray-200 py-2 md:block hidden'>
        <div className='max-w-11/12 mx-auto text-secondary flex justify-between'>
           <div>
            <h3>Flat 50% Off On Grocery Shop.</h3>
           </div>
           <div className='flex gap-5'>
            <li className='list-none'>
            <Link>
            <button className='cursor-pointer'>Help?</button>
            
            </Link>

            </li>
            <li className='list-none'>
            <Link>
            <button className='cursor-pointer'>Track Order</button>
            
            </Link>

            </li>
            <li className='list-none relative group'>
            <button className='cursor-pointer flex items-center justify-center'>Language <MdKeyboardArrowDown className='mt-1'/>
            </button>
            <ul className='absolute top-8 opacity-0 bg-white text-gray-600 shadow-md px-5 py-2 group-hover:opacity-100 transition-all duration-300 space-y-2 group-hover:visible invisible'>
                <li className='cursor-pointer'>Bangla</li>
                <li className='cursor-pointer'>English</li>
            </ul>

            </li>
            <li className='list-none relative group'>

            <button className='cursor-pointer flex items-center justify-center'>Currency <MdKeyboardArrowDown className='mt-1'/>
            </button>
            <ul className='absolute bg-white text-gray-600 px-5 py-2 top-8 shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 space-y-2 group-hover:visible invisible'>
                <li className='cursor-pointer'>USD</li>
                <li className='cursor-pointer'>EUR</li>
            </ul>
            </li>
           </div>
        </div>
    </div>
  )
}

export default SubHeader