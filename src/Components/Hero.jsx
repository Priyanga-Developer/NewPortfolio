import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import profile from "../Assets/myPic.jpeg"
import {Link} from "react-scroll";

const Hero = () => {

    const [text,count]=useTypewriter({
       words:["Hi, I'm Priyanga","<FrontEndDeveloper/>"],
       loop:true,
       delaySpeed:2000,
    })
  return (
    <div className='   w-full h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center mt-12 '>
        <BackgroundCircles/>
        <img src={profile} alt="mypicture" className='relative rounded-full h-32 w-32 mx-auto object-cover' />
        <div className='z-20'>
          <h2 className=' text-sm  font-semibold uppercase pb-2 tracking-[15px]'>FrontEnd Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
            <div className=' pt-5'>
              <Link to='about'> <button className='heroButton'>About</button></Link>
              <Link to='skills'> <button className='heroButton'>Skills</button></Link>
              <Link to='projects'>  <button className='heroButton'>Projects</button></Link>
              <Link to='contact'>  <button className='heroButton'>Contact</button></Link>
            </div>
        </div>
      
        </div>
  )
}

export default Hero