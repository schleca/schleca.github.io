import React from 'react';
import PropTypes from 'prop-types';

import styles from './wrapper.module.scss';

const Wrapper = ({ children, className = null }) => {
  return (
    <div className={`${styles.wrapper} ${className}`}>{children}</div>
  );
}

Wrapper.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.any
}

export default Wrapper;
