import React from 'react'
import { FaPhone } from "react-icons/fa6"

const Contact = () => {
  return (
    <div className=' relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'> Contact</h3>
        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>I have got just what you need.Lets talk!</h4>
        </div>
        <div>
        <FaPhone />
        </div>
    </div>
  )
}

export default Contact