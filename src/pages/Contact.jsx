import React from 'react';
import { AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import logo from "@icons/svg1024logo.svg";
import '../styles/contact.scss';
const Contact = () => {
  return (
    <section>
      <div className="contact__container">
        <div className="inner_contact__container">
          <div className="first_inner_contact__container">
            <h2>Hi! I'm always open to chat :D</h2>
          </div>
          <div className="second_inner_contact__container">
            Send me an email at{" "}
            <a href="mailto:contact@joaquinmx.com">contact@joaquinmx.com</a> or
            send me a message on LinkedIn.
          </div>
          <div className="third_inner_contact__container">
            <img
              className="contact__image"
              src={logo}
              alt=""
            />
          </div>
          <div
            className="social_media_button__wrapper__contact"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a
              href={"https://www.linkedin.com/in/joaquinmx/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AwesomeButtonSocial
                type={"linkedin"}
                cssModule={AwesomeButtonStyles}
              >
                LinkedIn
              </AwesomeButtonSocial>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;