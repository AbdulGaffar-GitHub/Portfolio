import React from 'react'
import './Projects.css'
import project1 from '../../assets/project1.jpeg'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.jpg'

const data =[
  {
    id:1,
    image : project1,
    title :'COVID19 Checker',
    github : "https://github.com/AbdulGaffar-GitHub/Covid19Checker",
    demo : "https://covid19checker.onrender.com/"
  },
  {
    id:2,
    image : project2,
    title :'Code Editor',
    github : "https://github.com/AbdulGaffar-GitHub/Covid19Checker",
    demo : "https://649968d9df9c3f24a1a941f6--lighthearted-crisp-d9d2a8.netlify.app/"
  },
  {
    id:3,
    image : project3,
    title :'ShortifAI NEWS',
    github : "https://github.com/AbdulGaffar-GitHub/ShortifAI",
    demo : "https://drive.google.com/file/d/1k3RvcQ6mgo_Y6RNubw2C2BnCcb_dCV25/view?usp=sharing"
  }
]

const Projects = () => {
  return (
    <section id='projects'>
    <h5>My Recent Work</h5>
    <h2>Projects</h2>

    <div className='container project_container'>
      {
        data.map(({id,image,title,github,demo}) =>{
          return(
          <article key={id} className='project_item'>
          <div className='project_item-img'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="project_item-cta">
          <a href={github} className='btn' target='_blank'>GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>   
        </article>
          )
        })
      }
    </div>
    </section>
  )
}

export default Projects