import React from 'react';
import styles from './FormRadio.module.scss';
import PropTypes from 'prop-types';

const Radio = ({ id, checked, changeFn, children }) => (
  <label className={styles.radio}>
    <input
      id={id}
      type="radio"
      checked={checked}
      onChange={changeFn}
    />
    <div className={styles.radioButton} />
    {children}
  </label>
);

Radio.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  changeFn: PropTypes.func,
  children: PropTypes.node,
};

export default Radio;