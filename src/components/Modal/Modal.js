import React from "react";
import "./Modal.css";

const Modal = ({
  description,
  showModal,
  closeModal,
  modalBackgroundStyle,
  modalContainerStyle = {},
  closeIconeStyle = {},
  discriptionStyle = {}
}) => {
  return (
    showModal && (
      <div
        onClick={closeModal}
        className="modal_background"
        style={modalBackgroundStyle}
      >
        <div className="modal_container" style={modalContainerStyle}>
          <div className="close_icon" style={{ closeIconeStyle }}>
            X
          </div>
          <div className="discription" style={discriptionStyle}>
            {description}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
