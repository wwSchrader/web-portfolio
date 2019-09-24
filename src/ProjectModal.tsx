import React from 'react';
import Modal from 'react-modal';

interface IProps {
  project: {
    name: string,
    url: string,
  },
  isOpen: boolean,
  closeWindow: () => void,
}

const ProjectModal: React.FC<IProps> = (props) => {
  function closeModal() {
    props.closeWindow();
  }

  return (
    <Modal
    isOpen={props.isOpen}
    onRequestClose={closeModal}
    >
      <img src={props.project.url} alt={props.project.name + ' logo'}/>
      <h2>{props.project.name}</h2>
    </Modal>
  );
}

export default ProjectModal;