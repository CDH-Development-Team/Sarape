import React, { useEffect, useRef } from "react";
import CloseIcon from "../../CloseIcon";
import Button from "../button/Button";
// import CloseIcon from "../CloseIcon";
import styles from "./modal.module.css";

const Modal2 = ({ modalStyle, children, show, onClose, backdropStyle, show1, show2, show3, show4, show5, show6, show7, show8, show9 }) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  useEffect(() => {
    if (show1) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show1]);
  useEffect(() => {
    if (show2) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show2]);
  useEffect(() => {
    if (show3) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show3]);
  useEffect(() => {
    if (show4) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show4]);
  useEffect(() => {
    if (show5) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show5]);
  useEffect(() => {
    if (show6) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show6]);
  useEffect(() => {
    if (show7) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show7]);
  useEffect(() => {
    if (show8) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show8]);
  useEffect(() => {
    if (show9) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show9]);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
   
        <div style={modalStyle} className={styles.modal__wrap}>
        <Button
          onClick={onClose}
          style={{
            width: 60,
            height: 40,
            position: "absolute",
            top: 0,
            right: "10px",
            margin: "1rem",
            cursor: "pointer"
          }}
          className={styles.close__btn}
        >
          <CloseIcon
            height="20px"
            width="20px"
            className={styles.close__icon}
          />
          Close
        </Button>
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal2;
