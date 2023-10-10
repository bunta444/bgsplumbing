"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const imageUrls = [
  "IMG_6754.jpeg",
  "IMG_6755.jpeg",
  "IMG_6756.jpeg",
  "IMG_6757.jpeg",
  "IMG_6758.jpeg",
  "IMG_6759.jpeg",
  "IMG_6760.jpeg",
  "IMG_6761.jpeg",
  "IMG_6762.jpeg",
  "IMG_6763.jpeg",
  "IMG_6764.jpeg",
  "IMG_6765.jpeg",
  "IMG_6766.jpeg",
  "IMG_6767.jpeg",
  "IMG_6768.jpeg",
  "IMG_6769.jpeg",
  "IMG_6770.jpeg",
  "IMG_6771.jpeg",
  "IMG_6772.jpeg",
  "IMG_6773.jpeg",
  "IMG_6774.jpeg",
  "IMG_6775.jpeg",
  "IMG_6776.jpeg",
  "IMG_6777.jpeg",
  "IMG_6778.jpeg",
];

function Gallery() {
  return (
    <div className="pb-5" style={{ backgroundColor: "#50af50" }}>
      <h1 className="text-center pt-5 text-light">Our Work</h1>
      <p className="lead text-center text-light">
        Take a look at some of our recent work!
      </p>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Carousel className="w-100">
            {imageUrls.map((imageUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  src={imageUrl}
                  className="d-block mx-auto img-fluid"
                  alt={`Slide ${index + 1}`}
                  style={{ maxHeight: "50rem" }} // Adjust max height as needed
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
