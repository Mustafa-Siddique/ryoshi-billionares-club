import React from 'react'
import logo from '../assets/images/ryoshilogo.svg'

export default function Contact() {
  return (
    <div className='container contact-main text-center' id='contact'>
        <h2>Contact Us!</h2>
        <p>Thank you for visiting. If you want to contact us, please use any of these RRSS.</p>
        <p>Visit our official Ryoshi token web.</p>
        <a href="https://ryoshitoken.com/" target="_blank" rel="noreferrer"><img src={logo} alt="" style={{width:"125px"}}/></a>
    </div>
  )
}
