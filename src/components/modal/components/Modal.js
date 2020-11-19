import React from "react";
import ReactDOM from "react-dom";
import { X } from "react-feather";
import styles from "../styles/Modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
  isOpen
    ? document.body.classList.add("modalActive")
    : document.body.classList.remove("modalActive");

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} />
      <div
        className={styles.container}
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className={styles.modalContent}>
          <span className={styles.closeButton} onClick={closeModal}>
            <X />
          </span>
          {children}
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
