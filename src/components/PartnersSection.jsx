import React from "react";
import "./PartnersSection.css";

const PartnersSection = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">

        {/* Heading */}
        <div className="partners-heading">
          <span className="partners-eyebrow">
            OUR PARTNERS
          </span>

          <h2>
            Backed by <span>Great Partners</span>
          </h2>

          <p>
            We are proud to collaborate with organizations that
            support innovation, robotics, and STEM education.
          </p>
        </div>


        {/* Partner Logos */}
        <div className="partners-grid">

          {/* Replace these with your actual images */}
          <div className="partner-logo">
            <img src="/partners/partner1.png" alt="Partner 1" />
          </div>

          <div className="partner-logo">
            <img src="/partners/partner2.png" alt="Partner 2" />
          </div>

          <div className="partner-logo">
            <img src="/partners/partner3.png" alt="Partner 3" />
          </div>

          {/* <div className="partner-logo">
            <img src="/partners/partner-4.png" alt="Partner 4" />
          </div>

          <div className="partner-logo">
            <img src="/partners/partner-5.png" alt="Partner 5" />
          </div>

          <div className="partner-logo">
            <img src="/partners/partner-6.png" alt="Partner 6" />
          </div> */}

        </div>

        {/* Bottom statement */}
        <div className="partners-bottom">
          <span></span>
          <p>
            Together, we are building the future of technology.
          </p>
          <span></span>
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;