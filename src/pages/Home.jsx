import React, { Suspense } from "react";
import Projects from './Projects';
import Contact from './Contact';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import '@styles/home.scss';
import logo from "@icons/svg1024logo.svg";
const Home = () => {
  return (
    <div>
      <div className="container__home-container">
        <div className="home__container-lg">
          <img className="home__img" src={logo} alt="" />
          {/* <Spline scene="https://prod.spline.design/JvxH54-tRulZ368P/scene.splinecode" /> */}
        </div>
        <div className="home__container">
          <h1 className="home__wave">Hi! I'm Joaquin.</h1>
          <h1 className="home__paragraph">
            I like making{" "}
            <h1 className="home__paragraph outline_text">
              challenging funny code
            </h1>
            . I love creating{" "}
            <h1 className="home__paragraph outline_text">mobile</h1> and{" "}
            <h1 className="home__paragraph outline_text">web</h1> solutions.
            {/* <div
              className="social_media_button__wrapper__home"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <a href={"#projects"} >
                <AwesomeButton cssModule={AwesomeButtonStyles} type="primary">
                  Projects
                </AwesomeButton>
              </a>
            </div> */}
          </h1>
        </div>
      </div>
      <Projects id="projects" name="projects" />
      <Contact className="TheAbsolutePosition" />
    </div>
  );
}

export default Home;