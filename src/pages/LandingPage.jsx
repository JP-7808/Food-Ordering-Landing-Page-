import React, { useEffect } from 'react'
import './landingPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../components/home/Home'

const LandingPage = () => {

  useEffect(() => {
    AOS.init({duration: 2500, once: true}) // initialize AOS
  },[])

  return (
    <div>
      
      <div id='home' data-aos="fade-in">
        <Home/>
      </div>
      
    </div>
  )
}

export default LandingPage
