import React from 'react'
import { motion } from 'framer-motion'

const BackgroundCircles = () => {
  return (
    <motion.div 
    initial={{
      opacity:0,
    }}
    animate={{
      scale:[1,2,2,3,1],
      // opacity:1,
      opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
      borderRadius:["20%","20%","50%","80%","20%"]
    }}
    transition={{
      duration:2.5
    }}
    className='relative flex items-center justify-center'>
       <div className=' absolute  border border-[#333333]  dark:border-[#F7AB0A] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
    </motion.div>
  )
}

export default BackgroundCircles