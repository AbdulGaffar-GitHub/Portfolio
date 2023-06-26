import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark} from 'react-icons/bi'
import {GrReactjs} from 'react-icons/gr'
import {BiMessageEdit} from 'react-icons/bi'
import { useState } from 'react'
import './Nav.css'

const Nav = () => {
  const [activeNav,setActivenav] = useState('#')
  return (
    <nav>
      <a href='#'onClick={()=>setActivenav('#')} className= {activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActivenav('#about')} className= {activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActivenav('#experience')} className= {activeNav === '#experience' ? 'active' : ''}><BiBookBookmark/></a>
      <a href='#projects' onClick={()=>setActivenav('#projects')} className= {activeNav === '#projects' ? 'active' : ''}><GrReactjs/></a>
      <a href='#contacts' onClick={()=>setActivenav('#contacts')} className= {activeNav === '#contacts' ? 'active' : ''}><BiMessageEdit/></a>
    </nav>
  )
}

export default Nav