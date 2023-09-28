"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../app/globals.css";

const Hero = () => {
  const backgroundImageUrl = "bgsplumbing.jpeg";
  const [animationActive, setAnimationActive] = useState(false);
  const [text, setText] = useState("Call the Best, Flush the Rest!");

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationActive(true);
    }, 1000);

    const textTimeout = setTimeout(() => {
      setText((prevText) =>
        prevText === "Call the Best, Flush the Rest!"
          ? "Fast, Reliable Service Now"
          : "Call the Best, Flush the Rest!"
      );
      setAnimationActive(false);
    }, 3000); // Change the delay value here (in milliseconds)

    return () => {
      clearTimeout(animationTimeout);
      clearTimeout(textTimeout);
    };
  }, [text]);

  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          className={`animated-text ${
            animationActive ? "fade-slide-out" : "fade-slide-in"
          }`}
          style={{
            color: "#fff",
            fontSize: "3rem",
            marginBottom: "2rem",
            textAlign: "center",
            // Responsive font size
            "@media (maxWidth: 768px)": {
              // Corrected syntax for media query
              fontSize: "2rem",
            },
          }}
        >
          <h1>{text}</h1>
        </div>
        <button className="btn btn-warning">Call Now</button>
      </div>
    </div>
  );
};

export default Hero;
