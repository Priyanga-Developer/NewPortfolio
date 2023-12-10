import React from 'react'
import { MdDarkMode } from "react-icons/md";
import { SocialIcon } from 'react-social-icons';
import { motion} from "framer-motion"
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {

  return (
    <header className='fixed top-0 w-full h-[80px] flex justify-around items-center bg-[#fbfcfd] shadow-[0px_8px_21px_#e8e8f1] py-11 px-16 z-[200] ' >
    {/* Social icons */}
          <motion.div 
          initial={{
            x:-500,
            opacity:0,
            scale:0.5,
          }}
          animate={{
            x:0,
            opacity:1,
            scale:1
          }}
          transition={{
            duration:1.5,
          }}
          
          className='flex flex-row items-center justify-center '>
                                  <SocialIcon 
                                      url="https://www.linkedin.com/in/priyanga-muthuraman"
                                      fgColor='#14143c'
                                      bgColor='transparent'
                                      target='_blank'
                                  />
                                  <SocialIcon 
                                      url="https://github.com/Priyanga-Developer"
                                      fgColor='#14143c'
                                      bgColor='transparent'
                                      target='_blank'
                                   />
                                  <SocialIcon 
                                      url="mailto:uthirapriyanga@gmail.com"
                                      fgColor='#14143c'
                                      bgColor='transparent'
                                      target='_blank'
                                   />
                                  <SocialIcon 
                                      url=" https://x.com/Priya_uthira" 
                                      fgColor='#14143c'
                                      bgColor='transparent'
                                      target='_blank'
                                  />
          </motion.div>
     {/* Resume */}
      
      <motion.div 
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{
        duration:1.5,
      }}
      className='flex flex-row items-center justify-center gap-6 cursor-pointer'>
      <MdDarkMode
      className='text-4xl  cursor-pointer  text-[#14143c]'
       />
        <a href='./Priyanga_Developer.pdf'target='_blank'  rel='noreferrer' download='true' className=' w-full flex  items-center justify-around  gap-5 border-2  border-[#fa0]  rounded-full px-[10px] py-[6px] duration-500   hover:bg-[#f9f9cd]' > 
        <BsFillPersonLinesFill className=' text-4xl  cursor-pointer text-[#161e66]'/>
                  <><p className=' uppercase hidden md:inline-flex text-sm text-gr'> GET Resume</p></>
                   </a> 
      </motion.div>
</header>
  )
}

export default Header