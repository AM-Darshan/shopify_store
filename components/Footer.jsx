import React from 'react'
import {AiOutlineGithub,AiOutlineInstagram,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        2022@ AMD Headphones All rights reververd
      </p>
      <p className='icons'>
        <Link href={'https://www.linkedin.com/in/am-darshan'}>
            <AiOutlineLinkedin />
        </Link>
        <Link href={'#'}>
            <AiOutlineInstagram />
        </Link>
         <Link href={'#'}>
            <AiOutlineTwitter />
        </Link>
         <Link href={'https://github.com/AM-Darshan'} >
            <AiOutlineGithub />
        </Link>
       
        
      </p>
    </div>
  )
}

export default Footer