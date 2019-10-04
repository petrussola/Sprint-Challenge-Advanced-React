import React, { useState, useEffect } from "react";

export const useDarkMode = initialValue => {
  const [darkMode, setDarkMode] = useState(initialValue);

  const toggleDarkMode = value => {
    setDarkMode(value);
    console.log(value);
  };

  useEffect(() => {
    if (darkMode === true) {
      document.querySelector("body").classList.add("dark-mode");
    } else {
      document.querySelector("body").classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};
