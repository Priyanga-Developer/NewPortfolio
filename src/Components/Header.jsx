import React ,{useEffect,useState} from 'react'
import { FaMoon } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import { motion} from "framer-motion"
import { BsFillPersonLinesFill } from "react-icons/bs";

const Header = () => {
  
  const [show,setShow]=useState(false);
  
  const transitionNavBar=()=>{
    if(window.scrollY>100){
      setShow(true);
    }
    else{
      setShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  })

  return (
    <header className={` ${show&& ' bg-gray-300'} fixed top-0 w-full h-[80px] flex justify-around items-center  py-11 px-16 z-[200]  transition-all ease-in duration-75` }>
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
      className='flex flex-row items-center justify-center  cursor-pointer'>
      <FaMoon
      className='md:text-3xl text-4xl  cursor-pointer  text-[#14143c]'
       />
        <a href='./Priyanga_Developer.pdf'target='_blank'  rel='noreferrer' download='true' className=' w-full flex  items-center justify-around  gap-5  border-[#fa0]  rounded-full px-[10px] py-[6px] duration-500   hover:bg-[#f9f9cd]' > 
        <BsFillPersonLinesFill className=' text-3xl  cursor-pointer text-[#14143c]'/>
                  <><p className=' uppercase hidden md:inline-flex text-sm text-gr'> GET Resume</p></>
                   </a> 
      </motion.div>
</header>
  )
}

export default Header