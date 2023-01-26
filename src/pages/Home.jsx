import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));
import '../styles/home.scss'
const Home = () => {
  return (
    <div className="container__home-container">
      <div className="home__container-lg">
        <img className="home__img" src="./assets/icons/svg1024logo.svg" alt="" />
        {/* <Spline scene="https://prod.spline.design/JvxH54-tRulZ368P/scene.splinecode" /> */}
      </div>
      <div className="home__container">
        <h1 className="home__wave">Hi! I'm Joaquin.</h1>
        <h1 className="home__paragraph">
          I like making{" "}
          <h1 className="home__paragraph outline_text">
            challenging funny code
          </h1>
          .
        </h1>
        <h1 className="home__paragraph">
          I love creating{" "}
          <h1 className="home__paragraph outline_text">mobile</h1> and{" "}
          <h1 className="home__paragraph outline_text">web</h1> solutions.
        </h1>
      </div>
    </div>
  );
}

export default Home;