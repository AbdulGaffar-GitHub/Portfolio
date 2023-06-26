import React from 'react'
import Header from './component/header/Header.jsx'
import Nav from './component/nav/Nav.jsx'
import About from './component/about/About.jsx'
import Experience from './component/experience/Experience.jsx'
import Services from './component/services/Services.jsx'
import Portfolio from './component/portfolio/Portfolio.jsx'
import Testimonials from './component/testimonials/Testimonials.jsx'
import Contacts from './component/contacts/Contacts.jsx'
import Footer from './component/footer/Footer.jsx'
import Projects from './component/projects/Projects.jsx'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Projects/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default App 