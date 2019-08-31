import React from 'react';
import './App.css';
import SplashSection from './SplashSection';
import SkillsComponent from './SkillsComponent';
import ProjectsComponent from './ProjectsComponent';
import ContactComponent from './ContactComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <SplashSection />
      <SkillsComponent />
      <ProjectsComponent />
      <ContactComponent />
    </div>
  );
}

export default App;
