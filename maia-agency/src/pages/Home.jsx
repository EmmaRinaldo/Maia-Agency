import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroHome from '../components/HeroHome'
import ServicePresentation from '../components/ServicePresentation'
import Testimonials from '../components/Testimonials'
import Process from '../components/Process'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
        
        <Header />
        <HeroHome />
        <ServicePresentation />
        <Testimonials />
        <Process />
        <Newsletter />
        <Footer />

    </div>
  )
}

export default Home