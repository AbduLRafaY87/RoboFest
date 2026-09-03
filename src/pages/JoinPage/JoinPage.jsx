import React from "react";
import {
  ArrowRight,
  Clock3,
  Users,
  Trophy,
  Handshake,
} from "lucide-react";
import "./styles.css";

const opportunities = [
  {
    type: "Internship",
    title: "RoboFest Internship Program",
    image: "/joinus/volunteers.jpg",
    icon: Clock3,
    description:
      "Help the event run smoothly by supporting participants, guiding visitors, and assisting the RoboFest team across key areas during competition days.",
    points: [
      "Gain 30+ hours of hands-on experience",
      "Assist teams with directions, schedules, and logistics",
      "Help with venue setup, coordination, and on-ground operations",
    ],
    link: "https://tinyurl.com/RoboFest2026Internship",
  },
  {
    type: "Ambassador",
    title: "Ambassador at RoboFest",
    image: "/joinus/ambassador.png",
    icon: Users,
    description:
      "Represent RoboFest at your school and in your community. Encourage participation, share updates, and help teams prepare for the event.",
    points: [
      "Promote RoboFest and help grow participation",
      "Share deadlines, resources, and announcements",
      "Support team formation and preparation at your school",
    ],
    link: "https://tinyurl.com/RoboFest2026Ambassador",
  },
  {
    type: "Teams",
    title: "Open Team Registration",
    image: "/joinus/openteam.jfif",
    icon: Trophy,
    description:
      "Register your team and compete at RoboFest. Whether you're a first-timer or experienced builder, this is your chance to test your skills and learn with others.",
    points: [
      "Choose your category and register independently",
      "Access event rules, checklists, and resources",
      "Showcase your robot, creativity, and teamwork",
    ],
    link: "https://tinyurl.com/RoboFest2026OpenTeam",
  },
  {
    type: "Contributor",
    title: "Be a Contributor",
    image: "/joinus/contributor.jpg",
    icon: Handshake,
    description:
      "Support RoboFest through sponsorship, partnerships, or resources that help expand STEM learning and make participation accessible for more students.",
    points: [
      "Sponsor awards, kits, venue support, or team grants",
      "Partner with RoboFest to support STEM initiatives",
      "Help create a bigger impact for students and schools",
    ],
    link: "https://forms.gle/deuSsmLxs6zLLRQTA",
  },
];

const JoinPage = () => {
  return (
    <main className="join-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="join-hero">

        {/* Add your banner image here */}
        <div className="join-hero-background">
          <img
            src="/joinusbanner.png"
            alt=""
            aria-hidden="true"
          />
        </div>
{/* 
        <div className="join-hero-overlay"></div>

        <div className="join-hero-grid"></div>

        <div className="join-container">

          <div className="join-hero-content">

            <span className="join-eyebrow">
              JOIN THE MOVEMENT
            </span>

            <h1>
              Be Part of
              <span> RoboFest</span>
            </h1>

            <p>
              Together, we're building an unforgettable
              experience for the next generation of innovators.
            </p>

          </div>

        </div> */}

      </section>


      {/* =====================================================
          INTRO
          ===================================================== */}

      <section className="join-intro">

        <div className="join-container">

          <div className="join-intro-content">

            <span className="join-section-label">
              GET INVOLVED
            </span>

            <h2>
              Find Your Place at
              <span> RoboFest</span>
            </h2>

            <p>
              Be part of RoboFest and help create an
              unforgettable experience for teams, mentors,
              and visitors. Choose a role below and apply
              to join the community.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          OPPORTUNITIES
          ===================================================== */}

      <section className="join-opportunities">

        <div className="join-container">

          <div className="join-cards">

            {opportunities.map((opportunity) => {

              const Icon = opportunity.icon;

              return (
                <article
                  className="join-card"
                  key={opportunity.title}
                >

                  {/* Image */}

                  <div className="join-card-image">

                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                    />

                    <div className="join-card-image-overlay"></div>

                    <div className="join-card-icon">
                      <Icon size={19} />
                    </div>

                  </div>


                  {/* Content */}

                  <div className="join-card-content">

                    <span className="join-card-type">
                      {opportunity.type}
                    </span>

                    <h3>
                      {opportunity.title}
                    </h3>

                    <p className="join-card-description">
                      {opportunity.description}
                    </p>


                    {/* Points */}

                    <ul className="join-card-points">

                      {opportunity.points.map((point) => (
                        <li key={point}>
                          <span className="join-check">
                            ✓
                          </span>

                          <span>
                            {point}
                          </span>
                        </li>
                      ))}

                    </ul>


                    {/* Button */}

                    <a
                      href={opportunity.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="join-apply-button"
                    >
                      Apply Now

                      <ArrowRight size={16} />

                    </a>

                  </div>

                </article>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM CTA
          ===================================================== */}

      {/* <section className="join-bottom">

        <div className="join-container">

          <div className="join-bottom-content">

            <span className="join-section-label">
              ROBOFEST 2026
            </span>

            <h2>
              Your Role.
              <span> Our Future.</span>
            </h2>

            <p>
              Whether you're building robots, supporting teams,
              spreading the word, or helping behind the scenes,
              there's a place for you at RoboFest.
            </p>

          </div>

        </div>

      </section> */}

    </main>
  );
};

export default JoinPage;