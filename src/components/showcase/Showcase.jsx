import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import ShowcaseCard from '../showcaseCard/ShowcaseCard';
import './Showcase.scss';
// import {ProjectCard} from '../../models/ProjectCard.model';
/**
 * @param {ProjectCard[]} projects
 */
const Showcase = ({projects}) => {
  const { state } = useContext(AppContext);
  return (
    <div className='showcase__container'>
        {projects.map((project) => {
          if (
            project.technologies
              .map((data) => {return data.toLocaleUpperCase()})
              .includes(state.filter)
          ) {
            return <ShowcaseCard project={project} key={project.id} />;
            
          }

        })}
    </div>
  )
}

export default Showcase;