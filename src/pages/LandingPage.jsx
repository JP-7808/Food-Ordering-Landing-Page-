import React, { useEffect } from 'react'
import './landingPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from '../components/home/Home'
import Services from '../components/services/Services';
import AboutUs from '../components/aboutUs/AboutUs';
import ContactUs from '../components/contact/ContactUs';
import Navbar from '../components/navbar/Navbar';

const LandingPage = () => {

  useEffect(() => {
    AOS.init({duration: 2500, once: true}) // initialize AOS
  },[])

  return (
    <div>
      <Navbar/>
      <div id='home' data-aos="fade-in">
        <Home/>
      </div>
      <div id='services'>
        <Services/>
      </div>
      <div id='aboutUs'>
        <AboutUs/>
      </div>
      <div id='contact'>
        <ContactUs/>
      </div>
      
    </div>
  )
}

export default LandingPage
