import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/photo2a.png'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
      <h5>Hello I'm</h5>
      <h1>Mohammed Abdul Gaffar</h1>
      <h5 className='textlight'> Web Developer</h5>
      <CTA/>

      <HeaderSocials/>

      <div className='me'>
        <img src={ME} size="" alt='me'/>
      </div>

      <a href='#contacts' className='scroll_down'>Scroll Down</a>

      
      </div>
    </header>
  )
}

export default Header