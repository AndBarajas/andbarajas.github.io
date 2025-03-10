import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  // Load theme preference from localStorage (default to dark mode)
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // Default to dark mode if no theme is saved
    return savedTheme ? savedTheme === "dark" : true;
  });

  // Toggle function to switch themes
  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Apply the theme class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }
  }, [darkMode]);

  return <App darkMode={darkMode} toggleTheme={toggleTheme} />;
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
