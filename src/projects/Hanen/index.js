import React from 'react';
import styles from './hanen.module.scss';

import Wrapper from '../../components/Wrapper';

import HomeScreenshot from '../../images/projects/hanen/hanen-home-screenshot.jpg';
import FullHomeScreenshot from '../../images/projects/hanen/hanen-home-full-page.jpg';
import ProgramsScreenshot from '../../images/projects/hanen/hanen-programs.jpg';
import ShopScreenshot from '../../images/projects/hanen/hanen-shop.jpg';
import TrainingScreenshot from '../../images/projects/hanen/hanen-training.jpg';
import CheckoutScreenshot from '../../images/projects/hanen/hanen-checkout.jpg';

const Hanen = () => {
  return (
    <div className={styles.container}>
      <img
        src={HomeScreenshot}
        alt=""
        className={styles.screenshot} />
      <Wrapper className={styles.center}>
          <h2>The project</h2>
          <p>Hanen is a global nonprofit that trains professionals to train parents with children with language delays.</p>
          <h2>My role</h2>
          <p>As part of my role at the Hanen Center, I've been involved in the rebranding and rebuilding of their website. My duties were taking the design to the next level as well as writing the frontend code to integrate with Kentico's ASP.NET CMS.
          </p>
          <h2>Key achievements</h2>
          <ul>
            <li>Built a scaleable atomic design system that could be easily transferred into a customized bootstrap library, with reuseable components (webparts) that can be quickly and efficiently repurporsed for Hanen's future feature needs.</li>
            <li>Guided project to use accessibilty best practices for design & development. (i.e., adjusting brand colors to meet contrast levels, enforcing use of alt tags and aria-labels, testing with screenreaders & keyboard navigation). </li>
            <li>Documented processes to help maintain performance as the website grows with content and features (i.e. compressing assets, loading scripts appropriately, and routine performance testing).</li>
            <li>Became a master asset optimizer. (The largest asset on the website is currently a 30 second full-screen video, at around 4mb).</li>
          </ul>
      </Wrapper>
        <img
        src={FullHomeScreenshot}
        alt="Home screenshot of prototype"
        className={styles.smallScreenshot} />
        <img
        src={ProgramsScreenshot}
        alt="Programs for parents screenshot of prototype"
        className={styles.smallScreenshot} />
        <img
        src={CheckoutScreenshot}
        alt="Checkout screenshot of prototype"
        className={styles.smallScreenshot} />
        <img
        src={ShopScreenshot}
        alt="Shop screenshot of prototype"
        className={styles.smallScreenshot} />
        <img
        src={TrainingScreenshot}
        alt="Training for professionals screenshot"
        className={styles.smallScreenshot} />
      <Wrapper className={styles.center}>
          <h2>Want to know more?</h2>
          <p className={styles.link}><a href="mailto:schlecht220@gmail.com">Contact me</a> for code samples.</p>
      </Wrapper>
    </div>
  );
}

export default Hanen;
