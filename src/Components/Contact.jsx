import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className=' relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'> Contact</h3>
        <div className='flex flex-col'>
            <h4 className='text-3xl py-8 font-semibold text-center'>I have got just what you need.Lets talk!</h4>
       
        <div className='space-y-10 '>
        <div className='flex items-center justify-center space-x-5'>
        <FaPhone className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
        <p className='text-2xl'>43735272638363</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
        <IoMail className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
        <p className='text-2xl'>43735272638363</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
        <FaMapMarkerAlt  className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
        <p className='text-2xl'>43735272638363</p>
        </div>
        </div>
   <form action="" className='flex flex-col space-y-2 w-fit px-14 mx-auto'>
    <div className='flex space-x-2'>
      <input className='contactInput' type="text" name="" id="" />
      <input className='contactInput' type='text' />            
    </div>
    <input className='contactInput' type='email' required name='name' placeholder='Enter your Email' />
  <textarea name="message" required placeholder='Enter your message'  className='contactInput'></textarea>
  <button className=''>Submit</button>
   </form>
   </div>
    </div>
  )
}

export default Contact