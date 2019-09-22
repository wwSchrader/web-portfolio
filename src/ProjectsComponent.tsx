import React, {useState, useEffect} from 'react';
import './ProjectsComponent.css';
import {useTrail, animated} from 'react-spring';
import ProjectsComponentContainer from './ProjectsComponentContainer';

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
  const [showProject, setShowProject] = useState(false);

  const trail = useTrail(projects.length, {
    from: {
      opacity: 0,
      transform: 'scale3d(1,1,1)',
    },
    opacity: showProject ? 1 : 0,
    transform: showProject ? 'scale3d(1,1,1)' : 'scale3d(0,0,0)',
  });

  let divRef = React.createRef<HTMLDivElement>();

  const handleScroll = (e: any) => {
    const scrollingElement = e.target.scrollingElement;
    const node = divRef.current;

    if (node) {
      if ((scrollingElement.clientHeight + scrollingElement.scrollTop) > (node.offsetTop + 200)) {
        setShowProject(true);
      } else {
        setShowProject(false);
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
    <div ref={divRef}>
      <h3>Projects Component</h3>
      <div className='projects-container'>
        {trail.map(({...props}, index) => (
          <animated.div
            className={'single-project-container'}
            key={projects[index].name}
            style={props}
          >
            <ProjectsComponentContainer project={projects[index]}/>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsComponent;
