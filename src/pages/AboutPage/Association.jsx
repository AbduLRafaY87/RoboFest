import React, { useState } from "react";
import {
  Handshake,
  Lightbulb,
  Rocket,
  Code2,
  Trophy,
  ArrowRight,
} from "lucide-react";
import "./styles.css"

import {
  CalendarDays,
  Users,
  School,
  UserRoundCheck,
} from "lucide-react";

const eventStats = {
  2022: {
    students: 300,
    schools: 17,
    volunteers: 15,
  },
  2023: {
    students: 600,
    schools: 22,
    volunteers: 25,
  },
  2024: {
    students: 800,
    schools: 25,
    volunteers: 40,
    "climate action theme introduced": "SDG 13",
  },
  2025: {
    students: 300,
    schools: 17,
    volunteers: 15,
    "climate action theme introduced": "SDG 13",
  },
};

const coreValues = [
  {
    icon: Users,
    title: "Diversity",
    description:
      "RoboFest is open to all students, regardless of background, providing equal opportunities for everyone to participate and shine.",
  },
  {
    icon: Handshake,
    title: "Teamwork",
    description:
      "We believe in the power of collaboration, where participants build strong teams, develop friendships, and grow through shared experiences.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Our competitions and workshops explore the latest technologies, encouraging participants to discover new possibilities in robotics, programming, and STEM.",
  },
  {
    icon: Rocket,
    title: "Empowerment",
    description:
      "RoboFest empowers students to become the next generation of innovators, creators, and engineers by giving them a platform to showcase their ideas.",
  },
];

const committee = [
  {
    name: "Kamran Ali",
    role: "CEO & Founder",
    organization: "TechTics Club",
    image: "/Kamran.jpeg",
  },
  {
    name: "Asil",
    role: "COO & Co-Founder",
    organization: "TechTics Club",
    image: "/Asil.jpeg",
  },
];

const Association = () => {

  const [activeYear, setActiveYear] = useState("2022");

  return (
    <main className="association-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="association-hero">
        {/* Background Image */}
        <div className="association-hero-background">
          <img
            src="/heroBg.jpg"
            alt=""
            aria-hidden="true"
          />
        </div>

        {/* Dark / Blue Overlay */}
        <div className="association-hero-overlay"></div>

        {/* Technical Grid */}
        <div className="association-hero-grid"></div>

        <div className="association-container">
          <div className="association-hero-content">

            <span className="association-eyebrow">
              ABOUT ROBOFEST
            </span>

            <h1>
              Building the Future
              <span> Through Innovation</span>
            </h1>

            <p>
              RoboFest is an exciting robotics event hosted by TechTics, a student-led initiative focused on promoting innovation, creativity, and education in robotics and STEM. Unlike non-profit organizations, RoboFest is a celebration of technology and learning, bringing together participants from all over Pakistan to engage in dynamic competitions and workshops.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          ABOUT ROBOFEST
          ===================================================== */}

      {/* <section className="association-about">
        <div className="association-container">

          <div className="association-about-grid">

            <div className="association-about-content">

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                More Than a
                <span> Competition</span>
              </h2>

              <p>
                RoboFest is an exciting robotics event hosted by
                TechTics, a student-led initiative focused on
                promoting innovation, creativity, and education
                in robotics and STEM.
              </p>

              <p>
                Unlike non-profit organizations, RoboFest is a
                celebration of technology and learning, bringing
                together participants from all over Pakistan to
                engage in dynamic competitions and workshops.
              </p>

              <div className="association-highlight">

                <div className="association-highlight-icon">
                  <Trophy size={23} />
                </div>

                <div>
                  <strong>
                    A platform for young innovators
                  </strong>

                  <span>
                    Compete. Create. Collaborate. Inspire.
                  </span>
                </div>

              </div>

            </div>


            <div className="association-about-visual">

              <div className="association-visual-card">

                <div className="visual-corner top-left"></div>
                <div className="visual-corner top-right"></div>
                <div className="visual-corner bottom-left"></div>
                <div className="visual-corner bottom-right"></div>

                <Code2 size={70} strokeWidth={1.1} />

                <div className="visual-orbit orbit-one"></div>
                <div className="visual-orbit orbit-two"></div>

                <span>
                  ROBOFEST
                </span>

              </div>

            </div>

          </div>

        </div>
      </section> */}


      {/* =====================================================
          CORE VALUES
          ===================================================== */}

      <section className="association-values">
        <div className="association-container">

          <div className="association-section-heading">

            <span className="section-label">
              WHAT WE BELIEVE
            </span>

            <h2>
              Our Core <span>Values</span>
            </h2>

            <p>
              The principles that guide RoboFest and the
              community we are building.
            </p>

          </div>


          <div className="values-grid">

            {coreValues.map((value, index) => {
              const Icon = value.icon;

              return (
                <article
                  className="value-card"
                  key={value.title}
                >

                  <div className="value-card-top">

                    <span className="value-number">
                      0{index + 1}
                    </span>

                    <div className="value-icon">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>

                  </div>

                  <h3>
                    {value.title}
                  </h3>

                  <p>
                    {value.description}
                  </p>

                  <div className="value-line"></div>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          ORGANIZING COMMITTEE
          ===================================================== */}

      <section className="association-committee">
        <div className="association-container">

          <div className="association-section-heading">

            <span className="section-label">
              THE TEAM BEHIND ROBOFEST
            </span>

            <h2>
              Organizing <span>Committee</span>
            </h2>

            <p>
              Meet the people working behind the scenes to
              make RoboFest a reality.
            </p>

          </div>


          <div className="committee-grid">

            {committee.map((member) => (
              <article
                className="committee-card"
                key={member.name}
              >

                <div className="committee-image">

                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at TechTics Club`}
                  />

                </div>

                <div className="committee-info">

                  <span className="committee-role">
                    {member.role}
                  </span>

                  <h3>
                    {member.name}
                  </h3>

                  <p>
                    {member.organization}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CLOSING CTA
          ===================================================== */}

      {/* <section className="association-cta">

        <div className="association-container">

          <div className="association-cta-content">

            <span className="section-label">
              BE PART OF THE MOVEMENT
            </span>

            <h2>
              The Future Starts
              <span> With You.</span>
            </h2>

            <p>
              Join thousands of students, educators, and
              innovators working together to shape the future
              of robotics and STEM in Pakistan.
            </p>

            <a
              href="/competition_2026.php"
              className="association-cta-button"
            >
              Explore RoboFest 2026
              <ArrowRight size={17} />
            </a>

          </div>

        </div>

      </section> */}

      {/* =====================================================
    HISTORY OF ROBOFEST
    ===================================================== */}

      <section className="robofest-history">

        <div className="association-container">

          <div className="history-heading">

            <span className="section-label">
              OUR JOURNEY
            </span>

            <h2>
              The History of <span>RoboFest</span>
            </h2>

            <p>
              From a student-led idea to one of Pakistan's growing
              robotics and STEM festivals, RoboFest continues to
              bring young innovators together year after year.
            </p>

          </div>


          {/* History Image */}
          <div className="history-image-wrapper">

            <div className="history-image">

              <img
                src="/historychart.png"
                alt="RoboFest students participating in robotics activities"
              />

            </div>

            {/* Decorative corners */}
            <div className="history-corner history-corner-tl"></div>
            <div className="history-corner history-corner-br"></div>

          </div>

        </div>

      </section>


      {/* =====================================================
    EVENT STATISTICS
    ===================================================== */}

      <section className="event-statistics">

        <div className="association-container">

          <div className="statistics-heading">

            <span className="section-label">
              BY THE NUMBERS
            </span>

            <h2>
              Event <span>Statistics</span>
            </h2>

            <p>
              A look at the growth and impact of RoboFest
              throughout the years.
            </p>

          </div>


          {/* Year Tabs */}
          <div className="statistics-tabs">

            <div className="statistics-tabs-inner">

              {Object.keys(eventStats).map((year) => (

                <button
                  key={year}
                  className={`statistics-tab ${activeYear === year ? "active" : ""
                    }`}
                  onClick={() => setActiveYear(year)}
                >
                  <CalendarDays size={16} />
                  {year}
                </button>

              ))}

            </div>

          </div>


          {/* Statistics */}
          <div className="statistics-grid">

            <div className="statistic-card">

              <div className="statistic-icon">
                <Users size={22} />
              </div>

              <div className="statistic-number">
                {eventStats[activeYear].students}
              </div>

              <div className="statistic-label">
                Students
              </div>

              <span className="statistic-year">
                ROBOFEST {activeYear}
              </span>

            </div>


            <div className="statistic-card">

              <div className="statistic-icon">
                <School size={22} />
              </div>

              <div className="statistic-number">
                {eventStats[activeYear].schools}
              </div>

              <div className="statistic-label">
                Schools
              </div>

              <span className="statistic-year">
                ROBOFEST {activeYear}
              </span>

            </div>


            <div className="statistic-card">

              <div className="statistic-icon">
                <UserRoundCheck size={22} />
              </div>

              <div className="statistic-number">
                {eventStats[activeYear].volunteers}
              </div>

              <div className="statistic-label">
                Volunteers
              </div>

              <span className="statistic-year">
                ROBOFEST {activeYear}
              </span>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default Association;