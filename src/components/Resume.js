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
            with simple solutions. Experience in JavaScript, React+Redux, Rails,
            with a background in Project Management. Proven skills in
            team-building to increase cross-level communication. Known for high
            aptitude in adaptability and dependability in high-stress
            situations.
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
                  Social media platform that pushes for more engagement by
                  introducing game concepts such as exp, levels, and energy
                  limits.
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Solidifies React fundamentals while handling forms and passing
                information from component to component.
              </p>
              <p>
                • Deepens understanding and usage of AJAX from chaining fetch
                requests merged with conditional logic.
              </p>
              <p>
                • Strengthens usage of JSON Web Tokens and BCrypt for
                encryption.
              </p>
              <p>
                • Applies authorization, authentication, and validation
                protocols.
              </p>
            </div>
          </div>

          <div className="resume-area">
            <div className="resume-left">
              <p>Welcome Board</p>
              <div className="resume-quote">
                <p>
                  Allows senior students to welcome and post advice/tips for
                  junior students upon entering each new mod.
                </p>
              </div>
            </div>
            <div className="resume-right">
              <p>
                • Collaborate with two other team members to build a React
                application that solidifies React principles.
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
                • Applies authorization, authentication, and validation
                protocols.
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
                • Presented this app for Playcrafting Expo at Microsoft, the line went around the block at the center of Times Square.
              </p>
              <p>
                • Integrates blockchain authentication from BlockStack and connects the user’s unique ID with Rails backend.
              </p>
              <p>• Manipulates the DOM with Vanilla Javascript to instantaneously
                render information to the user.</p>
              <p>
                • Utilizes Active Model Serializers to format JSON while storing
                and exchanging user data.
              </p>
            </div>
          </div>
        </div>

        <div className="resume-space">
          <div className="resume-header">
            <h3>Technical Skills</h3>
          </div>
          <div className="resume-area">
            <p>JavaScript, React, Redux, Ruby, Rails, MVC, REST</p>
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
                • Spoke at a blockchain conference about crowdfunding and the
                opportunities that can arise from integrating influencer
                marketing with cryptocurrency.
              </p>
              <p>
                • Collaborated with a team to bring over 60,000 people together
                at a series of blockchain events through funding and marketing
                efforts in Nigeria.
              </p>
              <p>
                • Enabled an app development team to build a crypto to Ghanaian
                currency exchange which reduces transaction time by 3 to 5 days
                and fees by over 10%.
              </p>
              <p>
                • Managed the funding and marketing for a team conversing with
                the Government of the Philippines about blockchain technology
                and the benefits that it can bring to Filipino citizens.
              </p>
              <p>
                • Led a team of five to become the top crowdfunding brand on
                Steemit.com - a social media blockchain platform.
              </p>
              <p>
                • HyperFundIt was highlighted by news outlets from China, Korea,
                Nigeria, and top influencers on Steemit.
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
                • Resolved complex administrative problems, saved valuable time
                by changing communication protocols to increase productivity by
                50%.
              </p>
              <p>
                • Developed and formalized internal processes, including
                training materials to support team growth. Lead recruits to 100%
                graduation rate, which hasn't happened in 7 years.
              </p>
              <p>
                • Awarded the Army Commendation Medal for the deconstruction of
                10+ hostile sites and recovering $3,000,000 in material costs.
              </p>
              <p>
                • Consistently performed in the top 10% on every assignment
                throughout eight different locations.
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
          href="/assets/RobertChenResume.pdf"
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
