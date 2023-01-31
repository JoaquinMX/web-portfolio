import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import { useParams } from 'react-router-dom';
import MacWindow from '../components/macWindow/MacWindow';
import { projects } from '../data/projects';
import '../styles/ProjectDetails.scss';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const ProjectDetails = () => {
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
  const videos = importAll(
    require.context("@videos", false, /\.(mp4|webm|mpeg)$/)
  );
  const { id } = useParams();
  let isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
  return (
    <div className="projects_details__container ">
      <h1 className="projects_details__title text_align_center">
        {`${projects[id].title}`}
      </h1>
      <h3 className="text_align_center">{`${projects[id].client}`}</h3>
      <h6 className="comment_text projects_details__comment text_align_center">
        {projects[id].brief}
      </h6>
      {projects[id].github && projects[id].github !== "" && !isMobile && (
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
      {projects[id].isMobile ? (
        <div
          className={isMobile ? "hide" : "desktop__device__container__phone"}
        >
          <div className="device device-iphone-8 device-spacegray">
            <div className="device-frame">
              <AutoplaySlider
                style={{
                  height: "100%",
                  width: "100%",
                }}
                play={true}
                cancelOnInteraction={true}
                interval={6000}
                bullets={false}
              >
                {projects[id].images.map((image) => {
                  return (
                    <div
                      className="projects_details__mobile"
                      data-src={`${images[image]}`}
                    />
                  );
                })}
              </AutoplaySlider>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
            <div className="device-home"></div>
          </div>
        </div>
      ) : (
        <div className={isMobile ? "hide" : "desktop__device__container"}>
          <div className="device device-macbook-pro">
            <div className="device-frame">
              <AutoplaySlider
                play={true}
                cancelOnInteraction={true}
                bullets={false}
              >
                {projects[id].images.map((image) => {
                  return <div data-src={`${images[image]}`} />;
                })}
              </AutoplaySlider>
            </div>
            <div className="device-stripe"></div>
            {/* <div className="device-header"></div> */}
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
            <div className="device-home"></div>
          </div>
        </div>
      )}
      {projects[id].isMobile ? (
        <div
          className={
            isMobile
              ? "desktop__device__container__phone"
              : "hide"
          }
        >
          <div className="device device-iphone-8 device-spacegray">
            <div className="device-frame">
              <AutoplaySlider
                style={{
                  height: "100%",
                  width: "100%",
                }}
                play={true}
                cancelOnInteraction={true}
                interval={6000}
                bullets={false}
              >
                {projects[id].images.map((image) => {
                  return (
                    <div
                      className="projects_details__mobile"
                      data-src={`${images[image]}`}
                    />
                  );
                })}
              </AutoplaySlider>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
            <div className="device-home"></div>
          </div>
        </div>
      ) : (
        <div className={isMobile ? "mobile__device__container" : "hide"}>
          <MacWindow />
          <AutoplaySlider
            play={true}
            cancelOnInteraction={true}
            bullets={false}
          >
            {projects[id].images.map((image) => {
              return <div data-src={`${images[image]}`} />;
            })}
          </AutoplaySlider>
        </div>
      )}
      {projects[id].github && projects[id].github !== "" && isMobile && (
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
      <h2 className="text_align_center">Key Contributions</h2>
      <hr />
      <ul>
        {projects[id].contributions.map((contribution) => {
          return <li key={contribution}>{contribution}</li>;
        })}
      </ul>
      <h2 className="text_align_center">Technologies</h2>
      <hr />
      <h6 className="comment_text projects_details__comment">
        Code technologies used during this project.
      </h6>
      <ul>
        {projects[id].technologies.map((tech) => {
          if ("All" != tech) {
            return <li key={tech}>{tech}</li>;
          }
        })}
      </ul>
      <h2 className="text_align_center">Notes</h2>
      <hr />
      <ul>
        {projects[id].notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
      <h2 className="text_align_center projects_details__links_title">Links</h2>
      <hr />
      <div className="projects_details__links">
        {projects[id].github && projects[id].github != "" && (
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
        {projects[id].links &&
          projects[id].links != [] &&
          projects[id].links.map((link) => {
            return (
              <div className="link_note__wrapper">
                <div>
                  {link.note ? (
                    <p className="comment_text note__link">{link.note}</p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="social_media_button__wrapper">
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    <AwesomeButton
                      cssModule={AwesomeButtonStyles}
                      type="primary"
                    >
                      {link.name}
                    </AwesomeButton>
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ProjectDetails;