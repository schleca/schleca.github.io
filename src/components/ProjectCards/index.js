import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../../projects.constants';

import styles from './project-cards.module.scss';

const ProjectCards = () => {
  return (
    <div className={styles.container}>
      {projects.filter(project => project.isLive).map(project => <ProjectCard project={project} key={project.slug} />)}
    </div>
  );
}

export default ProjectCards;
