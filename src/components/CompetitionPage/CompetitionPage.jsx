import React, { useState } from "react";
import {
  FileText,
  Handshake,
  BookOpen,
  UserCheck,
  Users,
  Gavel,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  // Linkedin,
  // Github,
  // Instagram,
  BriefcaseBusiness,
} from "lucide-react";
import EventInfo from "./EventInfo";

import "./CompetitionPage.css";

const iconMap = {
  "Concept Note": FileText,
  "Sponsor Note": Handshake,
  RuleBook: BookOpen,
  "Ambassadors Profile": UserCheck,
  "Volunteers Profile": Users,
  Judges: Gavel,
  Organizers: ShieldCheck,
};

const CompetitionPage = ({ competition }) => {
  const [activeTab, setActiveTab] = useState(
    competition?.tabs?.[0]?.id || ""
  );

  const activeTabData = competition?.tabs?.find(
    (tab) => tab.id === activeTab
  );

  if (!competition) {
    return (
      <div className="competition-page">
        <div className="competition-empty">
          <h2>Competition not found</h2>
          <p>
            The requested RoboFest competition could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="competition-page">

      {/* ================= HERO ================= */}

      <section className="competition-hero">

        <img
          src={competition.heroImage}
          alt={`RoboFest ${competition.year}`}
          className="competition-hero-image"
        />

        <div className="competition-hero-overlay"></div>

        <div className="competition-hero-grid"></div>

      </section>


      {/* ================= EVENT INFO ================= */}

      <EventInfo
        eventInfo={competition.eventInfo}
        year={competition.year}
      />

      {competition.previousYearYoutube && (
          <CompetitionVideo
            url={competition.previousYearYoutube}
            year={String(Number(competition.year) - 1)}
            eyebrow="LAST YEAR'S HIGHLIGHTS"
            variant="previous-year"
          />
        )}


      {/* ================= STICKY TABS ================= */}

      <nav className="competition-navigation">
        <div className="competition-tabs-container">

          <div className="competition-tabs">

            {competition.tabs?.map((tab) => {
              const Icon = iconMap[tab.label] || FileText;

              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`competition-tab ${activeTab === tab.id ? "active" : ""
                    }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={17} />
                  <span>{tab.label}</span>
                </button>
              );
            })}

          </div>

        </div>
      </nav>




      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}

      <main className="competition-content">

        

        {activeTabData && (
          <section className="competition-tab-content">

            {/* Section Heading */}

            <div className="competition-section-heading">

              <span>
                ROBOFEST {competition.year}
              </span>

              <h2>
                {activeTabData.label}
              </h2>

            </div>


            {/* =====================================================
                CONCEPT NOTE
            ===================================================== */}

            {activeTabData.type === "concept" && (
              <div className="concept-content">

                <div className="concept-main-card">

                  <div className="document-copy">
                    <div className="concept-icon">
                      <FileText size={26} />
                    </div>

                    <p>
                      {activeTabData.description}
                    </p>

                    {activeTabData.link && (
                      <a
                        href={activeTabData.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="competition-resource-link"
                      >
                        {activeTabData.link.text}
                        <ArrowRight size={17} />
                      </a>
                    )}
                  </div>

                  {activeTabData.image && (
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.imageAlt || `${activeTabData.label} preview`}
                      className="document-image"
                    />
                  )}

                </div>

              </div>
            )}


            {/* =====================================================
                SPONSOR NOTE
            ===================================================== */}

            {activeTabData.type === "resource" && (
              <div className="resource-content">

                <div className="resource-intro-card">

                  <div className="resource-icon">
                    <Handshake size={26} />
                  </div>

                  <h3>
                    Our Partners
                  </h3>

                  <p>
                    {activeTabData.description}
                  </p>

                  {activeTabData.link && (
                    <a
                      href={activeTabData.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="competition-resource-link"
                    >
                      {activeTabData.link.text}
                      <ArrowRight size={17} />
                    </a>
                  )}

                </div>

              </div>
            )}


            {/* =====================================================
                RESOURCES / RULEBOOK
            ===================================================== */}

            {activeTabData.type === "resources" && (
              <div className="resources-content">

                <div className="resources-intro">
                  {activeTabData.image && (
                    <img
                      src={activeTabData.image}
                      alt={activeTabData.imageAlt || `${activeTabData.label} preview`}
                      className="document-image"
                    />
                  )}
                </div>

                <div className="resources-grid">

                  {activeTabData.resources?.map(
                    (resource, index) => (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resource-card"
                        key={
                          resource.title || index
                        }
                      >

                        <div className="resource-card-icon">
                          <BookOpen size={23} />
                        </div>

                        <div className="resource-card-content">

                          <h3>
                            {resource.title}
                          </h3>

                          <p>
                            {resource.description}
                          </p>

                          <span className="resource-card-link">
                            Open Resource
                            <ExternalLink size={15} />
                          </span>

                        </div>

                      </a>
                    )
                  )}

                </div>

              </div>
            )}


            {/* =====================================================
                PROFILE TABS
                Ambassadors / Volunteers / Organizers
            ===================================================== */}

            {activeTabData.type === "profiles" && (
              <div className="profile-sections">

                {activeTabData.description && (
                  <p className="profile-intro">
                    {activeTabData.description}
                  </p>
                )}


                {/* Direct profiles */}

                {activeTabData.profiles?.length > 0 && (
                  <div className="profiles-grid">

                    {activeTabData.profiles.map(
                      (person, index) => (
                        <ProfileCard
                          key={
                            person.name || index
                          }
                          person={person}
                        />
                      )
                    )}

                  </div>
                )}


                {/* Profile sections */}

                {activeTabData.sections?.map(
                  (section, sectionIndex) => (
                    <div
                      className="profile-section"
                      key={
                        section.title ||
                        sectionIndex
                      }
                    >

                      <div className="profile-section-heading">
                        <h3>
                          {section.title}
                        </h3>
                      </div>


                      <div className="profiles-grid">

                        {section.profiles?.map(
                          (person, index) => (
                            <ProfileCard
                              key={
                                person.name ||
                                index
                              }
                              person={person}
                            />
                          )
                        )}

                      </div>

                    </div>
                  )
                )}

              </div>
            )}


            {/* =====================================================
                JUDGES
            ===================================================== */}

            {activeTabData.type === "judge-sections" && (
              <div className="judges-content">

                {activeTabData.description && (
                  <p className="profile-intro">
                    {activeTabData.description}
                  </p>
                )}

                <div className="judge-sections">

                  {activeTabData.sections?.map(
                    (section, sectionIndex) => (
                      <div
                        className="judge-section"
                        key={
                          section.title ||
                          sectionIndex
                        }
                      >

                        <div className="judge-section-header">

                          <div className="judge-section-icon">
                            <Gavel size={22} />
                          </div>

                          <div>
                            <span>
                              {section.category}
                            </span>

                            <h3>
                              {section.title}
                            </h3>
                          </div>

                        </div>


                        <div className="profiles-grid judge-grid">

                          {section.profiles?.map(
                            (person, index) => (
                              <article
                                className="profile-card judge-card"
                                key={
                                  person.name ||
                                  index
                                }
                              >

                                <div className="profile-image-wrapper">
                                  <img
                                    src={person.image}
                                    alt={
                                      person.name
                                    }
                                    className="profile-image"
                                  />
                                </div>

                                <div className="profile-info">

                                  <div className="judge-badge">
                                    {person.category}
                                  </div>

                                  <h4>
                                    {person.name}
                                  </h4>

                                  <p className="profile-role">
                                    {person.role}
                                  </p>

                                  <p className="judge-competition">
                                    <span>
                                      Competition
                                    </span>

                                    {person.competition}
                                  </p>

                                </div>

                              </article>
                            )
                          )}

                        </div>

                      </div>
                    )
                  )}

                </div>

              </div>
            )}

          </section>
        )}

        {/* =========================================================
    COMPETITIONS
========================================================= */}

        {competition.competitions?.length > 0 && (
          <section className="competition-list-section">
            <div className="competition-list-container">

              {/* Section Heading */}
              <div className="competition-section-heading centered">
                <span>ROBOFEST {competition.year}</span>

                <h2>Competitions</h2>

                <p className="competition-list-intro">
                  Explore the competitions across Robotics,
                  Programming, STEAM, and E-Gaming.
                </p>
              </div>


              {/* Categories */}
              <div className="competition-categories">

                {competition.competitions.map((category, index) => {

                  const categoryName = category.category?.toLowerCase();

                  let categoryIcon = "/icons/robotics.png";
                  let categoryClass = "robotics";

                  if (categoryName?.includes("program")) {
                    categoryIcon = "/icons/programming.png";
                    categoryClass = "programming";
                  } else if (
                    categoryName?.includes("steam") ||
                    categoryName?.includes("stem")
                  ) {
                    categoryIcon = "/icons/stem.png";
                    categoryClass = "steam";
                  } else if (
                    categoryName?.includes("gaming") ||
                    categoryName?.includes("e gaming") ||
                    categoryName?.includes("e-gaming")
                  ) {
                    categoryIcon = "/icons/gaming.png";
                    categoryClass = "gaming";
                  }

                  return (
                    <div
                      className={`competition-category ${categoryClass}`}
                      key={category.category || index}
                    >

                      {/* Category Header */}
                      <div className="competition-category-header">

                        <div className="competition-category-icon">
                          <img
                            src={categoryIcon}
                            alt={`${category.category} category`}
                          />
                        </div>

                        <div className="competition-category-title">
                          <span>
                            CATEGORY {String(index + 1).padStart(2, "0")}
                          </span>

                          <h3>{category.category}</h3>

                          <div className="competition-category-line">
                            <span></span>
                            <i></i>
                            <i></i>
                            <i></i>
                          </div>
                        </div>

                      </div>


                      {/* Competition Names */}
                      <div className="competition-items">

                        {category.competitions?.map((item, itemIndex) => (
                          <div
                            className="competition-item"
                            key={item.name || itemIndex}
                          >
                            <span className="competition-item-number">
                              {String(itemIndex + 1).padStart(2, "0")}
                            </span>

                            <span className="competition-item-name">
                              {item.name}
                            </span>
                          </div>
                        ))}

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>
          </section>
        )}


        {/* =========================================================
            PARTNERS & SPONSORS
        ========================================================= */}

        {competition.partners?.length > 0 && (
          <section className="competition-partners">

            <div className="competition-section-heading centered">

              <span>
                OUR PARTNERS
              </span>

              <h2>
                Partners & Sponsors
              </h2>

            </div>


            <div className="partners-grid">

              {competition.partners.map(
                (partner, index) => {

                  /*
                   * Supports both:
                   *
                   * "logo/path.png"
                   *
                   * and
                   *
                   * {
                   *   name: "Partner",
                   *   logo: "logo/path.png"
                   * }
                   */

                  const logo =
                    typeof partner === "string"
                      ? partner
                      : partner.logo;

                  const name =
                    typeof partner === "string"
                      ? `RoboFest ${competition.year} Partner`
                      : partner.name;

                  return (
                    <div
                      className="partner-card"
                      key={index}
                    >
                      <img
                        src={logo}
                        alt={name}
                      />
                    </div>
                  );
                }
              )}

            </div>

          </section>
        )}


        {/* =========================================================
            YOUTUBE
        ========================================================= */}

        {competition.youtube && (
          <CompetitionVideo
            url={competition.youtube}
            year={competition.year}
            eyebrow="THIS YEAR'S HIGHLIGHTS"
          />
        )}



      </main>

    </div>
  );
};

const CompetitionVideo = ({ url, year, eyebrow, variant = "" }) => {
  return (
    <section className={`competition-video ${variant}`.trim()}>
      <div className="competition-section-heading centered">
        <span>{eyebrow}</span>
        <h2>RoboFest {year} Glimpse</h2>
      </div>

      <div className="youtube-wrapper">
        <iframe
          src={url}
          title={`RoboFest ${year} Glimpse`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};


/* =============================================================
   PROFILE CARD
============================================================= */

const ProfileCard = ({ person }) => {
  return (
    <article className="profile-card">

      <div className="profile-image-wrapper">

        <img
          src={person.image}
          alt={person.name}
          className="profile-image"
        />

      </div>


      <div className="profile-info">

        <h4>
          {person.name}
        </h4>


        {person.role && (
          <p className="profile-role">
            {person.role}
          </p>
        )}


        {/* {person.organization && (
          <p className="profile-organization">
            {person.organization}
          </p>
        )} */}


        {person.domain && (
          <span className="profile-domain">
            {person.domain}
          </span>
        )}


        {person.social && (
          <div className="profile-socials">

            {/* {person.social.linkedin && (
              <a
                href={person.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} LinkedIn`}
              >
                <Linkedin size={17} />
              </a>
            )} */}


            {/* {person.social.github && (
              <a
                href={person.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} GitHub`}
              >
                <Github size={17} />
              </a>
            )} */}


            {/* {person.social.instagram && (
              <a
                href={person.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} Instagram`}
              >
                <Instagram size={17} />
              </a>
            )} */}

          </div>
        )}

      </div>

    </article>
  );
};

export default CompetitionPage;