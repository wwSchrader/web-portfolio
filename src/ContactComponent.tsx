import React, {useEffect} from 'react';
import './ContactComponent.css';

interface IProps {
  setTrigger: React.Dispatch<React.SetStateAction<number | null>>,
}

const ContactComponent: React.FC<IProps> = (props) => {
  let divRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const node = divRef.current;
    if (node) {
      props.setTrigger(node.offsetTop);
    }
  });

  return (
    <div id='contact' className='ContactComponent' ref={divRef}>
      <h3>Contact Me</h3>
      <form className='contact-form' action="https://formspree.io/wwschrader@gmail.com" method="POST">
        Name:
        <input type='text' name='name' required/>
        Email:
        <input type='email' required/>
        Subject:
        <input type='text' name='subject' required/>
        Message:
        <textarea name='message' rows={5} required/>
        <button className='contact-button' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactComponent;
