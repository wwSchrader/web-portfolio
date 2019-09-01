import React from 'react';
import ReactParticles from 'react-particles-js';
import ParticlesParam from './ParticlesParam.json';
import './SplashSection.css';
import TextLoop from 'react-text-loop';

const particlesParam = ParticlesParam as any;

const  SplashSection: React.FC = () => {
  console.log(ParticlesParam);
  return (
    <div className='SplashSection'>
      <ReactParticles className='ReactParticles' width='100%' height='100%' params={particlesParam} />
      <div className='SplashSection-content'>
        <h2>Howdy! I'm Warren Schrader.</h2>
        <h3>
          I'm a <span>
            <TextLoop>
              <span>front-end</span>
              <span>back-end</span>
              <span>full-stack</span>
            </TextLoop> 
          </span> web developer.
        </h3>
      </div>
    </div>
  );
}

export default SplashSection;