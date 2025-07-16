import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation back

const Differential = ({ darkMode }) => {
  return (
    <section
      id="differential"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Differential Phase Analysis</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2024JB029010" // Replace with your external URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="button" // Add a class
        >
          <i className="fas fa-external-link-square-alt" />
          Open access publication
        </a>
      </div>
      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://github.com/AndBarajas/Differential-Phase" // Replace with your external URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="button" // Add a class
        >
          <i className="fas fa-external-l`ink-square-alt" />
          Software
        </a>
      </div>

      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/works/Differential_1.png"
          style={{
            width: "800px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Differential" // Always add an alt attribute for accessibility
        />
        <figcaption
          style={{
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Phase coherence recorded at the Klyuchevskoy Volcanic Group in
          Kamchatka, Russia, at different frequencies. The analysis reveals a
          complex pattern that remains stable on the signals during days or
          weeks.
        </figcaption>
      </figure>
      <p> </p>
      <p>
        In this work, we propose a new method to analyze signals by focusing on
        the properties of the phase in the Fourier transform of the signal. This
        approach allows us to extract the coherent characteristics of a signal,
        even when there is a strong presence of noise. By emphasizing phase
        information, our method provides a clearer picture of the underlying
        structure of the signal, making it possible to distinguish meaningful
        patterns from random fluctuations.
      </p>

      <p>
        We apply this method to study signals from the volcanic system in
        Kamchatka, Russia. Our analysis identifies which frequencies produce
        stable, coherent signals with greater precision than ever before.
        Additionally, we use this method to estimate the location of the sources
        generating these signals, improving our understanding of the volcanic
        activity in the region.{" "}
      </p>
      <div className="subpage-image">
        <figure style={{ textAlign: "center" }}>
          <img
            src="/images/works/Differential_2.png"
            style={{
              width: "400px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            alt="Differential_2" // Always add an alt attribute for accessibility
          />
          <figcaption
            style={{
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Estimation of the location of the sources generating the seismic
            signals underneath the Klyuchevskoy Volcanic Group in Kamchatka,
            Russia.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Differential;
