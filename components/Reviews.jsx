"use client";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faYelp, faGoogle } from "@fortawesome/free-brands-svg-icons";

const reviews = [
  {
    stars: 5,
    reviewer: "Syvannah M.",
    review:
      '"Very reliable, nice people. Work well with your schedule, but usually fit me in no matter how busy they are. They have taught me how to maintain my equipment and their repairs have held up every time. I call him for home and business repairs."',
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },
  {
    stars: 5,
    reviewer: "Tony J.",
    review: `"Called Bernardino to inquire about a pipe that was leaking under my roof on the side of my building, I had no idea what it was. He answers the phone himself and knew exactly what the problem was. It was my secondary overflow line for condensation on my AC. He came by that afternoon, cleaned out my main line and the leaking stopped. He was efficient and knowledgeable and I highly recommend. I've used him once before to check my AC and it was the same experience, quick efficient and knowledgeable. Highly recommend."`,
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },
  {
    stars: 5,
    reviewer: "Vince Shewmaker",
    review:
      '"They came same day after another plumber canceled on me. I truly believe that to be a blessing in disguise because they were absolutely awesome. Not only were they friendly, but they arrived earlier, charged absolutely a fair price, and did a fantastic job. I could not recommend them enough and WILL be reaching out to them to check out our HVAC system. I’d give 10 stars if I could"',
    source: {
      name: "Google",
      icon: faGoogle,
    },
  },
  {
    stars: 5,
    reviewer: "Max F.",
    review:
      "Professional. Bilingual. Inspected my sink, informed me of the issues at hand, provided solution to discrepancies and repaired everything in a timely manner. Job was guaranteed. Sink has been immaculate since. Thank you!",
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },

  {
    stars: 5,
    reviewer: "Armando C.",
    review:
      "Super happy with their service. Answered the phone my 1st attempt. Set a time for same day service. Arrived at the time that they said they would. Were clean and  super respectful when entering my home and careful around the workspace. Gave me a firm and fair price to snake my kitchen sink clog. Fixed the problem in less than an hour. I'll definitely be referring business their way.",
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },
  {
    stars: 5,
    reviewer: "Amy S.",
    review:
      "My Saviors!! Incredibly nice people. We had a leak in our garage, coming from our water heater pipe. They arrived in 45 minutes, lines repaired in less than an hour. We had a bit of water damage from the pipe but we did catch it in time. Thank you for your honesty and quick service. Will definitely recommend.",
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },
  {
    stars: 5,
    reviewer: "Jorge A. Tayag, Jr.",
    review:
      "Great people—professional, honest, responsive, punctual.  Excellent customer service, keeps a clean work area. Veteran owned and operated is a plus! Will definitely use again for other services.  Thank you BG Plumbing!",
    source: {
      name: "Google",
      icon: faGoogle,
    },
  },
  {
    stars: 5,
    reviewer: "Aaron Orozco",
    review:
      "Would recommend BG plumbing 100 times over. Bernardo and his wife not only did a very professional and clean job replacing the water heater but also went as far as trouble shooting and correcting a separate problem with my heat furnace/plumbing. Very good communication throughout as well.",
    source: {
      name: "Google",
      icon: faGoogle,
    },
  },

  {
    stars: 5,
    reviewer: "Ferrin H.",
    review:
      "Amazed! We had a line clog. They came out in just 40 minutes, creatively fixed the issue to they didn't have to pull the toilet off (went though the shower drain instead), removed the clog and had our bathroom up and running again in less than about 30 min. Better pricing then the other 2 places I called as well. HIGHLY recommend.",
    source: {
      name: "Yelp",
      icon: faYelp,
    },
  },
];

function Reviews() {
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [showLess, setShowLess] = useState(false);

  const loadMoreReviews = () => {
    setVisibleReviews(visibleReviews + 3);
    setShowLess(true);
  };

  const showLessReviews = () => {
    setVisibleReviews(3);
    setShowLess(false);
  };

  return (
    <div className="container mt-5 pb-4">
      <h1 className="text-center mb-4">See what our clients have to say!</h1>
      <div className="row">
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  {Array(review.stars)
                    .fill(null)
                    .map((_, starIndex) => (
                      <FontAwesomeIcon
                        key={starIndex}
                        icon={faStar}
                        className="text-yellow-400 mb-3"
                        style={{ color: "#f3af42", height: "2rem" }}
                      />
                    ))}
                </div>
                <p className="fs-7">{review.review}</p>
                <h5 className="card-title">-{review.reviewer}</h5>
                <p className="card-text">
                  {review.source.icon && (
                    <FontAwesomeIcon
                      icon={review.source.icon}
                      className="me-1"
                      style={{ width: "1rem" }}
                    />
                  )}
                  {review.source.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleReviews < reviews.length ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 text-center">
              <button
                className="btn btn-primary mt-3"
                onClick={loadMoreReviews}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      ) : (
        showLess && (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-4 text-center">
                <button
                  className="btn btn-primary mt-3"
                  onClick={showLessReviews}
                >
                  Show Less
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Reviews;
