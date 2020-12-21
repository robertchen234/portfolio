import React from "react";

const Resume = (props) => {
  return (
    <div className="resumeContainer">
      <div className="resume-break-background header-break-footer">
        <div className="dark-overlay" />
      </div>
      <div id="resume" className="resume-section">
        <div className="resume-title">
          <h2>Resume</h2>
          <br />
          <p>
            Web developer with 2 years of experience who enjoys solving
            complicated problems with simple solutions. Experience in
            JavaScript, React, Redux, Ruby on Rails, with a background in
            co-founding a SaaS startup. Proven skills in team-building to
            increase cross-level communication.
          </p>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Technical Skills</h3>
          </div>
          <div className="resume-area">
            <p>
              JavaScript, TypeScript, React, React Hooks, Redux, NodeJS, MongoDB
            </p>
          </div>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Employment History</h3>
          </div>

          <div className="resume-area">
            <div className="resume-left">
              <p>Paperspace</p>
              <div className="resume-quote">
                <p>
                  Brooklyn, NY
                  <br />
                  Software Engineer
                  <br />
                  July 2019 - Present
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Develop interface with React, React Hooks, Redux, and
                TypeScript for over 600,000 machine learning experts
              </p>
              <p>• Build API with NodeJS, Express, PostgreSQL</p>
              <p>• Maintain microservices with Python and Golang</p>
            </div>
          </div>

          <div className="resume-area">
            <div className="resume-left">
              <p>HyperFundIt</p>
              <div className="resume-quote">
                <p>
                  New York, NY
                  <br />
                  Co-Founder & Web Developer
                  <br />
                  August 2016 - August 2018
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Developed prototype on Squarespace, then WordPress with HTML,
                Javascript, CSS, and plugins driving traffic up 300%
              </p>
              <p>
                • Directly impact the client’s ability to bring over 60,000
                people together at a series of blockchain events through funding
                and marketing efforts in Nigeria
              </p>
              <p>
                • Enabled an app development team to build a crypto to Ghanaian
                currency exchange which reduces transaction time by 3 to 5 days
                and fees by over 10%
              </p>
              <p>
                • Spearheaded funding and marketing for a team conversing with
                the Government of the Philippines about blockchain technology
                resulting in bringing thousands of Filipino citizens onboard
              </p>
            </div>
          </div>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Education</h3>
          </div>
          <div className="resume-area">
            <div className="resume-left">
              <p>Flatiron School</p>
              <div className="resume-quote">
                <p>
                  New York, NY
                  <br />
                  2019
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                Full Stack Web Development Immersive Program <br />
                (React, Javascript, Rails, Ruby)
              </p>
            </div>
          </div>
          <div className="resume-area education">
            <div className="resume-left">
              <p>Stony Brook University</p>
              <div className="resume-quote">
                <p>
                  Stony Brook, NY
                  <br />
                  2016
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>Degree: Technological Systems Management</p>
              <p>(Project Management in Tech)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
