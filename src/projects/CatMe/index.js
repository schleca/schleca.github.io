import React from 'react';
import styles from './cat-me.module.scss';

import Wrapper from '../../components/Wrapper';

import CatScreenshot from '../../images/projects/cat-me/cat-screenshot.png';
import oldCat from '../../images/projects/cat-me/old-cat.jpg';
import newCat from '../../images/projects/cat-me/new-cat.png';

const CatMe = () => {
  return (
    <div className={styles.container}>
      <img
        src={CatScreenshot}
        alt=""
        className={styles.screenshot} />

      <Wrapper className={styles.center}>
        <div className={styles['old-cat-content']}>
          <h2>The original challenge</h2>
          <p>
            The original CatMe was the result of a 5 line code challenge where no rules
            applied except that there must not be more than 5 lines of code (not including
            script tags). In exactly 5 lines, CatMe offered you the ability to see what your
            spirit cat and its associated name would be. If you didn’t like it, you could
            simply get a new one with the click of a button. CatMe utilized The Cat API and
            its assortment of GIFs.
          </p>
        </div>
        <img
          src={oldCat}
          alt="Old version of Cat Me"
          className={styles['cat-img']}
        />
        <div className={styles['cat-content']}>
          <p>Here we have what appears to be half of a feline form in action, dubbed questionably accurately, 'Cleo-cat-ra'.</p>
        </div>
      </Wrapper>
      <Wrapper className={styles.center}>
        <div className={styles['cat-content']}>
          <h2>The new redesign</h2>
          <p>
            After living for three years in relative but aesthetically barren fame,
            I decided to give CatMe a facelift in order to honor the true glory of
            cats. Unfortunately I've now gone far over 5 lines of code (more than
            5 files even), but the payoff is hopefully in the joy of watching a cat rendered as a GIF
            through a tv, through another screen.
          </p>
        </div>
        <img
          src={newCat} alt="New design for Cat Me"
          className={styles['cat-img']}
        />
        <div className={styles['cat-content']}>
          <p>While the first version claimed its bragging rights with 5 lines of code, the second version has been (perhaps overengineered) with React so that only the tv content refreshes with a new cat. Worth it!</p>
        </div>
      </Wrapper>
      <Wrapper className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => {
            window.open("https://catmetv.herokuapp.com/")
          }}
        >
        Go see the cats
        </button>
        <button
          className={styles.buttonOutline}
          onClick={() => {
            window.open("https://github.com/schleca/catme")
          }}
        >
        View on github
        </button>
      </Wrapper>
    </div>
  );
}

export default CatMe;
