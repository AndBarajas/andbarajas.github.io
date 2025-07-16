import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation back

const Thesis = ({ darkMode }) => {
  return (
    <section
      id="thesis"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Covariance matrix analisys for seismic and volcanic zones</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://theses.hal.science/tel-03263863/" // Replace with your external URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="button" // Add a class
        >
          <i className="fas fa-external-link-square-alt" />
          Thesis
        </a>
      </div>

      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/works/Thesis_1.png"
          style={{
            width: "800px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Intensity_diagram" // Always add an alt attribute for accessibility
        />
      </figure>
      <p> </p>
      <p>
      The analysis of the ambient seismic noise has proven to be a powerful 
      tool to assess velocity changes within Earth's crust using coda-wave 
      interferometry (CWI). CWI is based on the analysis of small waveform 
      changes in the coda of the signals, which can give us information about 
      the structure or dynamic of the internal layers of the earth. The 
      objective of this thesis is to separate and locate at depth the source 
      of these changes. The work here presented is developed in three main stages:
      </p>

      <p>
      First, we aim to disentangle the processes behind velocity changes 
      detected from a ten-year-long recording of seismic noise made with a 
      single station in the region of Pollino, in the south of Italy. This 
      region is characterized by the presence of aquifers and by a relatively 
      short period of high seismic activity which includes a $M5.0$ earthquake 
      that occurred on the 25th of October 2012. We apply two models that 
      estimate the water level inside the aquifer making a good prediction 
      of the measured apparent $\delta v/v$ which means that the velocity
      variation is driven by changes in the pore pressure inside the aquifer.
      A parallel independent confirmation is obtained with geodetic 
      measurements that show a volumetric expansion of the zone that follows 
      the same patterns observed in the models and the velocity variation. 
      The subtraction of these patterns from the measurements reveals a weak 
      elastic response of the crust to the rainfall and unravels the stress 
      drop produced by the seismic event. 
      </p>

      <p>
      Second, we turn to the problem of localizing and imaging the source that 
      generates the changes at depth in the waveform registered at the surface. 
      For this, we use a 3-D wave scalar model that couples naturally body and 
      surface waves. Based on this model we make important deductions of the 
      physical characteristics of the system like a depth-dependent 
      body-to-surface mean free path and a progressive energy transformation 
      from surface to body waves. Using the radiative transfer equations that 
      describe this system we perform a series of Monte-Carlo simulations to 
      estimate the sensitivity kernel. We analyze its most important features 
      and find a good agreement when we compare it with other studies that use 
      full wavefield numerical simulations and independent surface and body 
      wave sensitivities to estimate the sensitivity of the system. We also 
      find that the ratio between the surface wave penetration and the mean 
      free path completely determines the evolution of the system, a feature 
      not seen in previous studies. 
      </p>

      <p>
      Finally, we study the process of locating the sources using the 
      sensitivity kernel and a series of observations: the inversion problem. 
      We design a series of synthetic tests to assess the capacity of the 
      inversion to retrieve a velocity perturbation in different scenarios 
      that involve the depth of the perturbation in the medium, the duration 
      of the coda used in the inversion, and the level of noise in the system.
      We make a first application of the inversion for the case study in Italy 
      and analyze its most relevant characteristics.
      </p>

    </section>
  );
};

export default Thesis;
