import React from 'react'
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        &copy; 2022 AMD Headphones. All rights reserverd
      </p>
      <p className='icons'>
        <a href={'https://www.linkedin.com/in/am-darshan'}>
            <AiOutlineLinkedin />
        </a>
        <a href='#'>
            <AiOutlineInstagram />
        </a>
         <a href='#'>
            <AiOutlineTwitter />
        </a>
         <a href={'https://github.com/AM-Darshan'} >
            <AiOutlineGithub />
        </a>
       
      </p>
    </div>
  )
}

export default Footer