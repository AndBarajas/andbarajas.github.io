import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              src="/images/andres.png"
              className="profile-pic"
              alt="profile andres barajas"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>
              Data Scientist with strong background in signal processing,
              computational and physical modeling with 5+ years of experience in
              research and development projects. Experience in data analysis,
              machine learning, deep learning, and signal processing aimed to
              extract insights from complex datasets. Proficient in Python, C++,
              and Fortran, with experience developing algorithms for data-driven
              solutions. Skilled in communication, organization, and
              problem-solving, with a history of teaching and knowledge sharing
              across diverse domains.
            </p>
            <div className="columns download">
              <p>
                <a
                  href="/files/CV_En.pdf"
                  className="button"
                  target="_blank"  // This opens the file in a new tab
                  rel="noopener noreferrer"  // This is a security best practice when using target="_blank"
                >
                  <i className="fa fa-download" />
                  Download CV (En)
                </a>
              </p>
              <p>
                <a
                  href="/files/CV_Fr.pdf"
                  className="button"
                  target="_blank"  // This opens the file in a new tab
                  rel="noopener noreferrer"  // This is a security best practice when using target="_blank"
                >
                  <i className="fa fa-download" />
                  Télécharger CV (Fr)
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
