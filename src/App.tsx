import React from 'react';
import './App.css';
import SplashSection from './SplashSection';
import SkillsComponent from './SkillsComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <SplashSection />
      <SkillsComponent />
    </div>
  );
}

export default App;
