import React, { useContext } from "react";
import FilterProjects from "../components/filter/FilterProjects";
import AppContext from "../context/AppContext";
import "../styles/projects.scss";
import "../styles/myDevices.min.css";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Showcase from "../components/showcase/Showcase";
import { projects } from "../data/projects";
// import ProjectCard from "../models/ProjectCard.model";
const Projects = () => {
  const { state } = useContext(AppContext);
  const textArray = [
    "All",
    "Web",
    "Mobile",
    "Multiplatform",
    "Videogames",
    "Front-End",
    "Back-End",
    "React.js",
    "Angular",
    "Flutter",
    "Android",
    "Firebase",
    "MongoDB",
    "Unity",
  ];
  /**
   * @type {ProjectCard[]}
   */
  
  return (
    <div className="projects__container">
      <h1 className="projects__title">Web Developer Portfolio</h1>
      <p className="projects__paragraph">
        From web components to entire applications. Check out my latest software
        development portfolio projects.
      </p>
      <FilterProjects textArray={textArray} />
      <p className="comment_text comment_text__projects">
        Showing {state.filter.toLowerCase()} projects. Use the filter to list
        them by type or Technology.
      </p>
      <Showcase projects={projects} />
    </div>
  );
};

export default Projects;
