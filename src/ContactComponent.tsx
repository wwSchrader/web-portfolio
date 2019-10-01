import React from 'react';
import './ContactComponent.css';

const ContactComponent: React.FC = () => {
  return (
    <div id='contact' className='ContactComponent'>
      <h3>Contact Me</h3>
      <form className='contact-form' action="https://formspree.io/email@domain.tld" method="POST">
        Name:
        <input type='text' name='name' required/>
        Email:
        <input type='email' required/>
        Subject:
        <input type='text' name='subject' required/>
        Message:
        <textarea name='message' rows={5} required/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactComponent;
