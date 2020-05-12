import React from "react";
import { Modal } from "react-bootstrap";

const LearnTestModal = (props) => {

  return (
    <div>
      <Modal
        centered
        size="xl"
        show={props.quickTest}
      >
        <Modal.Title>{props.title}</Modal.Title>
        <Modal.Body>
          <div>
            <h1>{props.body}</h1>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LearnTestModal;
