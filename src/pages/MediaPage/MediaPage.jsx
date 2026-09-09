import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ExternalLink,
} from "lucide-react";

import "./styles.css";

const mediaItems = [
  {
    type: "image",
    src: "/images/4.jpg",
    title: "RoboFest Highlights",
  },
  {
    type: "image",
    src: "/images/9.jpg",
    title: "Robotics Competition",
  },
  {
    type: "image",
    src: "/images/11.jpg",
    title: "Participants at RoboFest",
  },
  {
    type: "image",
    src: "/images/12.jpg",
    title: "Innovation & Technology",
  },
  {
    type: "image",
    src: "/images/17.jpg",
    title: "RoboFest Event",
  },
  {
    type: "image",
    src: "/images/21.jpg",
    title: "Competition Highlights",
  },
  {
    type: "image",
    src: "/images/31.jpg",
    title: "Competition Highlights",
  },
  {
    type: "image",
    src: "/images/45.jpg",
    title: "Competition Highlights",
  },
];

const MediaPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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

                <span>
                  {item.title}
                </span>

              </div>

            </button>

          ))}

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