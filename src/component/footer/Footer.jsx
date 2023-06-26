import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'

import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>ABDUL GAFFAR</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacs">Contacts</a></li>
      </ul>
      <div className="footer_socials">
        <a href="https://linkedin.com/in/abdulgaffar91" target='_blank'><SiLinkedin/></a>
        <a href="https://Instagram.com/abdul__gaffar__" target="_blank"><BsInstagram/></a>
      </div>
      <div className="footer_copyright">
          <small>&copy; Abdul Gaffar. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer