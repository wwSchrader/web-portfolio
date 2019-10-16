import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import ProjectModal from './ProjectModal';

interface IProps {
  project: {
    name: string,
    url: string,
    description: string,
    webLink: string,
    githubLink: string,
  },
}

const ProjectsComponentContainer: React.FC<IProps> = (props) => {
  const [hover, setHover] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const imageSpring = useSpring({
    from: {
      opacity: 1,
    },
    opacity: hover ? 0.3 : 1,
    backgroundImage: 'url(' + props.project.url + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });

  const headerSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0,-50px,0)',
    },
    transform: hover ? 'translate3d(0,0px,0)' : 'translate3d(0,-50px,0)',
    opacity: hover ? 1 : 0,
  });

  const buttonSpring = useSpring({
    from: {
      opacity: 0,
      transform: 'translate3d(0,50px,0)',
    },
    transform: hover ? 'translate3d(0,0px,0)' : 'translate3d(0,50px,0)',
    opacity: hover ? 1 : 0,
  });

  function handleScrollOn() {
    setHover(true);
  };

  function handleScrollOff() {
    setHover(false);
  };

  function openProjectModal() {
    setOpenModal(true);
  }

  function closeProjectModal() {
    setOpenModal(false);
  }

  return (
    <div onMouseOver={handleScrollOn} onMouseLeave={handleScrollOff}>
      <animated.div className='project-image' style={imageSpring}></animated.div>
      <animated.h2 className={'project-header'} style={headerSpring}>{props.project.name}</animated.h2>
      <animated.button className='project-button' style={buttonSpring} onClick={openProjectModal}>Click Here</animated.button>
      <ProjectModal project={props.project} isOpen={openModal} closeWindow={closeProjectModal}/>
    </div>
  );
}

export default ProjectsComponentContainer;