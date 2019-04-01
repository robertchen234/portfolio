import React, { Component } from "react";
import { Link } from "react-scroll";

class Bio extends Component {
  state = { topic: "flatiron" };

  changeTopic = topic => {
    this.setState({ topic });
  };

  render() {
    return (
      <div id="bio" className="bio-section">
        <div className="bio-quote">
          <h2>
            You know it's passion when you find that 24 hours is not enough time
            in a day.
          </h2>
        </div>
        <div className="bio-area">
          <div className="bio-left">
            {this.state.topic === "flatiron" ? (
              <React.Fragment>
                <p>
                  In 4 months, I learned how to build an API with Ruby on Rails
                  complete with authentication (BCrpyt+JWT), and validation; I
                  then moved on to learn Javascript and how to manipulate the
                  DOM with AJAX, which laid the foundation for building web apps
                  with React+Redux.
                </p>
                <p>
                  Going into the bootcamp, I set out to complete all code
                  challenges on the first try (we get two chances). It took
                  restless nights of scouring Stack Overflow and coding 13+
                  hours a day but I accomplished my goal and I was the only
                  person who managed to complete all bonus deliverables every
                  time.
                </p>
                <p>
                  Now that I am equipped with experience in React, Javascript,
                  Rails, and the know-how in learning new frameworks/languages
                  fast, I wish to keep growing and being challenged. I am
                  excited to apply what I have learned and will learn to drive
                  higher impact for society as a software engineer.
                </p>
              </React.Fragment>
            ) : this.state.topic === "startup" ? (
              <p>
                While growing my startup I realized my own passion for building
                platforms, and recognized that coding was my future. We had our
                successes, but when the startup came to an end along with the
                decline of cryptocurrency, I had a friend recommend Flatiron
                School Coding Bootcamp.
              </p>
            ) : this.state.topic === "stony" ? (
              <p>
                When I came home from Afghanistan, that same experience enabled
                me to complete my Project Management in Tech degree with a 3.88
                major GPA. Right after graduating from Stony Brook University
                (NY), I flew to Los Angeles to pursue building a crowdfunding
                SaaS startup to provide marketing and financial resources for
                entrepreneurs in blockchain tech.
              </p>
            ) : this.state.topic === "army" ? (
              <p>
                It was in Afghanistan that I learned to lead an Engineering team
                in which directly saved the Army $400,000+ in three months and
                contributed to recovering $3,000,000 over the course of one
                year.
              </p>
            ) : null}
          </div>
          <Link
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div className="bio-right">
            <div
              className="bio-piece"
              onMouseEnter={() => this.changeTopic("flatiron")}
            >
              <div
                className={
                  this.state.topic === "flatiron" ? "box bio-piece-text" : "bio-piece-text"
                }
              >
                <h4>Flatiron School</h4>
                <p>Full Stack Developer</p>
              </div>
            </div>
            <div
              className="bio-piece"
              onMouseEnter={() => this.changeTopic("startup")}
            >
              <div
                className={
                  this.state.topic === "startup" ? "box bio-piece-text" : "bio-piece-text"
                }
              >
                <h4>Startup</h4>
                <p>Project Manager & WordPress Developer</p>
              </div>
            </div>
            <div
              className="bio-piece"
              onMouseEnter={() => this.changeTopic("stony")}
            >
              <div
                className={
                  this.state.topic === "stony" ? "box bio-piece-text" : "bio-piece-text"
                }
              >
                <h4>Stony Brook University</h4>
                <p>Project Management in Tech</p>
              </div>
            </div>
            <div
              className="bio-piece"
              onMouseEnter={() => this.changeTopic("army")}
            >
              <div
                className={
                  this.state.topic === "army" ? "box bio-piece-text" : "bio-piece-text"
                }
              >
                <h4>Army</h4>
                <p>Engineer</p>
              </div>
            </div>
          </div></Link>
        </div>
      </div>
    );
  }
}

export default Bio;
