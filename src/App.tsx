import React from 'react';
import './App.css';
import SplashSection from './SplashSection';
import SkillsComponent from './SkillsComponent';
import ProjectsComponent from './ProjectsComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <SplashSection />
      <SkillsComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
