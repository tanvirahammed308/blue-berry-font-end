import React from 'react'
import logo from "../assets/img/berry-logo.png"
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className='flex flex-col justify-center items-center  w-[500px] mx-auto py-8 mt-20 shadow-md relative'>
          
       <div className='flex flex-col items-center justify-center'>
          <img src={logo} alt="" />
          <div className='border border-[#6C7FD8] w-full mt-3'></div>
          <h1 className='lan-primary text-xl font-bold my-3 text-gray-700'>"Join us — it only takes a minute."</h1>
       </div>
       <form action="" className='w-[60%]'>
          <div className='flex flex-col space-y-3'>
              <input type="text" name="" id="" placeholder='full name *' className=' py-2 px-3 border outline-none rounded'/>
              <input type="email" name="" id="" placeholder='email *' className=' py-2 px-3 border outline-none rounded'/>
              <input type="password" name="" id="" placeholder='password *' className=' py-2 px-3 border outline-none rounded'/>
              <button className='text-white bg-[#6C7FD8] w-20 py-2 px-3 rounded-md mx-auto'>Login</button>
          </div>
          <p className='lan-secondary mt-3 text-center text-gray-700'>Already have an account? <span><Link className='text-[#6C7FD8]' to="/login">Login</Link></span></p>
  
       </form>
      </div>
  )
}

export default Signup