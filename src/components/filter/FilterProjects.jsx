import React from 'react';
import FilterButton from '../filterButton/FilterButton';
import './FilterProjects.scss';
const FilterProjects = ({textArray}) => {
  return (
    <div className="filter_button__container">
      <ul>
        {
        textArray.map((text) => {
            return <FilterButton key={text} text={text}/>
        })
      }
      </ul>
    </div>
  );
}

export default FilterProjects;