import React from 'react';
import './SkillsComponent.css';
import SkillsComponentLanguages from './SkillsComponentLanguages';
import SkillsComponentFrameworks from './SkillsComponentFrameworks';
import SkillsComponentDatabases from './SkillsComponentDatabases';
import SkillsComponentTests from './SkillsComponentTests';
import SkillsComponentOther from './SkillsComponentOther';

const SkillsComponent: React.FC = () => {
  return (
    <div className='SkillsComponent'>
      <h3>Skills Component</h3>
      <SkillsComponentLanguages />
      <SkillsComponentFrameworks />
      <SkillsComponentDatabases />
      <SkillsComponentTests />
      <SkillsComponentOther />
    </div>
  );
}

export default SkillsComponent;
