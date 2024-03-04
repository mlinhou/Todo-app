import React, { useState } from 'react'
import './item.css'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';

export default function Item({ handleDelete, note , handleEdit}) {

  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useState('');

  const openEditModal = () => {
    setIsOpen(true);
  };

  const closeEditModal = () => {
    setIsOpen(false);
    setTextInput(note.task)
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const edit = () => {
    handleEdit(note, textInput);
    closeEditModal();
  }

  return (
    <div className='item-container'>
        <div className='item-text'>{note.task}</div>
        <div className='icons'>
          <button onClick={openEditModal}>
            <FontAwesomeIcon icon={faPen} />
          </button>
          <button onClick={ () => handleDelete(note.id)}>Delete</button>
        </div>

        <Modal
          className='modal'
          overlayClassName="custom-overlay"
          isOpen={isOpen}
          onRequestClose={closeEditModal}
        >
          <input
              className='input-text'
              type="text"
              value={textInput}
              onChange={handleChange}
              placeholder="Enter text..."
            />
        <button onClick={edit}>Edit Note</button> {/* Close button inside modal */}
        
        </Modal>
    </div>
  )
}
