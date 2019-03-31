import React from "react";

const Resume = props => {
  return (
    <React.Fragment>
      <div className="resume-break-background header-break-footer">
        <div className="dark-overlay" />
      </div>
      <div className="resume-section">
        <div className="resume-title">
          <h2>Resume</h2>
        </div>
        <div className="resume-area">
          <div className="resume-left">
            <p>Left</p>
          </div>
          <div className="resume-right">
            <p>Right</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
