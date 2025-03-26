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
                  <li>Design of generative encoder-decoder convolutional neural networks (CNN) for signal recovery</li>
                  <li>Implementation of matrix transformation and decomposition methods for information extraction</li>
                  <li>Temporal and spectral analysis (Fourier transform) of volcanic and tectonic signals</li>
                  <li>Conception and design of digital filters for the generation of synthetic waveforms</li>
                  <li>Development of techniques and codes to study long temporal data series</li>
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
                  <li>Development of a physical model of wave propagation and mathematical estimation of sensitivity kernels through Monte Carlo simulations</li>
                  <li>Construction of a physical model to estimate the water levels in underground aquifer reservoirs from rainfall data</li>
                  <li>Processing and interpreting multi-year GPS, rain, and seismic data to identify correlations</li>
                  <li>Inversion of seismic data to identify the depth in the Earth's crust changes from measurements obtained at the surface</li>
                  <li>Measurement of the seismic velocity changes from ambient noise</li>
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
