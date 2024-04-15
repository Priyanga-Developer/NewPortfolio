import React ,{useEffect,useState} from 'react'
import { FaMoon } from "react-icons/fa";
import { SocialIcon } from 'react-social-icons';
import { motion} from "framer-motion"
import { BsFillPersonLinesFill } from "react-icons/bs";
import { MdLightMode } from "react-icons/md";

const Header = () => {
  
  const [show,setShow]=useState(false);
  const [darkMode,setDarkMode]=useState(false)
  
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
  },[])
  useEffect(()=>{
    if(darkMode){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  
  },[darkMode])

  

  return (
    <header className={` ${show&& ' bg-white dark:bg-black'} fixed top-0 w-full h-[80px] 
    flex justify-around items-center  py-11 md:px-16 z-[200]  transition-all ease-in duration-75` }>
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
                                      fgColor={` ${darkMode?'#F7AB0A': '#14143c'} `}
                                      bgColor='transparent'
                                      target='_blank'
                                     
                                  />
                                  <SocialIcon 
                                      url="https://github.com/Priyanga-Developer"
                                      fgColor={` ${darkMode?'#F7AB0A': '#14143c'} `}
                                      bgColor='transparent'
                                      target='_blank'
                                   />
                                  <SocialIcon 
                                      url="mailto:uthirapriyanga@gmail.com"
                                      fgColor={` ${darkMode?'#F7AB0A': '#14143c'} `}
                                      bgColor='transparent'
                                      target='_blank'
                                   />
                                  <SocialIcon 
                                      url=" https://x.com/Priya_uthira" 
                                      fgColor={` ${darkMode?'#F7AB0A': '#14143c'} `}
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
      {!darkMode?<FaMoon 
      onClick={()=>setDarkMode(!darkMode)}
      className='md:text-3xl text-4xl  cursor-pointer transition duration-100  text-[#14143c]'
       />: <MdLightMode  onClick={()=>setDarkMode(!darkMode)}
       className='md:text-3xl text-4xl  cursor-pointer transition duration-100  text-[#F7AB0A]' />}
        <a href='./Priyanga_FrontEnd_Developer.pdf'target='_blank'  rel='noreferrer' download='Priyanga_Developer' className=' w-full flex  items-center justify-around  gap-5  border-[#fa0] 
         rounded-full px-[10px] py-[6px] duration-500   hover:bg-[#f9f9cd] dark:hover:text-black'  > 
        <BsFillPersonLinesFill className=' text-3xl  cursor-pointer text-[#14143c] dark:text-[#F7AB0A]'/>
                  <><p className=' uppercase hidden md:inline-flex text-sm text-gr'> GET Resume</p></>
                   </a> 
      </motion.div>
</header>
  )
}

export default Header