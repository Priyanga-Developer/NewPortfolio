import React from 'react'
import profile from "../Assets/myPic.jpeg"
import {motion} from "framer-motion"

const About = () => {
  return (
    <motion.div 
     initial={{opacity:0}}
     whileInView={{opacity:1}}
     transition={{duration:1.5}}
    className='w-full px-12  sm:pt-56 md:p-60 md:pt-[11rem] flex flex-col relative h-screen md:text-left md:flex-row max-w-7xl  justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity:0
        }} 
        transition={{
            duration:1.2
        }}
        whileInView={{opacity:1,x:0}}
        src={profile}
        className='mb-10 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[300px] mt-40 md:mt-0 ' 
        alt="myprofile" />
        <div className='space-y-5 px-0 md:px-10'>
            <h4 className='text-2xl font-semibold text-center md:text-left '>Here is my SnapShot of Me!😉</h4>
            <p className='text-base text-center md:text-left'>
             With a successful track record in talent acquisition,I begun an exiciting journey to pivot my career to frond-end development. 
            Leveraging my expertise in problem solving and analytical skills cultivated in recruitment field,I'm actively honing my technical skills and applying them to front-end Development Projects.
            Committed to continuous learning, I've completed web develpoment course, ensuring a seamless transition.<br/>Scroll down to know more about my skills and projects.👩🏻‍💻
            </p>
        </div>
    </motion.div>
  )
}

export default About