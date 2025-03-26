import React, { Component } from "react";
import Pie from "./pie";

// https://fontawesome.com/v5/icons/ubuntu?f=brands&s=solid

// Reusable SkillCard component
const SkillCard = ({ icon, title, skills }) => (
  <div className="five columns">
    <h2>
      <i className={icon}></i> {title}
    </h2>
    <ul className="custom-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </div>
);



export default class Skills extends Component {
  render() {
    const skillsData = [
      {
        icon: "fas fa-brain",
        title: "Data Analysis",
        skills: [
          "Deep learning",
          "Machine learning",
          "Signal processing",
          "Matrix analysis methods",
          "Physics modeling",
          "Inverse problem",
          "Monte Carlo simulations"
        ]
      },
      {
        icon: "fab fa-python",
        title: "Programming Languages",
        skills: [
          "Python (pytorch, pandas, numpy, scipy, igraph, matplotlib, scikit-learn, jupyter)",
          "C",
          "C++",
          "Fortran",
          "Bash",
          "Latex"
        ]
      },
      {
        icon: "fab fa-ubuntu",
        title: "Operative Systems",
        skills: ["Linux", "Windows", "MacOS"]
      },
      {
        icon: "fas fa-file-excel",
        title: "Software",
        skills: [
          "VSCode",
          "Github",
          "Microsoft Office (Excel, PowerPoint, Word)",
          "Illustrator",
          "Photoshop"
        ]
      }
    ];

    return (
      <section id="skills">
        {/* Skills Section */}
        <div className="row">
          <div className="sec_left">
            <span>Skills</span>
          </div>
        </div>

        {/* Render Skill Cards in 2x2 structure */}
        <div className="row skills">
          {skillsData.slice(0, 2).map((data, index) => (
            <SkillCard key={index} {...data} />
          ))}
        </div>

        <div className="row skills">
          {skillsData.slice(2, 4).map((data, index) => (
            <SkillCard key={index + 2} {...data} />
          ))}
        </div>

        <div className="row pie-container">
          <Pie percentage={100} title="Español" />
          <Pie percentage={100} title="English" />
          <Pie percentage={85} title="Français" />
          <Pie percentage={15} title="Italiano" />
          {/* <Pie percentage={100} colour="#ff9421" title="Español" />
          <Pie percentage={100} colour="#ff9421" title="English" />
          <Pie percentage={85} colour="#ff9421" title="Français" />
          <Pie percentage={15} colour="#ff9421" title="Italiano" /> */}
        </div>
      </section>
    );
  }
}
