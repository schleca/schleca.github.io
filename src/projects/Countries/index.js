import React from 'react';
import styles from './countries.module.scss';

import Wrapper from '../../components/Wrapper';

import CountryCover from '../../images/projects/countries/countries-illustrator.jpg';
import CountryScreenshot from '../../images/projects/countries/countries-screenshot.jpg';
import oldCat from '../../images/projects/cat-me/old-cat.png';
import newCat from '../../images/projects/cat-me/new-cat.png';

const CatMe = () => {
  return (
    <div className={styles.container}>
      <img
        src={CountryCover}
        alt=""
        className={styles.screenshot} />
      <Wrapper className={styles.center}>
          <h2>The origination</h2>
          <p>I started drawing country shapes initially for another project because I wanted to demonstrate country locations with lightweight assets, but couldn't find consistently stylized country outlines. I started drawing just the countries I needed, and then couldn't resist the lure of a complete set and kept going until I had drawn all 205/196 countries<sup>1</sup>.</p>
          <h2>Why</h2>
          <p>I've used so many amazing open source assets and resources, and this seemed like the perfect opportunity to give a tiny piece back.</p>
          <h2>The project</h2>
          <p>To make the assets more accessible to a wider range of people, especially those who don't have access to Adobe Illustrator, I built a website where anyone can download any number of countries as SVGS, PNGS, or as Illustrator or Figma source files.</p>
          <h2>Techincal Decisions</h2>
          <p>Because I want to leave this site running in a free-for-me version as long as I can, I decided to forgo a server for the country assets. To do that, I convert all SVGs to PNGs using HTML Canvas in the browser instead of more traditionally in the backend.</p>
      </Wrapper>
      <img
        src={CountryScreenshot}
        alt=""
        className={styles.smallScreenshot} />
      <Wrapper className={styles.buttonContainer}>
        <button
          className={styles.button}
          onClick={() => {
            window.open("https://opensourcecountryshapes.herokuapp.com/")
          }}
        >
        View the live site
        </button>
        <button
          className={styles.buttonOutline}
          onClick={() => {
            window.open("https://github.com/schleca/countries")
          }}
        >
          View on Github
        </button>
      </Wrapper>

      <Wrapper className={styles.notes}>
        <p>1. As I wished this project to remain a-political, I included any territory or region that I thought someone else might consider a country. If I made a mistake and forgot to include one, let me know and I'll try to add it!</p>
      </Wrapper>
    </div>
  );
}

export default CatMe;
