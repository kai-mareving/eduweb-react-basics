import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import HeaderNavigation from './HeaderNavigation';
import styles from './Header.module.scss';
import logoImage from '../../assets/images/logo.svg';

const Header = ({ openModalFn }) => (
  <header className={styles.wrapper}>
    <img className={styles.logo} src={ logoImage } alt='FavNote logo' />
    <HeaderNavigation />
    <Button onClick={openModalFn} secondary>new item</Button>
  </header>
);

Header.propTypes = {
  openModalFn: PropTypes.func,
};

export default Header;