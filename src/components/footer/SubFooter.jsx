import React from 'react'
import img from "../../assets/img/footer/payment.png"

const SubFooter = () => {
  return (
    <div className='w-11/12 mx-auto flex flex-col-reverse gap-3 md:flex-row items-center justify-between py-2 text-gray-500 text-secondary'>
        <p className='lan-secondary'>Copyright © 2025 BlueBerry all rights reserved.</p>
        <img src={img} alt="" />
    </div>
  )
}

export default SubFooter