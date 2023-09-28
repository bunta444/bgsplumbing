"use client";
import React from "react";
import { FacebookProvider, EmbeddedVideo } from "react-facebook";

const SeeUsInAction = () => {
  const videoUrls = [
    "https://fb.watch/mS8w-ksZmW/",
    "https://fb.watch/mS8vafM46v/",
    "https://fb.watch/mS8qZOFqsG/",
  ];

  return (
    <div className="bg-success p-4">
      <h1 className="text-white pt-5 mb-4">See Us in Action</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <FacebookProvider appId="YOUR_APP_ID">
          {videoUrls.map((videoUrl, index) => (
            <div
              key={index}
              className="mb-2 me-5"
              style={{ width: "20rem", height: "auto" }}
            >
              <EmbeddedVideo href={videoUrl} />
            </div>
          ))}
        </FacebookProvider>
      </div>
    </div>
  );
};

export default SeeUsInAction;
