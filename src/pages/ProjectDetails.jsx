import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { AwesomeButtonSocial } from 'react-awesome-button';
import { useParams } from 'react-router-dom';
import MacWindow from '../components/macWindow/MacWindow';
import { projects } from '../data/projects';
import '../styles/ProjectDetails.scss';
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
  import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const ProjectDetails = () => {
  const { id } = useParams();
  let isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
  return (
    <div className="projects_details__container ">
      <h1 className="projects_details__title text_align_center">
        {projects[id].title}
      </h1>
      <h6 className="comment_text projects_details__comment text_align_center">
        {projects[id].brief}
      </h6>
      {projects[id].github && !isMobile && (
        <div
          className="social_media_button__wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a
            href={projects[id].github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AwesomeButtonSocial
              type={"github"}
              cssModule={AwesomeButtonStyles}
            >
              Check it out on GitHub!
            </AwesomeButtonSocial>
          </a>
        </div>
      )}
      <div className={isMobile ? "hide" : "desktop__device__container"}>
        <div className="device device-macbook-pro">
          <div className="device-frame">
            <AwesomeSlider
              bullets={false}
              media={projects[id].images.map((image) => {
                return { source: image };
              })}
            ></AwesomeSlider>
          </div>
          <div className="device-stripe"></div>
          {/* <div className="device-header"></div> */}
          <div className="device-sensors"></div>
          <div className="device-btns"></div>
          <div className="device-power"></div>
          <div className="device-home"></div>
        </div>
      </div>
      <div className={isMobile ? "mobile__device__container" : "hide"}>
        <MacWindow />
        <AwesomeSlider
          bullets={false}
          media={projects[id].images.map((image) => {
            return { source: image };
          })}
        ></AwesomeSlider>
      </div>
      {projects[id].github && isMobile && (
        <div
          className="social_media_button__wrapper"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <a
            href={projects[id].github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AwesomeButtonSocial
              type={"github"}
              cssModule={AwesomeButtonStyles}
            >
              Check it out on GitHub!
            </AwesomeButtonSocial>
          </a>
        </div>
      )}
      <h2 className="text_align_center">About this project</h2>
      <hr />
      <p className="multiline projects_details__about">{projects[id].about}</p>
      <h2 className="text_align_center">Technical Sheet</h2>
      <hr />

      <h6 className="comment_text projects_details__comment">
        Code technologies and other aspects used during this project.
      </h6>

      <ul>
        {projects[id].technologies.map((tech) => {
          if ("All" != tech) {
            return <li key={tech}>{tech}</li>;
          }
        })}
      </ul>
      <h2 className="text_align_center projects_details__links_title">Links</h2>
      <hr />
      <div className="projects_details__links">
        {projects[id].github && (
          <div className="social_media_button__wrapper">
            <a
              href={projects[id].github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AwesomeButtonSocial
                type={"github"}
                cssModule={AwesomeButtonStyles}
              >
                GitHub
              </AwesomeButtonSocial>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectDetails;