import React from 'react';
import styles from './Modal.module.scss';
import PropTypes from 'prop-types';
import Form from '../Form/Form';

const Modal = ({ closeModalFn }) => (
  <div className={styles.wrapper}>
    <button onClick={closeModalFn} className={styles.closeButton} />
    <Form />
  </div>
);

Modal.propTypes = {
  closeModalFn: PropTypes.func,
};

export default Modal;