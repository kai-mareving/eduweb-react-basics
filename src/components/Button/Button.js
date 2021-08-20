import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = ({ children, href, secondary, ...props }) => {

  const buttonClass = secondary ? styles.secondary : styles.button;

  return (
    <>
      {
        href ? (
          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={buttonClass}
          >
            {children}
          </a>
        ) : (
          <button className={buttonClass} {...props}>
            {children}
          </button>
        )
      }
    </>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  secondary: PropTypes.bool,
};

export default Button;