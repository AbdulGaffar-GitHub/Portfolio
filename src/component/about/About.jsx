import React from 'react'
import './About.css'
import ME from "../../assets/me-about.png"
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-img'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>

        <div className='about_content'>
            <div className="about_cards">
            <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Experience</h5>
                <small>No Experience yet</small>
              </article>

              <article className='about_card'>
                <VscFolderActive className='about_icon'/>
                <h5>Projects</h5>
                <small>3+ completed</small>

            </article>
          </div>

          <p>
          Self-motivated and industrious graduate seeking an opportunity to
          work in a challenging environment to prove my coding skills and
          utilize my knowledge for the growth of the organization. Ability to
          create innovative, creative, & interactive web designs . Sound
          knowledge in c++,Data Structures, HTML5, CSS, React.js, & other UI frameworks.
          
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
    
  )
}
export default About