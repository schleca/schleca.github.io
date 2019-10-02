import React from 'react';
import Wrapper from '../Wrapper';
import InternalLink from '../InternalLink';
import { withRouter } from 'react-router-dom';

import styles from './header.module.scss';

const Header = ({ location }) => {
  return (
    <Wrapper>
      <header className={styles.header}>
        <h1 className={styles.title}><InternalLink url="/" content="Alissa Schlecht" /></h1>
        <nav>
          <ul className={styles.menu}>
            <li className={location.pathname === '/' ? styles.selected : null}>
              <InternalLink url="/" content="Home" />
            </li>
            <li className={location.pathname.includes('/project') ? styles.selected : null}>
              <InternalLink url="/projects" content="Projects" />
            </li>
            {/*<li className={location.pathname === '/experiments' ? styles.selected : null}>
              <InternalLink url="/experiments" content="Experiments" />
            </li>*/}
            <li className={location.pathname === '/about' ? styles.selected : null}>
              <InternalLink url="/about" content="About" />
            </li>
          </ul>
        </nav>
      </header>
    </Wrapper>
  );
}

export default withRouter(Header);
