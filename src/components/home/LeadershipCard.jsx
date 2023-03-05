import React from "react";
import Col from "react-bootstrap/Col";

const LeadershipCard = ({ value }) => {
  const {
    company,
    role,
    date,
    description,
  } = value;
  return (
      <Col md="12">
      < div className="p-3 mb-0">
          <h5>{company} - <span className="text-muted text-secondary"></span>  </h5>

          <div className="card-text">
              <div>{role} - <span className="text-secondary">{date}</span></div>          
              <div className="my-2"> {
                description.map((description, index) => (
                    <p className="lead"
                    key={`experience-description-${index}`} style={{fontSize: '18px'}}
                    >{description}</p>
                )) 
              }</div>
         </div>
         <hr />
       </div>
      </Col>
  );
};


export default LeadershipCard;