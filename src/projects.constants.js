import hanenCover from './images/projects/hanen/hanen-cover.png';
import CountriesCover from './images/projects/countries/countries-cover.png';
import catCover from './images/projects/cat-me/cat-cover.png';

import Hanen from './projects/Hanen';
import CatMe from './projects/CatMe';
import Countries from './projects/Countries';


export const projects = [
  {
    slug: 'hanen',
    card: {
      title: 'The Hanen Center',
      description: 'Re designing and frontend coding at scale for a non profit website.',
      cover: hanenCover,
    },
    project: {
      title: 'The Hanen Center',
      subtitle: 'Re designing and frontend coding at scale for a non profit website.',
      role: 'Front End Developer & Designer',
      technologies: 'HTML/SASS, JavaScript, Kentico CMS',
      component: Hanen
    },
    isLive: true,
  },
  {
    slug: 'downloadable-countries',
    card: {
      title: 'Downloadable Countries',
      description: 'Open source illustrated country shapes',
      cover: CountriesCover,
    },
    project: {
      title: 'Downloadable Countries',
      subtitle: 'Open source illustrated country shapes',
      role: 'Developer & Designer',
      technologies: 'React.JS, HTML Canvas, Node.JS, Illustrator',
      component: Countries
    },
    isLive: true,
  },
  {
    slug: 'cat-me',
    card: {
      title: 'Cat Me',
      description: `I have a cat addiction and don't know how to get out of it. 
        So I decided to celebrate a five line code challenge by adding more essential content to 
        the world wild web: Cats.`,
      cover: catCover,
    },
    project: {
      title: 'Cat Me',
      subtitle: 'I have a cat addiction and don\'t know how to get out of it.',
      role: 'Developer & Designer',
      technologies: 'The Cat API, React.JS',
      component: CatMe
    },
    isLive: true,
  },
];