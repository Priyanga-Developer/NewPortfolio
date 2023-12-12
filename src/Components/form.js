import React from 'react'

const form = () => {
  return (
    <form action="https://getform.io/f/362572ab-a4ac-44d2-a58e-1cb672f66b5c" method='POST'  className='flex flex-col w-fit mx-auto '>
    <div className='flex md:flex-row  flex-col'>
      <input className='contactInput' type="text" name="name"   placeholder='Name' />
      <input className='contactInput' name='email' type='email' required  placeholder='Email' />            
    </div>
    <input className='contactInput' name='subject' type='text'  placeholder='Subject'  />
  <textarea name="message" required placeholder='Message'  className='contactInput'></textarea>
  <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
   </form>
  )
}

export default form