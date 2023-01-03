import React from "react";
// import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, isScrolled }) {
  return (
          <div class="col s6 m2">
            <img alt="" src={value} class="responsive-img" height="100" />
            <body>{skill}</body>
            <br/>
          </div>
    //     <div style={{ width: "95%" }}>
    //   <p className="lead mb-1 mt-2">{skill}</p>

    //   <ProgressBar
    //     className={!isScrolled ? "progress" : " progress-bar-animation"}
    //     now={value}
    //   />
    // </div>

  );
}

export default SkillsBar;
