import React from 'react';
import './ProjectsComponent.css';

const ProjectsComponent: React.FC = () => {
  return (
    <div className='ProjectsComponent'>
      <h3>Projects Component</h3>
      <img className={'project-img'} src={'./images/beer-buds.png'} />
      <img className={'project-img'} src={'./images/book-brain.png'} />
      <img className={'project-img'} src={'./images/game-of-life.png'} />
      <img className={'project-img'} src={'./images/howling.png'} />
      <img className={'project-img'} src={'./images/react-roguelike.png'} />
      <img className={'project-img'} src={'./images/voting-app.png'} />
    </div>
  );
}

export default ProjectsComponent;
