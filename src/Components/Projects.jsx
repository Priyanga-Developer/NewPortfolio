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
    <div name="portfolio" className='w-full bg-white px-12 md:p-16 '>
         
        <div className=' max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
              <p className='text-2xl  font-bold inline text-blue-600 py-2' >PROJECTS</p>
              <p className='text-xl  font-bold inline text-[black] py-4'>Check out my work right here</p>
        
                <div className='grid justify-center items-center gap-36 px-12 pt-10 '>
                  {portfolios.map(({id,title,src,details,tech1,tech2,tech3,tech4,tech5,tech6,code,demo})=>
                                <div key={id} className='flex flex-col justify-center items-center lg:flex-row lg:gap-6 '>
                                <div className='md:w-1/2  w-[100%] h-[100%]'>
                                        <img src={src} alt='projectdemo' className='object-cover w-[100%] h-[100%]' />
                                </div>
                                    
                                        <div className=' w-[100%] flex justify-center items-center flex-col  md:w-1/2 '>  
                                                        <h4 className='font-bold text-[20px]'>{title}</h4>
                                                        <p className='text-center font-semibold text-[16px] leading-6 '>{details}</p>
                                                <div className='flex justify-center items-center gap-3 py-4 text-sm font-extrabold uppercase'>
                                                        <p>{tech1}</p>
                                                        <p>{tech2}</p>
                                                        <p>{tech3}</p>
                                                        <p>{tech4}</p>
                                                        <p>{tech5}</p>
                                                        <p>{tech6}</p>
                                                </div>
                                                <div className='flex justify-center items-center gap-4 '>
                                                      <a className='flex items-center justify-center text-[14px] font-semibold' href={code}target='_blank' rel='noreferrer'> <BiLogoGithub className=' text-xl'/>Code</a>
                                                        
                                                        <a className='flex items-center justify-center text-[14px] font-semibold' href={demo} target='_blank' rel='noreferrer'><FiExternalLink className=' text-xl'/>Demo</a>
                                                  </div>
                                        </div>
                            </div>

                  )}
                     
                </div>
          </div>
    </div>
  )
}

export default Projects