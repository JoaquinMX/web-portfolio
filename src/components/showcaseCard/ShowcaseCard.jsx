import React from 'react';
import MacWindow from '../macWindow/MacWindow';
import './ShowcaseCard.scss';

/**
 * @param {ProjectCard} project
 */
const ShowcaseCard = ({project}) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  const images = importAll(
    require.context("@images", false, /\.(png|jpe?g|svg)$/)
  );

  return (
    <li className="projects__project_button">
      <a href={`projects/${project.id}`}>
        <MacWindow />
        <img
          className="projects__project_image"
          src={project.cover ? images[project.cover] : images[project.images[0]]}
          alt=""
        />
      </a>
    </li>
  );
}

export default ShowcaseCard;