import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Banner = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#50af50" }}
    >
      <div className="container-fluid pt-2 pb-2">
        <span className="navbar-brand mb-0 h1">LIC # 1044057</span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="reviews">
                7831 Marek Court Fontana, CA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reviews">
                Open Today from 7:00am - 7:00pm
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reviews">
                (909) 688-6486
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Banner;
