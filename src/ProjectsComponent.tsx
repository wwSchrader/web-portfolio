import React from 'react';
import './ProjectsComponent.css';

const projects = [
  {
    name: 'Beer Buds',
    url: './images/beer-buds.png',
  },
  {
    name: 'Book Brain',
    url: './images/book-brain.png',
  },
  {
    name: 'Game of Life',
    url: './images/game-of-life.png',
  },
  {
    name: 'Howling',
    url: './images/howling.png',
  },
  {
    name: 'React Rougelike',
    url: './images/react-roguelike.png',
  },
  {
    name: 'Voting App',
    url: './images/voting-app.png',
  },
];

const ProjectsComponent: React.FC = () => {
  return (
    <div>
      <h3>Projects Component</h3>
      <div className='projects-container'>
        {projects.map((project) => (
          <div className={'single-project-container'}>
            <div className='project-image' style={{backgroundImage: 'url(' + project.url + ')'}}></div>
            <h2 className={'project-header'}>{project.name}</h2>
            <button className='project-button'>Click Here</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
