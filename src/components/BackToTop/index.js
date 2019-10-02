import React from 'react';
import ScrollTop from 'react-scrolltop-button';

import styles from './back-to-top.module.scss';

const BackToTop = () => {
  return (
    <ScrollTop 
      text=""
      breakpoint={0}
      className={styles.scrollTop}
    />
  );
}

export default BackToTop;
