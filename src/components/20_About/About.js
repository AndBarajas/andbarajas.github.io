import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img src="/images/andres.png" className="profile-pic" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              {" "}
              Data Scientist with strong background in signal processing,
              computational and physical modeling with 5+ experience in research
              and development projects. Experience in data analysis, machine
              learning, deep learning, and signal processing aimed to extract
              insights from complex datasets. Proficient in Python, C++, and
              Fortran, with experience developing algorithms for data-driven
              solutions. Skilled in communication, organization, and
              problem-solving, with a history of teaching and knowledge sharing
              across diverse domains.
            </p>
            <div className="columns download">
              <p>
                <a href="#" className="button">
                  <i className="fa fa-download" />
                  Download Resume
                </a>
              </p>
            </div>
            {/* end row */}
          </div>{" "}
          {/* end .main-col */}
        </div>
      </section>
    );
  }
}
