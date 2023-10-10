import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYelp, faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="text-center mt-3">
          <p>&copy; 2023 BG’s Plumbing and Rooter. All rights reserved.</p>
        </div>
        <div className="text-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              className="my-2"
              style={{ width: "2.5rem" }}
            />
          </a>
          <a
            href="https://www.yelp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faYelp}
              className="my-2 text-danger"
              style={{ width: "2.5rem" }}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
