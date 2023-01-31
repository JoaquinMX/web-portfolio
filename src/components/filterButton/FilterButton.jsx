import React, {useContext} from "react";
import AppContext from "../../context/AppContext";
import '../filterButton/FilterButton.scss';

const FilterButton = ({text}) => {
  const { setFilter } = useContext(AppContext);

  return (
    <>
        <li className="projects__filter_button" onClick={(e) => {setFilter(e.target.innerText)}}>{text}</li>
    </>
  );
};

export default FilterButton;
