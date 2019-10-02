import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Wrapper from '../../components/Wrapper';
import ArrowLink from '../../components/ArrowLink';
import BackToTop from '../../components/BackToTop';
import { projects } from '../../projects.constants';
import styles from './project.module.scss';

const Project = ({ match }) => {
  const data = projects.filter(project => project.isLive).find(project => project.slug === match.params.project);

  if (!data) {
    return <Redirect to="/projects" />;
  }

  const { project } = data;
  const ProjectContent = project.component ? project.component : () => <div>Add some content</div>;

  return (
    <div>
      <Wrapper className={styles.header}>
        <div className={styles.title}>
          <div className={styles['title-text']}>{project.title}</div>
          <div className={styles['subtitle-text']}>{project.subtitle}</div>
        </div>
        <div className={styles.role}>
          <div className={styles.label}>Role</div>
          <div className={styles.text}>{project.role}</div>
        </div>
        <div className={styles.technologies}>
          <div className={styles.label}>Technology</div>
          <div className={styles.text}>{project.technologies}</div>
        </div>
      </Wrapper>
      <div className={styles.content}><ProjectContent /></div>
      <Wrapper className={styles.footer}><ArrowLink url="/projects" text="View all work" /></Wrapper>
      <BackToTop />
    </div>
  );
}

export default withRouter(Project);
