
import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
