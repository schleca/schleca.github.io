import React from 'react';
import Wrapper from '../../components/Wrapper';
import styles from './experiments.module.scss';

const importAll = r => r.keys().map(r);

const images = importAll(require.context(
  '../../images/experiments/',
  false,
  /\.(png|jpe?g|svg|gif)$/
));

const Experiments = () => {
  return (
    <Wrapper className={styles.experiments}>
      {images.map((image, index) => 
        <img src={image} alt="" key={index} />
      )}
    </Wrapper>
  );
}

export default Experiments;
