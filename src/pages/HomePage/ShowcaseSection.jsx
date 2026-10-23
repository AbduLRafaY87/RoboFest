import React from "react";

const showcaseImages = [
  {
    src: "/media/3.jpg",
    alt: "RoboFest showcase 1",
  },
  {
    src: "/media/2.jpg",
    alt: "RoboFest showcase 2",
  },
  {
    src: "/media/3.jpg",
    alt: "RoboFest showcase 1",
  },
  {
    src: "/media/4.jpg",
    alt: "RoboFest showcase 4",
  },
  {
    src: "/media/5.jpg",
    alt: "RoboFest showcase 5",
  },
  {
    src: "/media/6.jpg",
    alt: "RoboFest showcase 6",
  },
  {
    src: "/media/7.jpg",
    alt: "RoboFest showcase 7",
  },
  {
    src: "/media/8.jpg",
    alt: "RoboFest showcase 8",
  },
  {
    src: "/media/9.jpg",
    alt: "RoboFest showcase 9",
  },
  {
    src: "/media/10.jpg",
    alt: "RoboFest showcase 10",
  },
  {
    src: "/media/11.jpg",
    alt: "RoboFest showcase 11",
  },
  {
    src: "/media/12.jpg",
    alt: "RoboFest showcase 12",
  },
];

const ShowcaseSection = () => {
  return (
    <section className="showcase-section">
      <div className="showcase-container">

        {/* Heading */}
        <div className="showcase-heading">
          <span className="showcase-eyebrow">
            OUR SHOWCASE
          </span>

          <h2>
            Our Latest Event <span>and Showcase</span>
          </h2>

          <p>
            Explore the projects, competitions, and unforgettable
            moments that bring the RoboFest community together.
          </p>
        </div>


        {/* Featured YouTube Video */}
        <div className="showcase-video-wrapper">
          <div className="showcase-video">
            <iframe
              src="https://www.youtube.com/embed/ENnr4G1W43w?si=y-K99le772-AUTi5"
              title="RoboFest 2026 🚀: SWARM ROBOTICS"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>


        {/* Gallery */}
        <div className="showcase-gallery">
          {showcaseImages.map((image, index) => (
            <div
              className={`showcase-image showcase-image-${index + 1}`}
              key={image.src}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
              />

              <div className="showcase-image-overlay">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShowcaseSection;