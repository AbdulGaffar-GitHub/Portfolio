import React from 'react'
import './Projects.css'
import project1 from '../../assets/project1.webp'
import project2 from '../../assets/project2.jpg'
import project3 from '../../assets/project3.avif'
import project4 from '../../assets/project4.jpg'

const data =[
  {
    id:1,
    image : project1,
    title :'Instagram Clone',
    github : "https://github.com/AbdulGaffar-GitHub/instagram-clone",
    live :"https://distinct-cloak-moth.cyclic.app/",
    demo : "https://drive.google.com/file/d/1dO8kGZS_vYGT_3M5ohPaztKTfwqeDR8p/view?usp=sharing"
  },
  {
    id:2,
    image : project2,
    title :'Redflix',
    github : "https://github.com/AbdulGaffar-GitHub/Redflix",
    live :"https://netflix-clone-d3bad.web.app/",
    demo : "https://drive.google.com/file/d/1Knoi1c-Ba8EuNP4mSl1hsk3qMx9yeGQ4/view?usp=sharing"
  },
  {
    id:3,
    image : project3,
    title :'COVID19 Checker',
    github : "https://github.com/AbdulGaffar-GitHub/Covid19Checker",
    live : "https://covid19checker.onrender.com/",
    demo : "https://drive.google.com/file/d/1sYiiPN4LjXUueCbJW0tLTdVxUnHDqiEG/view?usp=sharing"
  },
  {
    id:4,
    image : project4,
    title :'ShortifAI NEWS',
    github : "https://github.com/AbdulGaffar-GitHub/ShortifAI",
    live : "https://drive.google.com/file/d/1k3RvcQ6mgo_Y6RNubw2C2BnCcb_dCV25/view?usp=sharing",
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
        data.map(({id,image,title,github,live,demo}) =>{
          return(
          <article key={id} className='project_item'>
          <div className='project_item-img'>
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="project_item-cta" >
          <a href={github} className='btn btn-primary' target='_blank'>GitHub</a>
          <a href={live} className='btn btn-primary' target='_blank'>Live</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Demo</a>
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