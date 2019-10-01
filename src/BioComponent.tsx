import React from 'react';
import './BioComponent.css';

const biography = 'Hello! I\'m a full-stack developer in the San Francisco Bay Area.'

const BioComponent: React.FC = () => {
  return (
    <div id='bio'>
      <h2>BioComponent</h2>
      <div className='bio-container'>
        <img className='bio-image' src='./images/portrait.jpg' alt='My Portrait' />
        <p>{biography}</p>
      </div>
    </div>
  );
}

export default BioComponent;