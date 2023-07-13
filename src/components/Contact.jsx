import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Player } from '@lottiefiles/react-lottie-player';
import emailSent from '../image/animations/emailSent.json'



export const Contact = () => {
  const serviceId = 'service_d49m74o';
  const templateId = 'template_kvdlecf'
  const userId = 'aTBJM00DT9GDdbq16'
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('');
  const [haveSubmit, setHaveSubmit] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(serviceId, templateId, {
      name: name,
      email: email,
      content: content
    }, userId)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setHaveSubmit(!haveSubmit);
        setName('');
        setEmail('');
        setContent('');

      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };
  if (haveSubmit) {
    return (
      <section className="haveSubmit" id="contact">
        <h2 className='haveSubmit__h2'>Thanks for reaching out!</h2>
        <p className='haveSubmit__p'>Your form submission has been received.</p>
        <Player
          className='haveSubmit__emailAnimation'
          autoplay
          loop
          src={emailSent}
        >
        </Player>
      </section>
    )
  }
  return (
    <section id="contact" className="contact">
      <h2 className='contact__h2'>Contact</h2>
      <p className='contact__p'>即使沒有面試邀約，也非常歡迎給予任何建議，非常感謝您！</p>
      <form onSubmit={onSubmit} className='contactForm'>
        <input
          className="form-input input"
          type="text"
          name="name"
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input required type="email" name="email" className="input" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />

        <textarea required name="message" rows="6" className="input" placeholder="Type some message" value={content} onChange={(e) => setContent(e.target.value)} />


        <button className="cta-btn cta-btn--hero contactForm__btn" type="submit">Submit</button>
      </form>
    </section>
  )
}
