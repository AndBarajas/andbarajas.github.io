import React, { Component } from "react";

export default class Experience extends Component {
  render() {
    return (
      <section id="exp">
        {/* Experience Section */}
        <div className="row expe">
          <div className="three columns header-col">
            <div className="sec_left">
              <span>Experience</span>
            </div>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Researcher</h3>
                <p className="info">
                  Signal Analysis <span>•</span>{" "}
                  <em className="date">March 2021 - December 2024</em>
                </p>
                <ul className="custom-list">
                  <li>Neural network design for seismic signal recovery</li>
                  <li>
                    Matrix transformation and decomposition methods for data
                    analysis
                  </li>
                  <li>Fourier analysis of volcanic and tectonic signals</li>
                  <li>Digital filter design for wave propagation simulation</li>
                </ul>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Ph.D.</h3>
                <p className="info">
                  Environmental and Theoretical Seismology <span>•</span>{" "}
                  <em className="date">November 2017 - March 2021</em>
                </p>
                <ul className="custom-list">
                  <li>
                    Processing and interpretation of GPS, rain, and seismic data
                  </li>
                  <li>Physical modeling of Earth's wave propagation</li>
                  <li>
                    Physical modeling of water levels in underground reservoirs
                  </li>
                  <li>
                    Inversion of seismic data to identify changes in the Earth's
                    crust
                  </li>
                  <li>
                    Measurement of seismic velocity changes related to water
                    levels and seismicity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Studies Section */}
        <div className="row stud">
          <div className="three columns header-col">
            <div className="sec_left">
              <span>Studies</span>
            </div>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Master - Theoretical physics</h3>
                <p className="info">
                  Universidad de los Andes <span>•</span>{" "}
                  <em className="date">January 2012 - December 2013</em>
                </p>
                <p>
                  <b>Courses:</b> Advanced Quantum Mechanics, Electrodynamics,
                  Statistical Mechanics, Analytical Mechanics
                </p>
              </div>
            </div>

            <div className="row item">
              <div className="twelve columns">
                <h3>Bachelor of Science - Physics</h3>
                <p className="info">
                  Universidad Nacional de Colombia <span>•</span>{" "}
                  <em className="date">February 2004 - June 2010</em>
                </p>
                <p>
                  <b>Courses:</b> Relativity, Quantum Mechanics, Thermodynamics,
                  Integral Calculus, Topology, Differential Equations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
