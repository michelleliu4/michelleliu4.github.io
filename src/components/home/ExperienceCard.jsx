import React from "react";
import Col from "react-bootstrap/Col";

const ExperienceCard = ({ value }) => {
  const { company, location, role, date, description, logo } = value;

  return (
    <Col md="12">
      <div className="p-3 mb-0 d-flex align-items-start">
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            style={{ width: "40px", height: "40px", marginRight: "15px", objectFit: "contain" }}
          />
        )}
        <div>
          <h5>
            {company} -{" "}
            <span className="text-muted text-secondary">{location}</span>
          </h5>

          <div className="card-text">
            <div>
              {role} - <span className="text-secondary">{date}</span>
            </div>
            <div className="my-2">
              {description.map((description, index) => (
                <p
                  className="lead"
                  key={`experience-description-${index}`}
                  style={{ fontSize: "18px" }}
                >
                  {description}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr />
    </Col>
  );
};


export default ExperienceCard;
