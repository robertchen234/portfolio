import React from "react";

const Resume = props => {
  return (
    <React.Fragment>
      <div className="resume-break-background header-break-footer">
        <div className="dark-overlay" />
      </div>
      <div id="resume" className="resume-section">
        <div className="resume-title">
          <h2>Resume</h2>
          <br />
          <p>
            Full stack web developer who enjoys solving complicated problems
            with simple solutions. Experience in JavaScript, React, Redux, Ruby
            on Rails, with a background in Project Management. Proven skills in
            team-building to increase cross-level communication.
          </p>
        </div>
        <div className="resume-space">
          <div className="resume-header">
            <h3>Technical Projects</h3>
          </div>
          <div className="resume-area">
            <div className="resume-left">
              <p>PlayTime</p>
              <div className="resume-quote">
                <p>
                  Social media and events platform built to organize movie
                  meetups that I host for local developers.
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Solidifies React fundamentals while handling forms and passing
                information between components.
              </p>
              <p>
                • Deepens understanding and usage of asynchronous Javascript
                from fetch requests and promises.
              </p>
              <p>
                • Strengthens usage of JSON Web Tokens and BCrypt for
                encryption.
              </p>
              <p>
                • ​Applies Flexbox, transitions, animations, and more custom
                CSS.
              </p>
            </div>
          </div>

          <div className="resume-area">
            <div className="resume-left">
              <p>Code Code Revolution</p>
              <div className="resume-quote">
                <p>
                  Tests the speed and accuracy of a user’s code typing ability
                  while they compete with other players on the leaderboard.
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Presented this app for Playcrafting Expo at Microsoft which
                consisted of over 2,000 attendees with a high approval rate.
              </p>
              <p>
                • Utilizes Active Model Serializers to format JSON while storing
                and exchanging user data.
              </p>
              <p>
                • ​Integrates blockchain authentication from BlockStack and
                connects with Rails API.
              </p>
              <p>
                • Enhances understanding of how Javascript and CSS affect the
                DOM.
              </p>
            </div>
          </div>
        </div>

        <div className="resume-area">
          <div className="resume-left">
            <p>Welcome Board</p>
            <div className="resume-quote">
              <p>
                Al​lows senior students to welcome and post advice/tips for
                junior students at Flatiron School​.
              </p>
            </div>
          </div>
          <div className="resume-right">
            <p>
              • Worked with two other team members to build a React application
              that solidifies React principles.
            </p>
            <p>
              • Implements JWT, BCrypt, and localStorage to encrypt and store
              user information client-side.
            </p>
            <p>
              • Utilizes React Routes to enable users to navigate with links
              within the web app.
            </p>
            <p>
              • Applies authorization, authentication, and validation protocols.
            </p>
          </div>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Technical Skills</h3>
          </div>
          <div className="resume-area">
            <p>JavaScript, React, Redux, Ruby on Rails, HTML, CSS, MVC, REST</p>
          </div>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Employment History</h3>
          </div>
          <div className="resume-area">
            <div className="resume-left">
              <p>HyperFundIt</p>
              <div className="resume-quote">
                <p>
                  New York, NY
                  <br />
                  Co-Founder
                  <br />
                  August 2016 - August 2018
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Developed prototype on Squarespace, then WordPress with HTML,
                Javascript, CSS, and plugins driving traffic up 300%.
              </p>
              <p>
                • Directly impact my client’s ability to bring over 60,000
                people together at a series of blockchain events through funding
                and marketing efforts in Nigeria.
              </p>
              <p>
                • Enabled an app development team to build a crypto to Ghanaian
                currency exchange which reduces transaction time by 3 to 5 days
                and fees by over 10%.
              </p>
              <p>
                • Spearheaded funding and marketing for a team conversing with
                the Government of the Philippines about blockchain technology
                resulting in bringing thousands of Filipino citizens onboard.
              </p>
            </div>
          </div>

          <div className="resume-area">
            <div className="resume-left">
              <p>Army Active, Reserves, National Guard</p>
              <div className="resume-quote">
                <p>
                  United States and Afghanistan
                  <br />
                  Engineer
                  <br />
                  April 2012 - April 2018
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Saved the company $400,000+ in three months by streamlining
                the workflow process allowing the team to complete the project
                three weeks ahead of schedule.
              </p>
              <p>
                • Developed and formalized internal processes, including
                training materials to support team growth. Lead recruits to 100%
                graduation rate, which hasn't happened in 7 years.
              </p>
              <p>
                • Awarded the Army Commendation Medal for deconstructing 10+
                hostile sites and recovering $3,000,000 in material costs.
              </p>
              <p>
                • Resolved complex administrative problems by changing
                communication protocols to increase productivity by 50%.
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
                (Ruby, Rails, JavaScript, React)
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
        <a
          className="resume-download"
          href="RobertChenResume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h5 className="pointer button">Download Resume</h5>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Resume;
