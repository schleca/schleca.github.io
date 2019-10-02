import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './internal-link.module.scss';

const InternalLink = ({ content, url }) => {
  return (
    <Link to={url} className={styles['internal-link']}>{content}</Link>
  );
}

InternalLink.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  url: PropTypes.string.isRequired
}

export default InternalLink;
