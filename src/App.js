import React from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';


const App = () => {
  return (
    <div className='  snap-y snap-mandatory z-0' >
    <Header/>
    <section id="hero" className=' snap-start'>
      <Hero/>
    </section>
    <section id="about" className=' snap-center' >
      <About/>
    </section>
    <section id="skills" className=' snap-start' >
      <Skills/>
    </section>
    {/* <section id="projects" className=' snap-center' >
      {/* <Projects/> */}
    {/* </section> */} 
  
  </div>
  )
}



export default App;
