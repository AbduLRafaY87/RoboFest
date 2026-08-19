import React, { useEffect, useState } from "react";
import "./styles.css";
import banner1 from '../../assets/carousels/banner1.png'
import banner2 from '../../assets/carousels/banner2.png'
import banner3 from '../../assets/carousels/banner3.png'
import About from '../../assets/About.jpg'
import aboutOne from '/standout1.png'
import aboutTwo from '/standout2.png'
import aboutThree from '/standout3.png'
import aboutFour from '/standout4.png'
import NumbersSection from "./NumbersSection";
import PartnersSection from "../../components/PartnersSection";
import ShowcaseSection from "./ShowcaseSection";

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

      <section className="why-robofest">
        <div className="why-robofest-container">

          {/* Section Heading */}
          <div className="why-heading">
            <span className="section-eyebrow">
              WHY ROBOFEST
            </span>

            <h2>
              Why RoboFest <span>Stands Out</span>
            </h2>

            <p>
              Discover what makes our event unique
            </p>
          </div>


          {/* Cards */}
          <div className="why-cards">

            {/* Card 01 */}
            <article className="why-card">
              <img src={aboutOne} alt="RoboFest robotics competition" className="why-card-image" />

              <div className="why-card-top">
                <span className="why-number">01</span>

                <div className="why-icon">
                  <span>↗</span>
                </div>
              </div>

              <div className="why-card-content">
                <h3>Hands-on Learning</h3>

                <p>
                  RoboFest serves as a year-end evaluation for students engaged
                  in robotics and programming curricula, allowing them to apply
                  their knowledge in real-world challenges.
                </p>
              </div>
            </article>


            {/* Card 02 */}
            <article className="why-card">
              <img src={aboutTwo} alt="RoboFest robotics competition" className="why-card-image" />
              <div className="why-card-top">
                <span className="why-number">02</span>

                <div className="why-icon">
                  <span>◎</span>
                </div>
              </div>

              <div className="why-card-content">
                <h3>Diverse Participation</h3>

                <p>
                  The event attracts students from schools, colleges, and
                  universities, fostering an inclusive learning and competitive
                  environment.
                </p>
              </div>
            </article>


            {/* Card 03 */}
            <article className="why-card">
              <img src={aboutThree} alt="RoboFest robotics competition" className="why-card-image" />

              <div className="why-card-top">
                <span className="why-number">03</span>

                <div className="why-icon">
                  <span>✦</span>
                </div>
              </div>

              <div className="why-card-content">
                <h3>Innovation & Collaboration</h3>

                <p>
                  Each competition category comes with unique rules and
                  challenges, encouraging schools to participate in multiple
                  domains, push boundaries, and celebrate teamwork.
                </p>
              </div>
            </article>


            {/* Card 04 */}
            <article className="why-card">
              <img src={aboutFour} alt="RoboFest robotics competition" className="why-card-image" />

              <div className="why-card-top">
                <span className="why-number">04</span>

                <div className="why-icon">
                  <span>⌘</span>
                </div>
              </div>

              <div className="why-card-content">
                <h3>Standardized Curriculum</h3>

                <p>
                  As part of its broader vision, TechTics Club is committed to
                  developing a standardized robotics curriculum for schools,
                  ensuring that students receive structured learning experiences
                  in this rapidly evolving field.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      <section className="robofest-event">

  {/* Background Effects */}
  <div className="event-glow event-glow-one"></div>
  <div className="event-glow event-glow-two"></div>
  <div className="event-grid"></div>

  <div className="robofest-event-container">

    {/* Event Top Layout (Content + Image Side-by-Side) */}
    <div className="event-main-content">
      
      {/* Left Column: Event Header */}
      <div className="event-header">

        <div className="event-badge">
          <span className="event-live-dot"></span>
          UPCOMING EVENT
        </div>

        <span className="event-year">
          ROBOFEST 2026
        </span>

        <h2>
          Swarm
          <span> Robotics</span>
        </h2>

        <div className="event-divider"></div>

        <h3>
          Bridging Gaps, Empowering Equality
        </h3>

        <p>
          Join us at RoboFest 2026 and be part of a movement shaping
          the future of robotics and STEM education in Pakistan.
        </p>

      </div>

      {/* Right Column: Trophy Image */}
      <div className="event-image-wrapper">
        <img 
          src="/trophy.jpg" 
          alt="Robofest Trophy" 
          className="event-trophy-img" 
        />
      </div>

    </div>


    {/* Competition Categories */}
    <div className="event-categories">

      <article className="event-category">
        <div className="category-number">01</div>

        <div className="category-icon">
          🤖
        </div>

        <div>
          <h4>Robotics</h4>
          <p>
            Hands-on robotics challenges and competitions
          </p>
        </div>

        <span className="category-arrow">↗</span>
      </article>


      <article className="event-category">
        <div className="category-number">02</div>

        <div className="category-icon">
          &lt;/&gt;
        </div>

        <div>
          <h4>Programming</h4>
          <p>
            Coding challenges and software development
          </p>
        </div>

        <span className="category-arrow">↗</span>
      </article>


      <article className="event-category">
        <div className="category-number">03</div>

        <div className="category-icon">
          ⚙
        </div>

        <div>
          <h4>STEAM</h4>
          <p>
            Science, Technology, Engineering & Mathematics
          </p>
        </div>

        <span className="category-arrow">↗</span>
      </article>


      <article className="event-category">
        <div className="category-number">04</div>

        <div className="category-icon">
          ◈
        </div>

        <div>
          <h4>E-Gaming</h4>
          <p>
            Competitive gaming and esports tournaments
          </p>
        </div>

        <span className="category-arrow">↗</span>
      </article>

    </div>


    {/* CTA */}
    <div className="event-cta">

      <div className="event-cta-text">
        <span>READY TO COMPETE?</span>
        <p>
          Build. Innovate. Compete. Make your mark at RoboFest 2026.
        </p>
      </div>

      <a
        href="https://robofest.pk/competition_2026.php"
        className="event-register-btn"
      >
        Register Now
        <span>→</span>
      </a>

    </div>

  </div>

</section>
      
      <NumbersSection/>
      <PartnersSection/>
      <ShowcaseSection/>
      

    </main>
  );
};

export default HomePage;
