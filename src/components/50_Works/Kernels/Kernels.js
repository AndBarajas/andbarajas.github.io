import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation back

const Kernels = ({ darkMode }) => {
  return (
    <section
      id="kernels"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Sensitivity kernels and Monte Carlo simulation</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://academic.oup.com/gji/article/230/2/1013/6545800" // Replace with your external URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="button" // Add a class
        >
          <i className="fas fa-external-link-square-alt" />
          <i className="fas fa-external-link" />
          Open access publication
        </a>
      </div>

      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/works/Kernels_1.png"
          style={{
            width: "600px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Kernels" // Always add an alt attribute for accessibility
        />
        <figcaption
          style={{
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Time bookkeeping for body and surface waves: Each particle in the
          Monte Carlo simulation is a packet of energy that can propagate either
          as as body or as a surface wave. Registering the time that each
          particle passes at every layer, and in every every mode of propagation
          is fundamental to calculating the sensitivity kernels.
        </figcaption>
      </figure>
      <p> </p>
      <p>
        One of the key challenges in seismology is determining where, in the
        Earth's interior, velocity changes occur based on measurements taken at
        the surface using seismometers. When we detect variations in wave speed,
        we need a way to connect these surface observations to their origins
        deep underground. This connection is made through what we call
        sensitivity kernels, mathematical tools that show how different regions
        of the Earth contribute to the recorded changes in velocity. In this
        paper, we focus on constructing these sensitivity kernels to improve our
        understanding of how seismic waves interact with structural variations
        inside the Earth.
      </p>

      <p>
        To build these kernels, we developed new theoretical methods that allow
        us to track how seismic energy moves through different wave types, in a
        medium bounded by a surface. By using Monte Carlo simulations (a
        technique that follows the random paths of many particles through a
        random medium) we can model how energy propagates and scatters within
        the Earth. These simulations help us refine our understanding of wave
        sensitivity, providing a more accurate picture of where velocity changes
        originate. Our approach offers a more precise and flexible way to study
        seismic wave behavior, improving the tools available for earthquake
        monitoring and subsurface imaging.{" "}
      </p>
      <div className="subpage-image">
        <figure style={{ textAlign: "center" }}>
          <img
            src="/images/works/Kernels_2.png"
            style={{
              width: "600px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            alt="Kernels_2" // Always add an alt attribute for accessibility
          />
          <figcaption
            style={{
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Profile of the surface (dashed lines) and body (solid lines) wave
            sensitivity kernels with depth, for the different times (as
            indicated by the colors).
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Kernels;
