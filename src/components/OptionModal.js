import React from 'react';
import Modal from 'react-modal';


Modal.setAppElement("#app")

const OptionModal = (props) => (
  <div>
   <Modal className="modal"
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClearSelectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}>
    
  
    <h3 className="modal__title">Selected Option</h3>
   {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" 
    onClick={props.handleClearSelectedOption}
    >Okay</button>
  </Modal>
  </div>
);

export default OptionModal;