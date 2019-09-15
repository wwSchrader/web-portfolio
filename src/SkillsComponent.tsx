import React from 'react';
import './SkillsComponent.css';
import SkillsComponentLanguages from './SkillsComponentLanguages';
import SkillsComponentFrameworks from './SkillsComponentFrameworks';
import SkillsComponentDatabases from './SkillsComponentDatabases';
import SkillsComponentTests from './SkillsComponentTests';

const SkillsComponent: React.FC = () => {
  return (
    <div className='SkillsComponent'>
      <h3>Skills Component</h3>
      <SkillsComponentLanguages />
      <SkillsComponentFrameworks />
      <SkillsComponentDatabases />
      <SkillsComponentTests />
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
