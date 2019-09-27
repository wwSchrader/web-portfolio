import React from 'react';
import Modal from 'react-modal';
import './ProjectModal.css';

interface IProps {
  project: {
    name: string,
    url: string,
    description: string,
    webLink: string,
    githubLink: string,
  },
  isOpen: boolean,
  closeWindow: () => void,
}

const ProjectModal: React.FC<IProps> = (props) => {
  function closeModal() {
    props.closeWindow();
  }

  function onClick(link: string): void {
    window.open(link, '_blank');
  }

  return (
    <Modal
    isOpen={props.isOpen}
    onRequestClose={closeModal}
    closeTimeoutMS={500}
    >
      <img className='modal-project-image' src={props.project.url} alt={props.project.name + ' logo'}/>
      <h2>{props.project.name}</h2>
      <p>{props.project.description}</p>
      <button className='modal-button' onClick={() => onClick(props.project.webLink)}>Project Site</button>
      <button className='modal-button' onClick={() => onClick(props.project.githubLink)}>GitHub Repository</button>
      <button className='modal-button' onClick={closeModal}>Close</button>
    </Modal>
  );
}

export default ProjectModal;