import React from "react";

const showcaseImages = [
  {
    src: "/media/r1.png",
    alt: "RoboFest showcase 1",
  },
  {
    src: "/media/r8.png",
    alt: "RoboFest showcase 2",
  },
  {
    src: "/media/r7.png",
    alt: "RoboFest showcase 3",
  },
  {
    src: "/media/r6.png",
    alt: "RoboFest showcase 4",
  },
  {
    src: "/media/r9.png",
    alt: "RoboFest showcase 5",
  },
  {
    src: "/media/r2.png",
    alt: "RoboFest showcase 6",
  },
  {
    src: "/media/r1.png",
    alt: "RoboFest showcase 7",
  },
  {
    src: "/media/r3.png",
    alt: "RoboFest showcase 8",
  },
//   {
//     src: "/media/r1.png",
//     alt: "RoboFest showcase 9",
//   },
//   {
//     src: "/media/r1.png",
//     alt: "RoboFest showcase 10",
//   },
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
            Our Latest Projects <span>and Showcase</span>
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
              src="https://www.youtube.com/embed/oSLVSvj48E8"
              title="RoboFest 2025 🚀: Shaping a Smarter Tomorrow!"
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