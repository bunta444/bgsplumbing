import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function About() {
  return (
    <div
      className="about-us-container pt-5"
      style={{ backgroundColor: "#50af50" }}
    >
      <section className="why-choose-us mt-4">
        <div className="container">
          <div className="row">
            <h3 className="display-5 text-center">Why Chose Us?</h3>
            <div className="row">
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">1. Expertise You Can Trust:</span>{" "}
                  Our team of highly skilled technicians is well-trained and
                  certified in plumbing, heating, ventilation, and air
                  conditioning services. We bring extensive knowledge and
                  hands-on experience to every project, ensuring top-notch
                  results.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">
                    2. Prompt and Reliable Service:
                  </span>{" "}
                  We value your time, and that's why we pride ourselves on our
                  punctuality. When you schedule a service with us, you can
                  count on us to arrive on time and complete the job
                  efficiently, reducing any inconvenience to you.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">3. Comprehensive Solutions:</span>{" "}
                  Whether it's a plumbing emergency, HVAC installation, repair,
                  or maintenance, we offer a wide range of services to meet all
                  your needs. From fixing leaks to enhancing your indoor air
                  quality, we've got you covered.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">4. Cutting-Edge Technology:</span>{" "}
                  We stay updated with the latest advancements in plumbing and
                  HVAC technology. This allows us to provide you with the most
                  efficient and cost-effective solutions, ultimately saving you
                  time and money.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">5. Customer Satisfaction:</span>{" "}
                  Your satisfaction is our top priority. We believe in open
                  communication, transparent pricing, and a commitment to
                  delivering exceptional service. Our many satisfied customers
                  speak to the quality of our work.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
              <div className="col-md-4 text-center my-4">
                <p>
                  <span className="fw-bold">6. Local Experts:</span> As a local
                  company, we have a deep understanding of the unique plumbing
                  and HVAC needs in our community. We take pride in serving our
                  neighbors and contributing to the well-being of our area.
                </p>
                <img src="greencheck.png" alt="check" width={"75rem"} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section mt-4">
        <div className="container">
          <h2 className="display-5 text-center">About Us</h2>
          <div className="row pb-5">
            <div className="col-md-6">
              <p className="fs-5">
                With history spanning over 19 years in the plumbing and HVAC
                industries, our dedicated team possesses a wealth of experience
                and technical expertise that sets us apart. Our commitment to
                excellence ensures that every project is completed with the
                utmost precision and attention to detail. Whether you require
                drain cleaning, repairs, repiping, or water heater installation
                services, you can trust our professionals to tackle the job with
                the most proficiency. Beyond these essential services, we also
                specialize in the servicing and repair of sewer lines,
                addressing even the most complex plumbing challenges. At BGs
                Plumbing, we take great pride in our legacy of delivering
                top-quality solutions to our valued clients. When you choose us,
                you're not only benefiting from our years of expertise but also
                gaining access to a team that values your satisfaction above all
                else. Contact us today to book an appointment.
              </p>
            </div>
            <div className="col-md-6">
              <img src="bgs.jpeg" alt="Why Choose Us?" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
