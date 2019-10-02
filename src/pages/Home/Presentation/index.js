import React from 'react';

import ArrowLink from '../../../components/ArrowLink';
import Text from '../../../components/Text';

import styles from './presentation.module.scss';

const Presentation = () => {
  return (
    <div className={styles.container}>
      <Text type="presentation">
        I am a Frontend Developer based in Toronto, Canada. I have a strong focus on
        the intersection of frontend development and design.
      </Text>
      <ArrowLink url="/about" text="More info" />
    </div>
  );
}

export default Presentation;
