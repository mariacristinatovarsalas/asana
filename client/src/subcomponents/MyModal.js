import React, { useState } from 'react';
import logo from '../images/logo.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function MyModal(props) {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="modal_btn" variant="primary" onClick={handleShow}>
        {props.modal_btn}
      </Button>

      <div className="flex_container_center">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal_header">
          <img src={logo} className="logo" alt="Logo Asana"></img>    
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
      </Modal>
      </div>
    </>
  );
}

export default MyModal