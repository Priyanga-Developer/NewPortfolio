import React from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


const App = () => {
  return (
    <div className='  snap-y snap-mandatory z-0 overflow-x-hidden  ' >
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
    <section id="projects" className=' snap-start' >
       <Projects/>
    </section>
    <section id="contact" className=' snap-start' >
       <Contact/>
    </section> 
    <section id="footer" className=' snap-start' >
       <Footer/>
    </section> 
  
  </div>
  )
}



export default App;
