import React from 'react';

import Wrapper from '../../components/Wrapper';
import Presentation from './Presentation';
import ProjectCards from '../../components/ProjectCards';
import BackToTop from '../../components/BackToTop';

const Home = () => {
  return (
    <Wrapper>
      <Presentation />
      <ProjectCards />
      <BackToTop />
    </Wrapper>
  );
}

export default Home;
