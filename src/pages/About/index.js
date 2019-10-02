import React from 'react';

import Wrapper from '../../components/Wrapper';
import Text from '../../components/Text';

import Github from '../../images/icons/logo-github.png';
import LinkedIn from '../../images/icons/logo-linkedin.png';
import CV from '../../images/AlissaSchlecht-CV.pdf';

import alissa from '../../images/alissa-headshot.jpg';
import styles from './about.module.scss';

import { technologies, books, concepts } from './constants';

const About = () => {
  return (
    <Wrapper className={styles.container}>

    <div className={styles.alissa}>

      <div className={styles.alissa}>
        <img src={alissa} alt="" className={styles['alissa-img']} />
      </div>
      <div className={styles['show-desktop']}>
        <div className={styles.social}>
          <a
          href="https://github.com/schleca"
          target="_blank"
          >
            <img
            src={Github}
            alt="Github logo"
            className={styles.logo}
            />
          </a>
          <a
          href="https://www.linkedin.com/in/alissa-schlecht/"
          target="_blank"
          >
            <img
            src={LinkedIn}
            alt="LinkedIn"
            className={styles.logo}
            />
          </a>
        </div>
        <p className={styles.cv}>
          <a
          href={CV}
          target="_blank"
          >
            Download my CV
          </a>
        </p>
      </div>
    </div>
      <div className={styles.text}>
        <Text type="title">
          Hi
        </Text>
        <Text type="paragraph">
          I'm an artist at heart and really enjoy the craftmanship of bringing projects to life with code. I love the technical challenge of a complex problem as much as the delicate balance of implementing an effective UI. I fell in love with JavaScript because it's a language that allows me to do both.
        </Text>
        <Text type="paragraph">
        I'm also just a human who likes to ride bikes and grow cucumbers in my back garden.
        </Text>

        <div className={styles['technologies-container']}>
          <Text type="title">
            Technologies
          </Text>
          <ul>
          {technologies.map((technology, index) =>
            <li key={index} className={styles.technologies}>{technology.name}</li>
          )}
          </ul>
        </div>
        <div className={styles['show-mobile']}>
          <div className={styles.social}>
            <a
            href="https://github.com/schleca"
            target="_blank"
            >
              <img
              src={Github}
              alt="Github logo"
              className={styles.logo}
              />
            </a>
            <a
            href="https://www.linkedin.com/in/alissa-schlecht/"
            target="_blank"
            >
              <img
              src={LinkedIn}
              alt="LinkedIn"
              className={styles.logo}
              />
            </a>
          </div>
          <p className={styles.cv}>
            <a
            href={CV}
            target="_blank"
            >
              Download my CV
            </a>
          </p>
        </div>
      </div>

    </Wrapper>
  );
}

export default About;
