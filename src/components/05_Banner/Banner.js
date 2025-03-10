import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation

const Banner = ({ darkMode, toggleTheme }) => {
  const [currentSection, setCurrentSection] = useState("header");
  const location = useLocation(); // Get the current route

  // Define navigation items
  const navItems = [
    { id: "header", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "exp", label: "Experience" },
    { id: "works", label: "Works" },
  ];

  // Handle scroll event (only on home page)
  const handleScroll = () => {
    if (location.pathname !== "/") return; // Disable scroll behavior on subpages
  
    const scrollPosition = window.scrollY;
    const pageHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
  
    // Check if we're near the bottom of the page
    const isNearBottom = scrollPosition + viewportHeight >= pageHeight - 50;
  
    navItems.forEach(({ id }) => {
      const sectionElement = document.getElementById(id);
      if (sectionElement) {
        if (
          // Highlight the last section if we're near the bottom
          (id === "works" && isNearBottom) ||
          // Highlight other sections based on their position
          (sectionElement.offsetTop <= scrollPosition + 50 &&
            sectionElement.offsetTop + sectionElement.offsetHeight > scrollPosition + 50)
        ) {
          setCurrentSection(id);
        }
      } else {
        console.warn(`Element with id "${id}" not found.`);
      }
    });
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]); // Re-run effect when route changes

  // Handle navigation link clicks
  const handleNavClick = (id, event) => {
    if (location.pathname !== "/") {
      event.preventDefault(); // Prevent default behavior on subpages
      // Optionally, navigate to the home page and scroll to the section
      window.location.href = `/#${id}`;
    }
  };

  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          {navItems.map(({ id, label }) => (
            <li key={id} className={currentSection === id ? "current" : ""}>
              <a
                className="smoothscroll"
                href={`#${id}`}
                onClick={(e) => handleNavClick(id, e)} // Handle click
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          <i className={darkMode ? "fa fa-sun" : "fa fa-moon"}></i>
        </button>
      </nav>
    </header>
  );
};

export default Banner;