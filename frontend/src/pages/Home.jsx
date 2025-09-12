import React from 'react'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Featured from '../components/Featured'
import Testimonials from '../components/Testimonials'

const Home = () => {

  return (
    <div className=" md:p-0 px-4">
      <div className=''>
        <Hero />
      </div>
      <div className=''>
        <Featured />
      </div>
      <div className=''>
        <Testimonials />
      </div>
      <div className=''>
         <Footer />
      </div>
    </div>
  )
}

export default Home