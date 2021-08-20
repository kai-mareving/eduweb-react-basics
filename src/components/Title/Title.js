import React from 'react';
import styles from './Title.module.scss';
import PropTypes from 'prop-types';

const Title = ({children}) => (
  <h2 className={styles.title}>{ children }</h2>
);

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;