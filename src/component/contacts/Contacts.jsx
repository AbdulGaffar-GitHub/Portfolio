import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import {HiOutlineMail} from 'react-icons/hi'
import {BsInstagram,BsWhatsapp} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import './Contacts.css'
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ptjij82', 'template_8d5yyv9', form.current, '18xVPw8e3i7fqXCTu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };


  return (
    <section id='contacts'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>mohammedgaffarabdul@gmail.com</h5>
            <a href="mailto:mohammedgaffarabdul@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <BsInstagram className='contact_option-icon'/>
            <h4>Instagram</h4>
            <h5>abdul__gaffar__</h5>
            <a href="https://ig.me/m/abdul__gaffar__" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>Abdul Gaffar</h5>
            <a href="https://wa.me/+919121182295" target='_blank'>Send a message</a>
          </article>

          <article className="contact_option">
            <FaTelegramPlane className='contact_option-icon'/>
            <h4>Telegram</h4>
            <h5>AbdulGaffar001</h5>
            <a href="https://t.me/AbdulGaffar001" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Send Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>

  )
}

export default Contacts