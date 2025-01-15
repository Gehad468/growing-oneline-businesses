// src/components/ContactForm.js
import React from 'react';
import GradientButton from './buttons';

const ContactForm = () => {
  return (
    <section >
      <div className='row-contact'>
      <form action=''>
        <h2 >Write Us</h2>
        <input type="email" placeholder="Your Email" className='box'/>
        <textarea placeholder="Enter your message" cols="30" rows="10" className='message'></textarea>
       <GradientButton></GradientButton>
      </form>
      </div>
    </section>
  );
};

export default ContactForm;
