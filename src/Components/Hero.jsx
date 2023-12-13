import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import profile from "../Assets/myPic.jpeg"
import {Link} from "react-scroll";

const Hero = () => {
   // eslint-disable-next-line
    const [text,count]=useTypewriter({
       words:["Hi, I'm Priyanga",
       "My-Codes-are-Powered.jsx",
       "<ByEndlessCupsOfJoe/>"],
       loop:true,
       delaySpeed:2000,
    })
  return (
    <div className= ' w-full h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center mt-12'>
        <BackgroundCircles/>
        <img src={profile} alt="mypicture" className='relative rounded-full h-32 w-32 mx-auto object-cover' />
        <div className='z-20'>
          <h2 className=' text-[12px]  font-semibold uppercase pb-2 tracking-[15px]'>FrontEnd Developer</h2>
            <h1 className='text-2xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className=' pt-5 justify-center items-center flex flex-col gap-2 md:flex-row'>
              <Link to='about' smooth duration={500}> <button className='heroButton dark:hover:bg-[#F7AB0A]'>About</button></Link>
              <Link to='skills' smooth duration={500}> <button className='heroButton dark:hover:bg-[#F7AB0A]'>Skills</button></Link>
              <Link to='projects' smooth duration={500}>  <button className='heroButton dark:hover:bg-[#F7AB0A]'>Projects</button></Link>
              <Link to='contact' smooth duration={500}>  <button className='heroButton dark:hover:bg-[#F7AB0A]'>Contact</button></Link>
            </div>
        </div>
      
        </div>
  )
}

export default Hero