import React from "react";
import classes from "./modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose} />
      <dialog className={classes.modal}>{children}</dialog>
    </>
  );
};

export default Modal;
