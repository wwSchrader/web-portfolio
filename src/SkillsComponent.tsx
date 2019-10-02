import React, {useEffect} from 'react';
import './SkillsComponent.css';
import SkillsComponentLanguages from './SkillsComponentLanguages';
import SkillsComponentFrameworks from './SkillsComponentFrameworks';
import SkillsComponentDatabases from './SkillsComponentDatabases';
import SkillsComponentTests from './SkillsComponentTests';
import SkillsComponentOther from './SkillsComponentOther';

interface IProps {
  setTrigger: React.Dispatch<React.SetStateAction<number | null>>,
}

const SkillsComponent: React.FC<IProps> = (props) => {
  let divRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const node = divRef.current;
    if (node) {
      props.setTrigger(node.offsetTop)
    }
  });

  return (
    <div id='skills' className='SkillsComponent' ref={divRef}>
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
