import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import {Cursor,useTypewriter} from "react-simple-typewriter"
import profile from "../Assets/myPic.jpeg"

const Hero = () => {

    const [text,count]=useTypewriter({
       words:["Hi, I'm Priyanga","<FrontEndDeveloper/>"],
       loop:true,
       delaySpeed:2000,
    })
  return (
    <div className='  h-screen flex flex-col space-y-8 items-center justify-center overflow-hidden text-center '>
        <BackgroundCircles/>
        <img src={profile} alt="mypicture" className='relative rounded-full h-32 w-32 mx-auto object-cover' />
        <div>
          <h2 className=' text-sm  font-semibold uppercase pb-2 tracking-[15px]'>FrontEnd Developer</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#F7AB0A'/>
            </h1>
        </div>
      
        </div>
  )
}

export default Hero