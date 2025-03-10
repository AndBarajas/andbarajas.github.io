import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation back

const Shikoku = ({ darkMode }) => {
  return (
    <section
      id="shikoku"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Covariance matrix analisys for seismic and volcanic zones</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2023JB026784" // Replace with your external URL
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
          src="/images/works/Shikoku_1.png"
          style={{
            width: "800px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Shikoku" // Always add an alt attribute for accessibility
        />
        <figcaption
          style={{
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Coherence (measured by ths spectral width) of signals recorded at the
          Klyuchevskoy Volcanic Group in Kamchatka, Russia, at different
          frequencies. Lower is the values of the spectral width (closer to red)
          indicate a coherent signal.
        </figcaption>
      </figure>
      <p> </p>
      <p>
        The covariance matrix method is a technique used to analyze multiple
        signals at once by organizing them into a square matrix that captures
        the relationships that are common to all the signals. By examining this
        matrix, we can determine how signals are related across different
        frequencies, helping us identify where the signals are coherent, or in
        sync, at specific frequency ranges.
      </p>

      <p>
        Through detailed analysis of the covariance matrix, we have gained
        deeper insights into the characteristics of signals that lead to certain
        patterns observed in the signal coherence. This understanding enhances
        our ability to interpret complex signal behaviors and improves the
        accuracy of signal processing applications.{" "}
      </p>
      <div className="subpage-image">
        <figure style={{ textAlign: "center" }}>
          <img
            src="/images/works/Shikoku_2.png"
            style={{
              width: "600px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            alt="Shikoku_2" // Always add an alt attribute for accessibility
          />
          <figcaption
            style={{
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Distribution of hypocenters and magnitudes of strong seismic events
            at Shikoku, Japan. The location of the earthquakes over the line RS
            (bomttom panel) shows how the seismic activity is concentrated in
            the surface of contact between the Philippine Sea and the Eurasian
            tectonic plates (known as the Nankai Trough). In this zone are
            produced megathrust (very large) earthquakes in Japan.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Shikoku;
