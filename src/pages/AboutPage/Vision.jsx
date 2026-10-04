import React from "react";
import {
    Target,
    Eye,
    HeartHandshake,
    Lightbulb,
    Users,
    GraduationCap,
    Cpu,
    Rocket,
    BookOpen,
    ArrowRight,
} from "lucide-react";
import "./styles.css"

const objectives = [
    {
        icon: GraduationCap,
        title: "Encourage STEM Education",
        description:
            "To promote the importance of Science, Technology, Engineering, and Mathematics (STEM) education among students across Pakistan.",
    },
    {
        icon: Lightbulb,
        title: "Foster Innovation and Creativity",
        description:
            "To provide students with the tools and opportunities to think outside the box, solve complex problems, and develop creative solutions.",
    },
    {
        icon: Users,
        title: "Build Collaboration and Teamwork",
        description:
            "To create a collaborative environment where students work together to build, program, and compete, developing teamwork and leadership skills.",
    },
    {
        icon: Rocket,
        title: "Develop Future Leaders",
        description:
            "To empower students with the skills, knowledge, and confidence to pursue careers in robotics, programming, and engineering.",
    },
    {
        icon: Cpu,
        title: "Support Technological Advancements",
        description:
            "To create a platform where students can engage with the latest technologies, stay updated on trends, and prepare for future challenges in the tech world.",
    },
];

const Vision = () => {
    return (
        <main className="vision-page">

            {/* =====================================================
          HERO
          ===================================================== */}

            <section className="vision-hero">

                {/* Background Image */}
                <div className="vision-hero-background">
                    <img
                        src="/heroBg.jpg"
                        alt=""
                        aria-hidden="true"
                    />
                </div>

                {/* Overlay */}
                <div className="vision-hero-overlay"></div>

                {/* Technical Grid */}
                <div className="vision-hero-grid"></div>

                <div className="vision-container">

                    <div className="vision-hero-content">

                        <span className="vision-eyebrow">
                            OUR PURPOSE
                        </span>

                        <h1>
                            Our Mission
                            <span>& Vision</span>
                        </h1>

                        <p>
                            Empowering students to explore, innovate, and
                            shape the future of robotics and STEM in Pakistan.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          MISSION & VISION
          ===================================================== */}

            <section className="mission-vision-section">

                <div className="vision-container">

                    <div className="mission-vision-heading">

                        <span className="vision-section-label">
                            WHAT DRIVES US
                        </span>

                        <h2>
                            Our Mission <span>& Vision</span>
                        </h2>

                        <p>
                            Everything RoboFest does is driven by a commitment
                            to empower the next generation of innovators.
                        </p>

                    </div>


                    <div className="mission-vision-grid">

                        {/* Mission */}

                        <article className="mission-card">

                            <div className="mission-card-top">

                                <div className="mission-icon">
                                    <Target size={25} />
                                </div>

                                <span>01</span>

                            </div>

                            <span className="mission-label">
                                OUR MISSION
                            </span>

                            <h3>
                                Explore. Innovate.
                                <span> Collaborate.</span>
                            </h3>

                            <blockquote>
                                "To provide students with a platform where
                                they can explore, innovate, and collaborate,
                                preparing them for the future of technology."
                            </blockquote>

                        </article>


                        {/* Vision */}

                        <article className="vision-card">

                            <div className="mission-card-top">

                                <div className="mission-icon">
                                    <Eye size={25} />
                                </div>

                                <span>02</span>

                            </div>

                            <span className="mission-label">
                                OUR VISION
                            </span>

                            <h3>
                                Shaping the Next
                                <span> Generation</span>
                            </h3>

                            <blockquote>
                                "To become the leading festival that nurtures
                                and empowers the next generation of innovators,
                                creators, and problem-solvers in robotics and
                                STEM, driving technological advancement and
                                shaping a brighter future for Pakistan."
                            </blockquote>

                        </article>

                    </div>

                </div>

            </section>


            {/* =====================================================
          OUR IMPACT
          ===================================================== */}

            <section className="vision-impact">

                <div className="vision-container">

                    <div className="impact-content">

                        <div className="impact-icon">
                            <HeartHandshake size={28} />
                        </div>

                        <span className="vision-section-label">
                            OUR IMPACT
                        </span>

                        <h2>
                            Creating Impact Beyond
                            <span> the Competition</span>
                        </h2>

                        <p>
                            RoboFest aims to have a lasting impact on the future
                            of robotics and STEM education in Pakistan by
                            providing students with real-world challenges that
                            foster creativity, teamwork, and critical thinking.
                        </p>

                        <p>
                            Through this platform, we inspire the next generation
                            of innovators, enabling them to make meaningful
                            contributions to technology and society.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          OBJECTIVES
          ===================================================== */}

            <section className="vision-objectives">

                <div className="vision-container">

                    <div className="objectives-heading">

                        <span className="vision-section-label">
                            OUR OBJECTIVES
                        </span>

                        <h2>
                            Turning Our Vision
                            <span> Into Action</span>
                        </h2>

                        <p>
                            Five key objectives guide our efforts to create
                            meaningful opportunities for students.
                        </p>

                    </div>


                    <div className="objectives-grid">

                        {objectives.map((objective, index) => {

                            const Icon = objective.icon;

                            return (
                                <article
                                    className={`objective-card objective-card-${index + 1}`}
                                    key={objective.title}
                                >

                                    <div className="objective-top">

                                        <span className="objective-number">
                                            0{index + 1}
                                        </span>

                                        <div className="objective-icon">
                                            <Icon size={22} />
                                        </div>

                                    </div>

                                    <h3>
                                        {objective.title}
                                    </h3>

                                    <p>
                                        {objective.description}
                                    </p>

                                </article>
                            );

                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
          ABOUT TECHTICS
          ===================================================== */}

            <section className="techtics-section">

                <div className="vision-container">

                    <div className="techtics-grid">

                        {/* Story */}

                        <div className="techtics-content">

                            <span className="vision-section-label">
                                THE ORGANIZATION BEHIND ROBOFEST
                            </span>

                            <h2>
                                About <span>TechTics Club</span>
                            </h2>

                            <p>
                                TechTics is a student-led initiative founded in
                                2019 during the GEARs 19 competition at PAF-KIET,
                                combining "Tech" (Technology) and "Tics" (Robotics)
                                to bridge the gap between innovation and hands-on
                                learning.
                            </p>

                            <p>
                                Starting with just eight students, TechTics has
                                grown into a thriving community with over 300
                                graduates in Robotics and STEM.
                            </p>

                            <div className="techtics-stats">

                                <div>
                                    <strong>2019</strong>
                                    <span>Founded</span>
                                </div>

                                <div>
                                    <strong>300+</strong>
                                    <span>Graduates</span>
                                </div>

                                <div>
                                    <strong>8</strong>
                                    <span>Founding Students</span>
                                </div>

                            </div>

                        </div>


                        {/* Visual */}

                        <div className="techtics-visual">
                            <div className="techtics-visual-card">
                                <img src="./visionabout.jpg" alt="Background Image"></img>

                                {/* <BookOpen
                  size={60}
                  strokeWidth={1.2}
                />

                <span>
                  TECHTICS
                </span>

                <small>
                  TECHNOLOGY • ROBOTICS • EDUCATION
                </small>

                <div className="techtics-ring ring-one"></div>
                <div className="techtics-ring ring-two"></div> */}

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
          TECHTICS VISION
          ===================================================== */}

            <section className="techtics-vision">

                <div className="vision-container">

                    <div className="techtics-vision-box">

                        <div className="techtics-vision-icon">
                            <Eye size={27} />
                        </div>

                        <span className="vision-section-label">
                            TECHTICS VISION
                        </span>

                        <h2>
                            Making Robotics
                            <span> Accessible</span>
                        </h2>

                        <p>
                            "To introduce a centralized robotics curriculum
                            for students from Grade 3 to Grade 12 in Pakistan,
                            while providing them with research and development
                            opportunities. This dual approach enables students
                            to transform their innovative ideas into reality
                            and contribute meaningfully to the field of
                            robotics."
                        </p>

                        <div className="vision-divider"></div>

                        <p>
                            As TechTics continues to expand, we remain committed
                            to making robotics and STEM education accessible to
                            students across Pakistan, launching sustainable
                            robotics products, and training educators to develop
                            a strong network of robotics experts.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
          CLOSING CTA
          ===================================================== */}

            {/* <section className="vision-cta">

        <div className="vision-container">

          <div className="vision-cta-content">

            <span className="vision-section-label">
              THE FUTURE IS WAITING
            </span>

            <h2>
              Let's Build the
              <span> Future Together.</span>
            </h2>

            <p>
              RoboFest gives students the platform to turn
              curiosity into creation and ideas into reality.
            </p>

            <a
              href="/competition_2026.php"
              className="vision-cta-button"
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

        </main>
    );
};

export default Vision;