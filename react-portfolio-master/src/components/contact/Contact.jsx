import React, { useRef, useState } from 'react';
import "./contact.css";
import {AiTwotoneMail} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const [thankYouMessage, setThankYouMessage] = useState(false)
  const form = useRef();
  const emailSentMessage = () => {
    setTimeout(()=>{
        setThankYouMessage(false)
    },6000)
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setThankYouMessage(true)

    emailjs.sendForm("service_jifk8t6", 'template_2ambh8d', form.current, 'mMdiDDcsYCrevifC2')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      emailSentMessage()
      e.target.reset()


  };
  

  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className='contact__option'>
                <AiTwotoneMail className='contact__option-icon'/>
                <h4>Email</h4>
                <h5>jacob.peat01@gmail.com</h5>
                <a href="mailto:jacob.peat01@gmail.com" target="_blank">Send a message</a>
            </article>
            <article className='contact__option'>
                <BsWhatsapp className='contact__option-icon'/>
                <h4>Whatsapp</h4>
                <a href="https://wa.me/447538521490" target="_blank">Send a message</a>
            </article>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className='flex'>
          {thankYouMessage && <div className="thank-you-container">
            <span className='thank-you-message'>Thank You for your message</span>
          </div>}
            <input type="text" name="name"  placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder="Your email"  />
            <textarea name="message" rows="10" placeholder="Your Message"required></textarea>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
        </div>

    </section>
  )
}

export default Contact