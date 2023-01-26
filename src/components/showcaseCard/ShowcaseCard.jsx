import React from 'react';
import MacWindow from '../macWindow/MacWindow';
import './ShowcaseCard.scss';

/**
 * @param {ProjectCard} project
 */
const ShowcaseCard = ({project}) => {
  return (
    <li className="projects__project_button">
      <a href={`projects/${project.id}`}>
        <MacWindow />
        <img className="projects__project_image" src={project.images[0]} alt="" />
      </a>
    </li>
  );
}

export default ShowcaseCard;