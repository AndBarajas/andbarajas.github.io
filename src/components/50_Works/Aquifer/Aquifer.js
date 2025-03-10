import React from "react";
// import { Link } from "react-router-dom"; // Import Link for navigation back

const Aquifer = ({ darkMode }) => {
  return (
    <section
      id="aquifer"
      className={`subpage ${darkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="subpage-image"></div>
      <div className="entry_title">
        <span>Aquifer modeling and seismic velocity changes</span>
      </div>

      <div className="download">
        {/* Direct acces to the paper on this{" "} */}
        <a
          href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2021GC009742" // Replace with your external URL
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
          src="/images/works/Aquifer_1.png"
          style={{
            width: "400px", // Set only width (or height)
            height: "auto", // Let the browser calculate height based on aspect ratio
          }}
          alt="Aquifer" // Always add an alt attribute for accessibility
        />
        <figcaption
          style={{
            marginTop: "8px",
            fontStyle: "italic",
          }}
        >
          Models used to obtain the aquifer water level (bottom left) from the
          rainfall (top left).
        </figcaption>
      </figure>
      <p> </p>
      <p>
        In our study, we investigated the interplay between rainfall, seismic
        velocity changes, and ground deformation to understand how water
        infiltration affects the Earth's crust. We utilized physical models that
        incorporated rainfall data and analyzed their correlation with seismic
        velocity variations and GPS measurements. Our findings indicate that
        increased rainfall leads to measurable changes in seismic velocities and
        ground deformation, highlighting the sensitivity of the Earth's crust to
        hydrological processes.{" "}
      </p>

      <p>
        By integrating rainfall data into our physical models, we observed a
        clear correlation between precipitation events and seismic velocity
        changes. These changes were accompanied by ground deformation detected
        through GPS measurements, suggesting that water infiltration can alter
        the mechanical properties of the subsurface. Our results emphasize the
        importance of considering hydrological factors in seismic studies and
        provide new insights into the dynamic relationship between surface and
        subsurface responses.{" "}
      </p>
      <div className="subpage-image">
        <figure style={{ textAlign: "center" }}>
          <img
            src="/images/works/Aquifer_2.jpg"
            style={{
              width: "800px", // Set only width (or height)
              height: "auto", // Let the browser calculate height based on aspect ratio
            }}
            alt="Aquifer2" // Always add an alt attribute for accessibility
          />
          <figcaption
            style={{
              marginTop: "8px",
              fontStyle: "italic",
            }}
          >
            Correlation found between the aquifer recharge model, the seismic
            velocity changes, and GPS measurements.
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Aquifer;
