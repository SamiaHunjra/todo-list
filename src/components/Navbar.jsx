import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ onToggleDarkMode, isDark }) => {
  return (
    <div>
      <nav
        className={`navbar px-4 ${
          isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
        }`}
      >
        <span className="navbar-brand mb-0 h1">TODO List</span>
        <button
          className="btn btn-outline-secondary"
          onClick={onToggleDarkMode}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
