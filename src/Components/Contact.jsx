import React from 'react'
import { FaPhone } from "react-icons/fa6"
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const Contact = () => {
  return (
    <div className=' w-full relative h-screen flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center py-15  overflow-hidden'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'> Contact</h3>
        <div className='flex flex-col space-y-10  absolute top-[134px]   '>
            <h4 className='text-2xl  font-semibold text-center'>I have got just what you need.Lets talk!</h4>
       
        <div className=' flex flex-col md:space-y-10 '>
        <div className='flex items-center justify-center space-x-5'>
        <FaPhone className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
        <p className='text-lg'>7868075256</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
        <IoMail className='text-[#F7AB0A] h-6 w-6 animate-pulse' />
        <p className=' text-lg'>uthirapriyanga@gmail.com</p>
        </div>
        <div className='flex items-center justify-center space-x-5'>
        <FaMapMarkerAlt  className='text-[#F7AB0A] h-6 w-6 animate-pulse'/>
        <p className='text-lg'>MSR Nagar,Bangalore,India</p>
        </div>
        </div>
        <div>
        <form action="https://getform.io/f/362572ab-a4ac-44d2-a58e-1cb672f66b5c" method='POST'  className='flex flex-col w-fit mx-auto space-y-2 '>
    <div className='flex md:flex-row md:space-x-2 md:space-y-0 space-y-2 flex-col'>
      <input className='contactInput' type="text" name="name"   placeholder='Name' />
      <input className='contactInput' name='email' type='email' required  placeholder='Email' />            
    </div>
    <input className='contactInput' name='subject' type='text'  placeholder='Subject'  />
  <textarea name="message" required placeholder='Message'  className='contactInput'></textarea>
  <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
   </form>
        </div>
       
   </div>
    </div>
  )
}

export default Contact