import React, { Component } from "react";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="home2" className="phs_links">
        <div className="container">
          <img
            src={resumeData.profilePic}
            alt={resumeData.name}
            className="profile-photo"
          />
          {/* Add SVG here */}
          <img src="/images/AB.svg" alt="Star Icon" className="star-icon" />
          <h3 className="my-name">Andrés Barajas</h3>
          <h2 className="job-title">Data Scientist</h2>
          <hr className="horizontal-line" />
          <hr />
          <ul className="social">
            <li>
              <a href="#">
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram-square" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}