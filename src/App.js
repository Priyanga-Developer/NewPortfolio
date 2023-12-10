import React from 'react'
import Header from './Components/Header';
import Hero from './Components/Hero';


const App = () => {
  return (
    <div className=' overflow-y-scroll snap-y snap-mandatory z-0' >
    <Header/>
    <section id="hero" className=' snap-center'>
      <Hero/>
    </section>
 
     
  </div>
  )
}



export default App;
