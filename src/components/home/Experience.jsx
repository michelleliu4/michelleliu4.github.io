import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from './migration';
import Row from "react-bootstrap/Row";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ heading, experienceList }) => {
  
  return (
    <Jumbotron fluid id="experience" className="bg-light m-0 target-section">
      <Container className=" p-3 mb-5 bg-light rounded">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {
          experienceList.map((experience, index) => (
                <ExperienceCard
                  key={`experience-card-${index}`}
                  id={`experience-card-${index}`}
                  value={experience}
                />
              )) 
          }
        </Row>
      </Container>
    </Jumbotron>

  );
};

export default Experience;