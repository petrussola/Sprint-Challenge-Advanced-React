import React from "react";

import { useDarkMode } from "../hooks/useDarkMode";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleDarkMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button type="submit" onClick={toggleDarkMode} data-testid='toggleButton'>
        Toggle Dark Mode
      </button>
    </div>
  );
}
