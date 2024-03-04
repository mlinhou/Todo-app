import React, { useState, useEffect } from 'react'
import Item from './Item'
import Modal from 'react-modal';
import { v4 as uuidv4 } from 'uuid';
function ItemList() {

  const [itemList, setItemList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [textInput, setTextInput] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setTextInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemList([...itemList, {id: uuidv4(), task: textInput, isEditing: false}]);
    setTextInput('');
    closeModal();
  };

  const handleEdit = (note, editedText) => {
    const index = itemList.indexOf(note);
    itemList[index].task = editedText;
    setItemList(itemList);
  }

  const handleDelete = (id) => {
    setItemList(itemList.filter(todo => todo.id !== id))
  }

  const showList = () => {
    console.log(itemList);
  }

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem('myData'));
  //   if(savedData){
  //     setItemList(savedData);
  //   }
  // }, []);

  // // Save data to localStorage whenever it changes
  // useEffect(() => {
  //   localStorage.setItem('myData', JSON.stringify(itemList))
  // }, [itemList]); // data is the dependency

  
  return (
    <div>
      {itemList.map((item) => (
        <Item note={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
      ))
      }
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
      >
        <input
            type="text"
            value={textInput}
            onChange={handleChange}
            placeholder="Enter text..."
          />
        <button onClick={handleSubmit}>Save Note</button> {/* Close button inside modal */}
        
      </Modal>
      <button onClick={showList}>Show list</button>
    </div>

  )
}

export default ItemList