import React, { useEffect, useState } from "react";
import "./styles.css";
import banner1 from '../../assets/carousels/banner1.png'
import banner2 from '../../assets/carousels/banner2.png'
import banner3 from '../../assets/carousels/banner3.png'
import About from '../../assets/About.jpg'

const banners = [
  {
    id: 1,
    tag: "ROBOTICS COMPETITION 2026",
    title: "Build. Compete. Innovate.",
    description:
      "Push the limits of robotics, engineering, and creativity. Compete with the best and turn your ideas into reality.",
    image: banner1,
  },
  {
    id: 2,
    tag: "ENGINEERING • TECHNOLOGY • INNOVATION",
    title: "Where Ideas Become Machines.",
    description:
      "Design intelligent robots, solve complex challenges, and experience the future of engineering through hands-on competition.",
    image: banner2,
  },
  {
    id: 3,
    tag: "THE NEXT GENERATION OF ROBOTICS",
    title: "Challenge Yourself.",
    description:
      "Join a community of young innovators, engineers, and problem solvers shaping the future of robotics.",
    image: banner3,
  },
];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="home-page">
      <section className="hero-carousel">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`hero-slide ${index === currentSlide ? "active" : ""
              }`}
          >
            {/* Background Image */}
            <div
              className="hero-slide-image"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            />

            {/* Dark gradient overlay */}
            <div className="hero-overlay" />

            {/* Decorative grid */}
            <div className="hero-grid" />

            {/* Content */}
            {/* <div className="hero-container">
              <div className="hero-content">
                <span className="hero-tag">
                  <span className="hero-tag-dot" />
                  {banner.tag}
                </span>

                <h1>{banner.title}</h1>

                <p>{banner.description}</p>
              </div>
            </div> */}
          </div>
        ))}

        {/* Carousel dots */}
        <div className="carousel-dots">
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              className={`carousel-dot ${index === currentSlide ? "active" : ""
                }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
      <section className="about-robofest">
        <div className="about-robofest-container">

          {/* Left Content */}
          <div className="about-robofest-content">
            <span className="about-eyebrow">ABOUT ROBOFEST</span>

            <h2>
              RoboFest – Pakistan's Premier
              <span> Robotics Festival</span>
            </h2>

            <p className="about-intro">
              RoboFest is an annual robotics festival organized by TechTics Club,
              a student-led startup dedicated to fostering innovation in robotics
              and computer science.
            </p>

            <p>
              This two-day event brings together students from across Pakistan to
              showcase their creativity, technical expertise, and problem-solving
              skills in a dynamic and competitive environment.
            </p>

            <p>
              With <strong>15+ exciting competitions</strong> and multiple
              workshops, RoboFest is structured into four primary categories:
              <strong> Robotics, Programming, STEM and E-Gaming.</strong>
            </p>

            <p>
              RoboFest is more than just a competition—it is a collective movement
              to promote robotics and STEM education in Pakistan.
            </p>

            {/* Mission */}
            <div className="mission-box">
              <span className="mission-label">OUR MISSION</span>

              <p>
                "To provide students with a platform where they can explore,
                innovate, and collaborate, preparing them for the future of
                technology."
              </p>
            </div>

            <a href="#about" className="about-read-more">
              Read More
              <span>→</span>
            </a>
          </div>


          {/* Right Visual */}
          <div className="about-robofest-visual">

            <div className="about-image-card">
              <img
                src={About}
                alt="RoboFest robotics competition"
              />

              <div className="image-overlay"></div>

              <div className="image-label">
                <span>ROBOFEST</span>
                <small>Pakistan's Robotics Festival</small>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="about-stat stat-one">
              <strong>15+</strong>
              <span>Competitions</span>
            </div>

            {/* <div className="about-stat stat-two">
              <strong>2</strong>
              <span>Days of Innovation</span>
            </div> */}

            <div className="about-stat stat-three">
              <strong>4</strong>
              <span>Competition Categories</span>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
};

export default HomePage;
