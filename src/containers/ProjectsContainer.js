import React, { Component } from "react";
import { connect } from "react-redux";

import ProjectImage from "../components/ProjectImage";
import ProjectCard from "../components/ProjectCard";

class ProjectsContainer extends Component {
  state = {
    isClicked: false,
    project: {},
    projectsList: [
      {
        id: 4,
        title: "HyperFundIt",
        teaser: "Co-Founded, Fundraising & Marketing",
        description:
          "Crowdfunding SaaS startup to provide marketing and financial resources for entrepreneurs in blockchain tech. Using WooCommerce and BuddyPress from WordPress plugins while integrating the Steem cryptocurrency wallet, I created a user friendly fundraising platform that hosted campaigns for clients from Nigeria, Ghana, the Philippines, and back home to the USA.",
        year: 2018,
        tech_stack: "WordPress",
        demo_url: "https://hyperfundit.com",
        git_url: null,
        video_url: null,
        image_url: "hyperfundit.png",
        claps: 6
      },
      {
        id: 2,
        title: "Welcome Board",
        teaser: "Advice Forum",
        description:
          "Every 3 weeks at bootcamp, we learn a totally different framework or language which comes with its unique struggles. I built this board for students to leave insight about each module for more junior students.",
        year: 2019,
        tech_stack:
          "React, Javascript, Ruby on Rails, PostgreSQL, CSS, Heroku, and Netlify",
        demo_url: "https://welcome-board.netlify.com",
        git_url: "https://github.com/robertchen234/welcome-board-frontend",
        video_url: null,
        image_url: "welcomeboard.png",
        claps: 30
      },
      {
        id: 3,
        title: "Code Code Revolution",
        teaser: "Typing Game",
        description:
          "This game tests how fast a player can type code and compete on the leaderboard. I had the joy of doing a live demo and someone brought over their own custom keyboard, it got intense!",
        year: 2018,
        tech_stack: "vanillaJS, Ruby on Rails, Blockstack, PostgreSQL, CSS",
        demo_url: "https://codecoderevolution.com/",
        git_url:
          "https://github.com/robertchen234/code-code-revolution-frontend",
        video_url: "https://www.youtube.com/embed/tgPy_OV-nLM",
        image_url: "codecoderevolution.png",
        claps: 23
      },
      {
        id: 1,
        title: "PlayTime",
        teaser: "Social Media Site",
        description:
          "Social media isn't as personal or fun as it used to be, so I built this social media game that pushes for more user to user engagement. Players gains exp for posting to friends' walls and level up to increase energy limits. Having to wait for energy to replenish also encourage players to take a break from their devices once in a while 👍",
        year: 2019,
        tech_stack:
          "React, Javascript, Ruby on Rails, PostgreSQL, CSS with Flexbox, Heroku, and Netlify",
        demo_url: "https://playtime-beta.netlify.com",
        git_url: "https://github.com/robertchen234/playtime-frontend",
        video_url: null,
        image_url: "playtime.png",
        claps: 45
      }
    ]
  };

  toggleClick = project => {
    this.setState({ isClicked: !this.state.isClicked, project });
  };

  render() {
    return (
      <React.Fragment>
        <div className="projects-break-background header-break-footer">
          <div className="dark-overlay" />
        </div>
        <div className="projects-switch">
          {this.state.isClicked ? (
            <ProjectCard
              key={this.state.project.id}
              project={this.state.project}
              toggleClick={this.toggleClick}
            />
          ) : (
            <div id="projects" className="projects-section">
              <div className="projects-title">
                <h2>Projects</h2>
              </div>
              <div className="projects-area">
                {this.state.projectsList
                  .sort((a, b) => a.id - b.id)
                  .map(proj => (
                    <ProjectImage
                      key={proj.id}
                      project={proj}
                      toggleClick={this.toggleClick}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { projects: state.projects };
};

export default connect(mapStateToProps)(ProjectsContainer);
