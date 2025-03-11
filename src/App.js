import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import resumeData from "./components/00_Data/resumeData";
import Banner from "./components/05_Banner/Banner";
import Header from "./components/10_Header/Header";
import About from "./components/20_About/About";
import Skills from "./components/30_skills/skills";
import Experience from "./components/40_Experience/Exp";
import Portfolio from "./components/50_Works/Works";
import Aquifer from "./components/50_Works/Aquifer/Aquifer";
import Kernels from "./components/50_Works/Kernels/Kernels";
import Shikoku from "./components/50_Works/Shikoku/Shikoku";
import Differential from "./components/50_Works/Differential/Differential";
import Digital from "./components/50_Works/Digital/Digital";

const App = ({ darkMode, toggleTheme }) => {
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Render Banner on all pages */}
      <Banner darkMode={darkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header resumeData={resumeData} />
              <About />
              <Skills />
              <Experience />
              <Portfolio />
            </>
          }
        />
        {/* <Route path="/second-page" element={<SecondPage darkMode={darkMode} />} /> */}
        <Route path="/digital" element={<Digital darkMode={darkMode} />} />
        <Route path="/differential" element={<Differential darkMode={darkMode} />} />
        <Route path="/shikoku" element={<Shikoku darkMode={darkMode} />} />
        <Route path="/kernels" element={<Kernels darkMode={darkMode} />} />
        <Route path="/aquifer" element={<Aquifer darkMode={darkMode} />} />
      </Routes>
    </div>
  );
};

const AppWrapper = ({ darkMode, toggleTheme }) => (
  <Router>
    <App darkMode={darkMode} toggleTheme={toggleTheme} />
  </Router>
);

export default AppWrapper;