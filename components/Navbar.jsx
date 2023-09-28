"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ "--bs-navbar-padding-y": 0 }}
    >
      <div
        className="container-fluid pt-4 pb-4"
        style={{ backgroundColor: "#ffffff" }}
      >
        <a className="navbar-brand" href="/">
          <img
            src="bgsplumbinglogo.png"
            alt="logo"
            style={{ width: "10rem", height: "3rem" }}
          />
        </a>
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleDropdown}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse${isDropdownOpen ? " show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className={`nav-item dropdown${isDropdownOpen ? " show" : ""}`}>
              <a
                className="nav-link dropdown-toggle"
                aria-expanded={isDropdownOpen ? "true" : "false"}
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                Services
              </a>
              <ul
                className={`dropdown-menu${isDropdownOpen ? " show" : ""}`}
                style={{ background: "#ffffff" }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    href="plumbing"
                    style={{ "--bs-dropdown-link-active-bg": "none" }}
                  >
                    Plumbing
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="drainandsewer"
                    style={{ "--bs-dropdown-link-active-bg": "none" }}
                  >
                    Drain & sewer repair and cleaning
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="hydrojetting"
                    style={{ "--bs-dropdown-link-active-bg": "none" }}
                  >
                    Hydro Jetting
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="hvac"
                    style={{ "--bs-dropdown-link-active-bg": "none" }}
                  >
                    HVAC AC & HEATING
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="gallery">
                Project Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reviews">
                Reviews
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
