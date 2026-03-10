import React from "react";
import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, link, imgSize, resume, education }) => {
  const [showEducation, setShowEducation] = React.useState(false);

  const toggleEducation = () => {
    setShowEducation(!showEducation);
  };

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-5 d-none d-lg-block align-self-center">
          {link && (
            <img
              className="border border-secondary rounded-circle"
              src={link}
              alt="profilepicture"
              width={imgSize}
              height={imgSize}
            />
          )}
        </div>
        <div className={`col-lg-${link ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
                style={{ width: 120, marginLeft: 10, marginRight: 10 }}
              >
                Resume
              </a>
              <button
                className="btn btn-outline-dark btn-lg"
                aria-label="Education"
                style={{ width: 120, marginLeft: 10, marginRight: 10 }}
                onClick={toggleEducation}
              >
                Education
              </button>
            </p>
          )}
          {showEducation && (
            <div id="education-box">
              <p className="lead text-left">{education}</p>
            </div>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
