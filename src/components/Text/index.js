import React from 'react';
import PropTypes from 'prop-types';

import styles from './text.module.scss';

const Text = ({ children, type }) => {
  return (
    <p className={styles[type]}>{children}</p>
  );
}

Text.defaultPropTypes = {
  type: 'paragraph',
}

Text.propTypes = {
  type: PropTypes.oneOf(['title', 'paragraph', 'presentation', 'annotation']),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
}

export default Text;
