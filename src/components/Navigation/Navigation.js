import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <ul className={styles.navlist}>
    <li className={styles.navelem}><Link to='/'>Twitters</Link></li>
    <li className={styles.navelem}><Link to='/articles'>Articles</Link></li>
    <li className={styles.navelem}><Link to='/notes'>Notes</Link></li>
  </ul>
);

export default Navigation;