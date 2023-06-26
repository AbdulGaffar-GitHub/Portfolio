import React from 'react'
import {SiLinkedin} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/in/abdulgaffar91' target="_blank"><SiLinkedin/></a>
        <a href='https://github.com/AbdulGaffar-GitHub' target="_blank"><BsGithub/></a>
        <a href='https://www.instagram.com/abdul__gaffar__/' target="_blank"><BsInstagram/></a>
        <a href='https://leetcode.com/AbdulGaffar_leetcode/' target="_blank"><SiLeetcode/></a>
    </div>
  )
}

export default HeaderSocials