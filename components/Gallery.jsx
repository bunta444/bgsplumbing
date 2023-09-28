"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const imageUrls = [
  "IMG_6754.jpg",
  "IMG_6755.jpg",
  "IMG_6756.jpg",
  "IMG_6757.jpg",
  "IMG_6758.jpg",
  "IMG_6759.jpg",
  "IMG_6760.jpg",
  "IMG_6761.jpg",
  "IMG_6762.jpg",
  "IMG_6763.jpg",
  "IMG_6764.jpg",
  "IMG_6765.jpg",
  "IMG_6766.jpg",
  "IMG_6767.jpg",
  "IMG_6768.jpg",
  "IMG_6769.jpg",
  "IMG_6770.jpg",
  "IMG_6771.jpg",
  "IMG_6772.jpg",
  "IMG_6773.jpg",
  "IMG_6774.jpg",
  "IMG_6775.jpg",
  "IMG_6776.jpg",
  "IMG_6777.jpg",
  "IMG_6778.jpg",
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
