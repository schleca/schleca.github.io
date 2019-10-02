import React from 'react';
import PropTypes from 'prop-types';
import InternalLink from '../../InternalLink';
import Text from '../../Text';
import ArrowLink from '../../ArrowLink';

import styles from './project-card.module.scss';

const ProjectCard = ({ project: { slug, card } }) => {
  return (
    <div className={styles.container}>
      <InternalLink content={<img src={card.cover} alt="" className={styles.cover} />} url={`/projects/${slug}`} />
      <Text type="title">{card.title}</Text>
      <Text type="presentation">{card.description}</Text>
      <ArrowLink text="View project" url={`/projects/${slug}`} />
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ProjectCard;
