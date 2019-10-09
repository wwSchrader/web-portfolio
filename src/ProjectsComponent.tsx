import React, {useState, useEffect} from 'react';
import './ProjectsComponent.css';
import {useTrail, animated} from 'react-spring';
import ProjectsComponentContainer from './ProjectsComponentContainer';

const projects = [
  {
    name: 'Beer Buds',
    url: './images/beer-buds.png',
    description: 'A full stack web application to track people going to venues. Tech stack includes: React, Express, Mongoose, & Node.',
    webLink: 'https://beer-buds.herokuapp.com/',
    githubLink: 'https://github.com/wwSchrader/beer-buds',
  },
  {
    name: 'Book Brain',
    url: './images/book-brain.png',
    description: 'A full stack web application to simulate online book trading. Tech stack includes: React, Express, Mongoose, & Node.',
    webLink: 'https://book-brain.herokuapp.com/',
    githubLink: 'https://github.com/wwSchrader/book-brain',
  },
  {
    name: 'Game of Life',
    url: './images/game-of-life.png',
    description: 'A web application where you can play the Game of Life!',
    webLink: 'https://wwschrader.github.io/game-of-life/',
    githubLink: 'https://github.com/wwSchrader/game-of-life',
  },
  {
    name: 'Howling',
    url: './images/howling.png',
    description: 'A full stack twitter clone. Tech stack includes: React, Express, Node, & Mongoose.',
    webLink: 'https://howling.herokuapp.com',
    githubLink: 'https://github.com/wwSchrader/howler',
  },
  {
    name: 'React Rougelike',
    url: './images/react-roguelike.png',
    description: 'A web application where you play a dungeon crawler.',
    webLink: 'https://wwschrader.github.io/react-rougelike/',
    githubLink: 'https://github.com/wwSchrader/react-rougelike',
  },
  {
    name: 'Voting App',
    url: './images/voting-app.png',
    description: 'A full stack web application where you vote on surveys. Tech stack includes: React, Express, Node, & Mongoose.',
    webLink: 'https://pure-sands-28481.herokuapp.com/',
    githubLink: 'https://github.com/wwSchrader/voting-app',
  },
];

interface IProps {
  setTrigger: React.Dispatch<React.SetStateAction<number | null>>,
}

const ProjectsComponent: React.FC<IProps> = (props) => {
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

    if (node && scrollingElement) {
      if ((scrollingElement.clientHeight + scrollingElement.scrollTop) > (node.offsetTop + 200)) {
        setShowProject(true);
      }
    }
  };

  useEffect(() => {
    const node = divRef.current;
    if (node) {
      props.setTrigger(node.offsetTop);
    }

    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  });

  return (
    <div id='projects' className='ProjectsComponent' ref={divRef}>
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
