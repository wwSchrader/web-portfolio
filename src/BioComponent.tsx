import React, {useEffect} from 'react';
import './BioComponent.css';

interface IProps {
  setTrigger: React.Dispatch<React.SetStateAction<number | null>>,
}

const biography = `Hello! I'm a full-stack developer in the San Francisco Bay Area.
I've been developing experience in Javascript, React.js, Redux, Angular.js, Node.js,
Express.js, Passsport.js, MongoDB, Bootstrap, HTML, & CSS. I also have some experience in developing
Android applications.`

const BioComponent: React.FC<IProps> = (props) => {
  let divRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const node = divRef.current;
    if (node) {
      props.setTrigger(node.offsetTop);
    }
  });

  return (
    <div id='bio' className='BioComponent' ref={divRef}>
      <h2>BioComponent</h2>
      <div className='bio-container'>
        <img className='bio-image' src='./images/portrait.jpg' alt='My Portrait' />
        <p className='bio-text'>{biography}</p>
      </div>
    </div>
  );
}

export default BioComponent;