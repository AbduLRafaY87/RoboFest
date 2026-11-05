import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Maximize2,
  ExternalLink,
} from "lucide-react";

import "./styles.css";

const mediaItems = [
  {
    type: "image",
    src: "/images/1.jpg",
    title: "RoboFest Highlights",
  },
  {
    type: "image",
    src: "/images/2.jpg",
    title: "Robotics Competition",
  },
  {
    type: "image",
    src: "/images/3.jpg",
    title: "Participants at RoboFest",
  },
  {
    type: "image",
    src: "/images/4.jpg",
    title: "Innovation & Technology",
  },
  {
    type: "image",
    src: "/images/5.jpg",
    title: "RoboFest Event",
  },
  {
    type: "image",
    src: "/images/6.jpg",
    title: "Competition Highlights",
  },
  {
    type: "image",
    src: "/images/7.jpg",
    title: "Competition Highlights",
  },
  {
    type: "image",
    src: "/images/8.jpg",
    title: "Competition Highlights",
  },
];

const mediaYears = [2022, 2023, 2024, 2025, 2026];

const MediaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [openYear, setOpenYear] = useState(2026);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    setSelectedImage((current) =>
      current === 0
        ? mediaItems.length - 1
        : current - 1
    );
  };

  const showNext = () => {
    setSelectedImage((current) =>
      current === mediaItems.length - 1
        ? 0
        : current + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedImage === null) return;

      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [selectedImage]);

  // Prevent background scrolling while popup is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <div className="media-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="media-hero">

        {/* Background Image */}
        <div className="media-hero-background">
          <img
            src="/heroBg.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Dark / Blue Overlay */}
        <div className="media-hero-overlay"></div>

        {/* Technical Grid */}
        <div className="media-hero-grid"></div>

        <div className="media-container">

          <div className="media-hero-content">

            <span className="media-hero-label">
              ROBOFEST
            </span>

            <h1>
              Media Archive
            </h1>

            <p>
              Photos from RoboFest
            </p>

            <span className="media-hero-description">
              Browse images and video highlights.
              Click any thumbnail to view full media.
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          MEDIA GALLERY
      ===================================================== */}

      <main className="media-content">

        <div className="media-section-heading">

          <span>
            EVENT MEMORIES
          </span>

          <h2>
            Image Gallery
          </h2>

          <p>
            Explore moments from RoboFest and
            relive the excitement, creativity,
            and innovation.
          </p>

        </div>


        <div className="media-years">
          {mediaYears.map((year) => {
            const isOpen = openYear === year;
            const panelId = `media-year-panel-${year}`;

            return (
              <section className="media-year" key={year}>
                <h3 className="media-year-heading">
                  <button
                    className="media-year-toggle"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenYear(isOpen ? null : year)}
                  >
                    <span>{year}</span>
                    <ChevronDown
                      className={isOpen ? "media-year-chevron is-open" : "media-year-chevron"}
                      size={22}
                      aria-hidden="true"
                    />
                  </button>
                </h3>

                <div
                  className="media-year-panel"
                  id={panelId}
                  hidden={!isOpen}
                >
                  {year === 2026 ? (
                    <div className="media-grid">
                      {mediaItems.map((item, index) => (
                        <button
                          key={item.src}
                          className="media-card"
                          onClick={() => openImage(index)}
                          aria-label={`Open ${item.title}`}
                        >
                          <img
                            src={item.src}
                            alt={item.title}
                            className="media-image"
                          />

                          <div className="media-card-overlay">
                            <div className="media-card-icon">
                              <Maximize2 size={20} />
                            </div>
                            <span>{item.title}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <p className="media-year-placeholder">
                      Photos for {year} will be added soon.
                    </p>
                  )}
                </div>
              </section>
            );
          })}
        </div>

        <a
          className="media-view-more"
          href="https://drive.google.com/drive/folders/10aXv4kCZGRK31dp-CAUFC0RVVrauEc6e"
          target="_blank"
          rel="noopener noreferrer"
        >
          View More
          <ExternalLink size={17} />
        </a>

      </main>


      {/* =====================================================
          IMAGE LIGHTBOX
      ===================================================== */}

      {selectedImage !== null && (

        <div
          className="media-lightbox"
          onClick={closeImage}
        >

          <button
            className="media-lightbox-close"
            onClick={closeImage}
            aria-label="Close image"
          >
            <X size={25} />
          </button>


          <button
            className="media-lightbox-arrow media-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={30} />
          </button>


          <div
            className="media-lightbox-content"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <img
              src={
                mediaItems[selectedImage].src
              }
              alt={
                mediaItems[selectedImage].title
              }
            />

            <div className="media-lightbox-caption">
              {mediaItems[selectedImage].title}
            </div>

          </div>


          <button
            className="media-lightbox-arrow media-lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={30} />
          </button>

        </div>

      )}

    </div>
  );
};

export default MediaPage;