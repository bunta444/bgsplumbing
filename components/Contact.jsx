"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ScheduleForm = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv50m1a",
        "template_uzxhio8",
        ref.current,
        "ahHAp_RkCtxYqBlD4"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <form ref={ref} onSubmit={handleSubmit} className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Send
      </button>

      {success && (
        <div className="mt-3 text-success">
          Your message has been sent. We'll get back to you soon :)
        </div>
      )}
    </form>
  );
};

export default ScheduleForm;
