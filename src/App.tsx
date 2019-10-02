import React, {useState, useEffect} from 'react';
import './App.css';
import SplashSection from './SplashSection';
import NavBarComponent from './NavBarComponent';
import BioComponent from './BioComponent';
import SkillsComponent from './SkillsComponent';
import ProjectsComponent from './ProjectsComponent';
import ContactComponent from './ContactComponent';

const App: React.FC = () => {
  const [bioTrigger, setBioTrigger] = useState<null | number>(null);
  const [skillsTrigger, setSkillsTrigger] = useState<null | number>(null);
  const [projectsTrigger, setProjectsTrigger] = useState<null | number>(null);
  const [contactTrigger, setContactTrigger] = useState<null | number>(null);

  const [activeNav, setActiveNav] = useState('splash');

  let divRef = React.createRef<HTMLDivElement>();

  const handleScroll = (e: any) => {
    const scrollingElement = e.target.scrollingElement;
    const node = divRef.current;

    if (node && bioTrigger && skillsTrigger && projectsTrigger && contactTrigger) {
      // look up scroll position to determine which navlink in the nav bar should be active
      if(scrollingElement.scrollTop < bioTrigger) {
        setActiveNav('splash');
      } else if(scrollingElement.scrollTop >= bioTrigger && scrollingElement.scrollTop < skillsTrigger) {
        setActiveNav('bio');
      } else if(scrollingElement.scrollTop >= skillsTrigger && scrollingElement.scrollTop < projectsTrigger) {
        setActiveNav('skills');
      } else if(scrollingElement.scrollTop >= projectsTrigger && (scrollingElement.scrollTop + scrollingElement.clientHeight + 1) <= node.clientHeight) {
        setActiveNav('projects');
      } else {
        setActiveNav('contact');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });

  return (
    <div className="App" ref={divRef}>
      <SplashSection />
      <NavBarComponent activeNav={activeNav}/>
      <BioComponent setTrigger={setBioTrigger}/>
      <SkillsComponent setTrigger={setSkillsTrigger}/>
      <ProjectsComponent setTrigger={setProjectsTrigger}/>
      <ContactComponent setTrigger={setContactTrigger}/>
    </div>
  );
}

export default App;
