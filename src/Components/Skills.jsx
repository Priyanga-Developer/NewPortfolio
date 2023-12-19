import React from 'react'
import {motion } from "framer-motion"
import { BiLogoCss3,BiLogoJavascript,BiLogoHtml5,BiLogoReact,BiLogoTailwindCss,BiLogoBootstrap} from "react-icons/bi";

const Skills = () => {

  const techs=[
    {
      id:1,
      element:BiLogoHtml5,
      textColour:"text-[#e34c26]",
      style:"shadow-orange-500",
      text:"HTML",
      directionLeft:true
    },
    {
      id:2,
      element:BiLogoCss3,
      textColour:"text-[#264de4]",
      style:"shadow-blue-500",
      text:"CSS",
      directionLeft:true
    },
    {
      id:3,
      element:BiLogoBootstrap,
      textColour:"text-[#563d7c]",
      style:"shadow-violet-500",
      text:"BOOTSTRAP",
      directionLeft:true
    },

    {
      id:4,
      element:BiLogoJavascript,
      textColour:" text-[#F0DB4F]  ",
      style:"shadow-yellow-500",
      text:"JAVASCRIPT",
      directionLeft:false
    },
    {
      id:5,
      element:BiLogoReact,
      textColour:" text-[#61DBFB]",
      style:"shadow-blue-600",
      text:"REACT",
      directionLeft:false
    },
    {
      id:6,
      element:BiLogoTailwindCss,
      textColour:" text-[#3490dc]",
      style:"shadow-sky-500",
      text:"TAILWINDCSS",
      directionLeft:false
    },
  ]
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
     className=' w-full h-screen flex flex-col relative text-center justify-center items-center  xl:px-10 md:text-left md:px-12  mx-auto xl:space-y-0  md:flex-row max-w-[2000px] mt-40 md:mt-0 '>
     <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'> Skills</h3>
     <div className='grid grid-cols-3 gap-[5px] md:gap-5   '>
     {techs.map(({id,element,textColour,style ,text,directionLeft})=>{
                                const Tag=element
                                return  <div className='flex relative group ' key={id}>
                                  <motion.div 
                                  initial={{
                                    x:directionLeft ? -100 :100,
                                    opacity:0
                                  }}
                                  transition={{duration:1}}
                                  whileInView={{opacity:1,x:0}}
                                  viewport={{once:true}}
                                  className={`flex justify-center items-center rounded-full border border-gray-500 h-24 w-24 xl:w-32 xl:h-32 filter  cursor-pointer ${style}`} >

                                  <Tag className={`   w-16 text-[100px]  sm:text-[120px] group-hover:grayscale  transition duration-300 ease-in-out ${textColour} `}/>
                                  </motion.div>
                                  <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out h-24 w-24 xl:w-32 xl:h-32 hover:bg-white cursor-pointer rounded-full  '>
                                      <div className=' flex items-center justify-center h-full'>
                                        <p className=' text-sm 
                                        text-center font-bold opacity-100 uppercase text-black'>{text}</p>
                                      </div>
                                    </div>
                                    </div> 
                              }
                              )} 

     </div>
    
      </motion.div>
  )
}

export default Skills