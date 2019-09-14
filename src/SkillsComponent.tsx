import React from 'react';
import './SkillsComponent.css';
import SkillsComponentLanguages from './SkillsComponentLanguages';
import SkillsComponentFrameworks from './SkillsComponentFrameworks';

const SkillsComponent: React.FC = () => {
  return (
    <div className='SkillsComponent'>
      <h3>Skills Component</h3>
      <SkillsComponentLanguages />
      <SkillsComponentFrameworks />
      <div>
        <h2>Databases</h2>
        <div>
          <img alt='' src='./images/mongodb-logo-rgb-j6w271g1xn.jpg' />
          <img alt='' src='./images/Redis_Logo.svg' />
          <img alt='' src='./images/sqlite-logo.svg' />
          <img alt='' src='./images/firebase-logo.svg' />
        </div>
      </div>
      <div>
        <div>
        <img alt='' src='./images/jest-logo.svg' />
          <img alt='' src='./images/mocha-logo.svg' />
          <img alt='' src='./images/chai-logo.png' />
        </div>
        <h2>Test Libraries</h2>
      </div>
      <div>
        <h2>Other</h2>
        <div>
          <img alt='' src='./images/heroku-logo.svg' />
          <img alt='' src='./images/github-logo.png' />
          <img alt='' src='./images/Git-logo.svg' />
          <img alt='' src='./images/redux-logo.png' />
          <img alt='' src='./images/Boostrap_logo.svg' />
          <img alt='' src='./images/mongoose-logo.png' />
          <img alt='' src='./images/socket-io.svg' />
          <img alt='' src='./images/passport-logo.png' />
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
