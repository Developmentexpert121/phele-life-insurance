import React,{useState} from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function DeleteModal(props) {
    

  return (
    <>
        {/* <Button variant="primary" onClick={props.handleShow}>
          Launch demo modal
        </Button> */}
  
        <Modal show={props.show} onHide={props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.deleteMsg} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={props.deleteFn}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}

