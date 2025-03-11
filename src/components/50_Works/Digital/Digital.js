import React, { useEffect } from "react";

const Digital = ({ darkMode }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section
      id="digital"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Digital filters and convolutional neural network</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        {/* <a
          href="#" // Replace with your external URL
          target="_blank" // Open in a new tab
          rel="noopener noreferrer" // Security best practice
          className="button" // Add a class
        >
          <i className="fas fa-external-link-square-alt" />
          In progress...
        </a> */}

        <button
          onClick={() => alert("This link is not yet available.")}
          className="button"
          style={{ background: "none", border: "none", padding: 0, color: "inherit", cursor: "pointer" }}
        >
          <i className="fas fa-external-link-square-alt" />
          <i className="fas fa-external-link" />
          In progress...
        </button>

      </div>

      <figure style={{ textAlign: "center" }}>
        <img
          src="/images/works/Digital_1.png"
          style={{
            width: "800px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Digital" // Always add an alt attribute for accessibility
        />
        <figcaption
          style={{
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Synthetic tremor recordings (bottom) created as the sum of many
          individual events (top). Each red dot in the bottom panel indicates
          the presence of an individual event. There are in average 30 events
          per minute. The signals have been created using digital filters.
        </figcaption>
      </figure>
      <p> </p>
      <p>
        Tremors are seismic signals commonly observed in volcanic environments.
        Unlike regular earthquakes, which exhibit impulsive waveforms with clear
        onsets, tremors manifest as continuous or nearly continuous ground
        vibrations lasting from minutes to several months. These signals are of
        particular interest because they are closely linked to dynamic processes
        within a volcano’s magmatic and hydrothermal systems. Observations
        suggest that tremors result from the superposition of numerous
        individual events. However, their continuous nature complicates the
        extraction of these individual events, as the absolute phase information
        is lost in the cross-spectrum calculation. Since phase retrieval is
        crucial for reconstructing signals, this problem resembles phase
        retrieval challenges encountered in various scientific and engineering
        domains. To address this, we aim to recover both the phase and magnitude
        of the original signal using a convolutional neural network (CNN), with
        signal produced by a new method using digital filters.
      </p>

      <p>
        The input to our CNN is a tensor comprising 69 channels, built by
        stacking three tensors: two containing 23 overlapping windows extracted
        from the tremor recordings of different channels (purple and white) and
        a third containing the 23 cross-correlations between them (red). Each
        channel represents a signal segment of 2.05 minutes. The encoder network
        processes these inputs, mapping the tremor recordings into a feature
        space through eight layers, each consisting of a 1D convolutional layer,
        batch normalization, and a leaky rectified linear activation function.
        The decoder network has two branches—one for reconstructing signal
        magnitude and the other for phase recovery. Both branches consist of
        seven layers with the same structure as the encoder but employing
        transposed convolutional layers. To ensure meaningful outputs, the
        magnitude recovery branch concludes with a rectified linear unit
        activation function, enforcing non-negative values, while the phase
        recovery branch employs a hyperbolic tangent activation function scaled
        between −π and π.{" "}
      </p>
      <div className="subpage-image">
        <figure style={{ textAlign: "center" }}>
          <img
            src="/images/works/Digital_2.jpg"
            style={{
              width: "800px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            alt="Digital_2" // Always add an alt attribute for accessibility
          />
          <figcaption
            style={{
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Data and structure of the network used to recover the individual
            constitutive pulses from long tremor recordings. a) Synthetic tremor
            recording of 24.6 min at two stations. The small lines in the lower
            left indicate the first three overlapping windows used as data input
            of the neural network. b) Schematic structure of the encoder-decoder
            architecture. The input data consists of a tensor formed by stacking
            the overlapping windows (purple and white blocks), and the
            cross-correlations obtained between them (red block). The encoder is
            formed by 8 layers convolutional layers, producing, at the network
            bottleneck, 1024 features or channels. The decoder consists of two
            branches, each with 7 deconvolutional layers, in charge of
            reproducing the magnitude and phase from which the signal is
            manually reconstructed.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Digital;
