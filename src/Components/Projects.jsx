import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { BiLogoGithub} from "react-icons/bi";
import Xpenstrac from "../Assets/xpenstrac.png";
import Ecommerce from '../Assets/ecommerce.png';
import MovieFlix from '../Assets/movieflix.png';

const Projects = () => {
  const portfolios=[   {
    id:1,
    title:"MovieFlix",
    src:MovieFlix,
    details:" MovieFlix app is a platform where users can watch trailers of movies by genres.Implemented user signup, login, and logout functionalities using Firebase Authentication.Fetched movie data from a movie database API (such as TMDB) and upon selecting a movie,displaying their relevant videos.Utilised Redux for state management,maintaining a centralized store for user's data.",
    code:"https://github.com/Priyanga-Developer/netflixCloneapp",
    demo: "https://movieflixclone.netlify.app/",
    tech1:"React",
    tech2:"React Routers",
    tech3:"Firebase",
    tech4:"Redux",
    tech5:"API"
},

  {
    id:2,
    title:"Xpenstrac",
    src:Xpenstrac,
    details:"XpensTrac is an expense tracker app that manages our daily expenses and income.Used Context API hook for state management and custom hooks for fetching data from the users.Furthermore, incorporated firebase for authentication and data storage as backend service. Integrated Toastify into the app, enhancing user experience with informative notifications.",
    code:"https://github.com/Priyanga-Developer/XpensTrac",
    demo: "https://xpenstrac.netlify.app",
    tech1:"React",
    tech2:"React Routers",
    tech3:"Firebase",
    tech4:"Toastify"
  },
  {
    id:3,
    title:"Shopee.App",
    src:Ecommerce,
    details:"Users can browse, filter, add products to cart and checkout billing and shipping information.Utilized HTML, CSS and JavaScript to create the website’s frontend, incorporated API integration for product data retrieval, implanted ES6 features for efficient code.Fetched real-time product details through asynchronous function using API fetch",  
    code:"https://github.com/Priyanga-Developer/Shopee-E-Commerce-Website",
    demo: "https://shopeeappdemo.netlify.app",
    tech1:"HTML",
    tech2:"CSS",
    tech3:"Javascript",
    tech4:"API",
    tech5:"ES6"
  },

]
  
  return (
    <div className='h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden'>
       <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl'>Projects</h3>
       <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
       {portfolios.map(({id,title,src,details,tech1,tech2,tech3,tech4,tech5,tech6,code,demo})=>
                                <div key={id} className=' w-full flex flex-shrink-0 snap-start flex-col space-y-5 items-center justify-center p-20  md:p-36 h-screen '>
                                      <div className=' flex md:w-1/2 items-center justify-center '>
                                        <img src={src} alt='projectdemo' className='object-cover w-[100%] h-[100%]' />
                                        </div>
                                        <div className='    px-0 md:px-10  '>  
                                                        <h4 className='text-xl font-semibold text-center'>{title}</h4>
                                                        <p className='text-center text-base   '>{details}</p>
                                                <div className='flex justify-center items-center gap-3  text-sm  uppercase'>
                                                        <p>{tech1}</p>
                                                        <p>{tech2}</p>
                                                        <p>{tech3}</p>
                                                        <p>{tech4}</p>
                                                        <p>{tech5}</p>
                                                        <p>{tech6}</p>
                                                </div>
                                                <div className='flex justify-center items-center gap-4 '>
                                                      <a className='flex items-center justify-center  ' href={code}target='_blank' rel='noreferrer'> <BiLogoGithub className=' text-xl'/>Code</a>
                                                        
                                                        <a className='flex items-center justify-center  ' href={demo} target='_blank' rel='noreferrer'><FiExternalLink className=' text-xl'/>Demo</a>
                                                  </div>
                                        </div>
                            </div>

                  )}
                     
       </div>
       <div className='w-full absolute top-[30%] bg-[rgb(247,171,10)]/40 left-0 h-[500px] -skew-y-12'></div>
    </div>
  )
}

export default Projects