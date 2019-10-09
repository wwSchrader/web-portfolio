import React from 'react';
import ReactParticles from 'react-particles-js';
import ParticlesParam from './ParticlesParam.json';
import './SplashSection.css';
import TextLoop from 'react-text-loop';

const particlesParam = ParticlesParam as any;

const  SplashSection: React.FC = () => {
  return (
    <div id='splash' className='SplashSection'>
      <ReactParticles className='ReactParticles' width='100%' height='100%' params={particlesParam} />
      <div className='SplashSection-content'>
        <h1>Howdy! I'm Warren Schrader.</h1>
        <h2>
          I'm a <span>
            <TextLoop>
              <span>front-end</span>
              <span>back-end</span>
              <span>full-stack</span>
            </TextLoop> 
          </span> web developer.
        </h2>
      </div>
    </div>
  );
}

export default SplashSection;