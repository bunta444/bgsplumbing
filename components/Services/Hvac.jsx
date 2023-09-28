"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const imageUrls = [
  "IMG_6755.jpg",
  "IMG_6754.jpg",
  "IMG_6766.jpg",
  "IMG_6767.jpg",
  "IMG_6768.jpg",
  "IMG_6769.jpg",
  "IMG_6770.jpg",
  "IMG_6772.jpg",
  "IMG_6776.jpg",
  "IMG_6777.jpg",
  "IMG_6778.jpg",
];

const MyCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // Number of slides to scroll at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const carouselItemStyle = {
    padding: "10px",
    boxSizing: "border-box",
  };

  const carouselImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="p-3" style={{ background: "#50af50" }}>
      <div
        className="rounded container mt-5 mb-5 p-2 pt-5"
        style={{ background: "white" }}
      >
        <h1 className="text-center">HVAC AC and Heating</h1>
        <p className="lead text-center">
          Take a look at some of our recent work
        </p>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          containerClass="carousel-container"
          removeArrowOnDeviceType={[]}
          renderButtonGroupOutside={true}
        >
          {imageUrls.map((imageUrl, index) => (
            <div key={index} style={carouselItemStyle}>
              <img
                src={imageUrl}
                alt={`Image ${index + 1}`}
                style={carouselImageStyle}
              />
            </div>
          ))}
        </Carousel>
        <p className="text-center fs-6 m-4">
          Prevent future drain damages by having your drains regularly cleaned.
          Our team of experienced plumbers will remove all hair, build-up and
          any lost items from your drains to ensure they are running smoothly.
          We’ll get your drain cleaned efficiently and effectively with our
          premium drain cleaning solutions. Contact us today for fast drain
          cleaning services in Fontana, CA, and nearby towns.
        </p>
      </div>
    </div>
  );
};

export default MyCarousel;
