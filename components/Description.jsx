import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Description = () => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const openingHours = [
    "7:00 AM - 7:00 PM", // Monday
    "7:00 AM - 7:00 PM", // Tuesday
    "7:00 AM - 7:00 PM", // Wednesday
    "7:00 AM - 7:00 PM", // Thursday
    "7:00 AM - 7:00 PM", // Friday
    "9:00 AM - 4:30 PM", // Saturday
    "Closed", // Sunday
  ];

  return (
    <div className="container mt-5 mb-5">
      <h1 style={{ color: "green" }}>BG's Plumbing and Rooter</h1>
      <h5>7831 Marek Court Fontana, CA 92336</h5>
      <p>
        <strong>Phone: </strong>(909) 688-6486
      </p>
      <p>
        <strong>Email: </strong>bgsplumbing057@gmail.com
      </p>
      <h2>Opening Hours</h2>
      <ul>
        {daysOfWeek.map((day, index) => (
          <li key={index}>
            <strong>{day}:</strong> {openingHours[index]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Service Areas: </strong>Fontana, San Bernardino, Alta Loma,
        Rancho, Rialto, Bloomington, Pomona, Chino, Upland, Loma Linda, La Verne
      </p>
    </div>
  );
};

export default Description;
