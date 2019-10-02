import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import styles from './arrow-link.module.scss';
import arrow from '../../images/arrow.png';

const ArrowLink = ({ text, url }) => {
  return (
    <div className={styles['container']}>
      <Link to={url} className={styles['link']}>
        {text}
        <img src={arrow} alt="" className={styles['arrow']} />
        
      </Link>
      <div className={styles['underline']}></div>
    </div>
  );
}

ArrowLink.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default ArrowLink;
