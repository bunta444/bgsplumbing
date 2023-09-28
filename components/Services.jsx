import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToilet,
  faFaucetDrip,
  faWind,
  faWrench,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="container mt-5 mb-5">
      <h1 className="text-center mb-5">Services</h1>
      <div className="row justify-content-center mt-5">
        <div className="col text-center">
          <FontAwesomeIcon
            icon={faToilet}
            className="mb-4"
            style={{ height: "8rem" }}
          />
          <p>
            <a className="h3 " href="/">
              PLUMBING
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mb-2 mx-2"
                style={{ height: "2rem" }}
              />
            </a>
          </p>
        </div>
        <div className="col text-center">
          <FontAwesomeIcon
            icon={faWind}
            className="mb-4"
            style={{ height: "8rem" }}
          />
          <p>
            <a className="h3" href="/">
              AC AND HEATING
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mb-2 mx-2"
                style={{ height: "2rem" }}
              />
            </a>
          </p>
        </div>
        <div className="col text-center">
          <FontAwesomeIcon
            icon={faWrench}
            className="mb-4"
            style={{ height: "8rem" }}
          />
          <p>
            <a className="h3 " href="/">
              DRAIN AND SEWER REAPIR & CLEANING
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mb-2 mx-2"
                style={{ height: "2rem" }}
              />
            </a>
          </p>
        </div>
        <div className="col text-center">
          <FontAwesomeIcon
            icon={faFaucetDrip}
            className="mb-4"
            style={{ height: "8rem" }}
          />
          <p>
            <a className="h3" href="/">
              HYDRO JETTING
              <FontAwesomeIcon
                icon={faArrowRight}
                className="mb-2 mx-2"
                style={{ height: "2rem" }}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
