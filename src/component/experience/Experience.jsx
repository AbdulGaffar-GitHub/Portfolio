import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5> What Skills I Have </h5>
      <h2> My Experience</h2>

      <div className="container experience_container">

         {/*languages */}
    
      <div className="experience_languages">
          <h3>Programming Languages</h3>
          <div className="experience_content">
          
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
              <h4>C++</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
              <h4>SQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
              <h4>Java</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>

          </div>
        </div>


       {/*FRONTEND */}
        <div className="experience_frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience_content">
          
          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
            </div>
          </article>

          </div>
        </div>

        {/*BACKEND */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
          
          <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>Node JS</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>Basic</small>
            </div>
          </article>

          <article className='experience_details'>
          <BsFillPatchCheckFill className='experience_details-icons'/>
            <div>
            <h4>ExpressJS</h4>
            <small className='text-light'>basic</small>
            </div>
          </article>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience