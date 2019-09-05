import React from 'react';
import './SkillsComponent.css';

const SkillsComponent: React.FC = () => {
  return (
    <div className='SkillsComponent'>
      <h3>Skills Component</h3>
      <div className='skills-programlang'>
        <h2 className='skills-programlang-header'>Languages</h2>
        <div>
          <img alt='' src='./images/HTML5_logo_and_wordmark.svg' />
          <img alt='' src='./images/CSS3_logo_and_wordmark.svg' />
          <img alt='' src='./images/js.png' />
          <img alt='' src='./images/Java_logo.svg' />
        </div>
      </div>
      <div>
        <div>
          <img alt='' src='./images/nodejs-new-pantone-black.png' />
          <img alt='' src='./images/express-facebook-share.png' />
          <img alt='' src='./images/iconfinder_react.js_logo_1174949.svg'/>
          <img alt='' src='./images/angular.svg' />
        </div>
        <h2>Frameworks</h2>
      </div>
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
