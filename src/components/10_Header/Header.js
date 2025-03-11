import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section id="header" className="header">
        <div className="container">
          {/* Add SVG here */}
          <img src="/images/AB_White.svg" className="AB" alt="int" />
          <h3 className="my-name">Andrés Barajas</h3>
          <h2 className="job-title">Data Scientist</h2>
          <hr className="horizontal-line" />
          <hr />
          <ul className="social">
            <li>
              <a
                href="https://www.facebook.com/andres.barajas.980/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/AndresBarajas7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/andres_custore/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram-square" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}
