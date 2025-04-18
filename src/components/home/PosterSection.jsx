import React from 'react'
import img1 from "../../assets/poster/poster1.png"
import img2 from "../../assets/poster/poster2.png"
import img3 from "../../assets/poster/poster3.jpg"
import { Link } from 'react-router-dom'

const PosterSection = () => {
  return (
    <div className='mt-20'>
        {/* poster card */}
        <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-5'>
            <div className='w-full md:w-[50%] px-3 py-5 border border-gray-200 flex flex-col md:flex-row justify-center items-center rounded-md shadow bg-[#09122C]'>
                <img src={img1} alt="" className='w-56'/>
                <div className='px-2 space-y-3 text-white text-center'>
                    <h1 className='text-primary text-3xl '>Fresh Fruits & Organic Vegetables</h1>
                    <p className='text-secondary '>A healthy meal for every one</p>
                    <Link>
                    <button className='text-primary  border-2 border-white py-2 px-3 rounded'>Shop Now</button>
                    </Link>
                </div>
            </div>
            <div className='w-full md:w-[50%] px-3 py-5 border border-gray-200 flex flex-col md:flex-row justify-center items-center rounded-md shadow bg-[#007074]'>
                <img src={img2} alt="" className='w-56'/>
                <div className='px-2 space-y-3 text-white text-center'>
                    <h1 className='text-primary text-3xl '>Tasty bakery  & Organic  food</h1>
                    <p className='text-secondary '>The flavour of something special</p>
                    <Link>
                    <button className='text-primary  border-2 border-white py-2 px-3 rounded'>Shop Now</button>
                    </Link>
                </div>
            </div>

        </div>
        {/* poster banner */}
        <div className='mt-20 relative flex flex-col justify-center items-center'>
            <img src={img3} alt=""  className=' w-full object-cover h-[400px] opacity-80'/>
            <div className='w-[400px] shadow-md py-5 px-3 bg- space-y-5 absolute top-20  bg-[#183B4E] rounded-md text-white'>
                <h3 className='text-secondary  '>25% Off</h3>
                <h1 className='text-5xl text-primary'>Fresh & Organic Fruit</h1>
                <button className='border-2 border-[#6C7FD8] py-2 px-2 rounded-md text-primary'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default PosterSection