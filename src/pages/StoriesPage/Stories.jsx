import React from "react";
import { ArrowUpRight } from "lucide-react";

import "./styles.css";

const stories = [
  {
    image: "/images/4.jpg",
    date: "October 4, 2025",
    title: "What inspired you to join RoboFest?",
    text: "Heartfelt thanks to the Indigo team for their wonderful support and encouragement!",
    link: "https://www.youtube.com/shorts/y3OQvYHECqg",
  },
  {
    image: "/images/9.jpg",
    date: "October 3, 2025",
    title: "What's the best part about being here today?",
    text: "Thank you Indigo team, your support in RoboFest 2025 Their support enriched RoboFest 2025, making it a memorable experience! 🙌",
    link: "https://www.youtube.com/shorts/u7RFpCFL4Zo",

  },
  {
    image: "/images/11.jpg",
    date: "What’s the best part about being here today?",
    title: "Young Innovators in Action",
    text: "🎉 Indigo Textile role is incredible in RoboFest 2025! ",
    link: "https://www.youtube.com/shorts/Tjs3zcSgDQA",

  },
  {
    image: "/images/12.jpg",
    date: "September 14, 2025",
    title: "Where Creativity Meets Code",
    text: "A glimpse into the designs, experiments, and digital projects that shaped the competition.",
    link: "https://www.youtube.com/@techticsclub8516/shorts",

  },
  {
    image: "/images/17.jpg",
    date: "September 7, 2025",
    title: "The Spirit of RoboFest",
    text: "More than a competition, RoboFest brings students and mentors together around shared possibilities.",
    link: "https://www.youtube.com/@techticsclub8516/shorts",

  },
  {
    image: "/images/21.jpg",
    date: "August 31, 2025",
    title: "Highlights Worth Rewatching",
    text: "Catch the fast-paced highlights and memorable moments from the RoboFest community.",
    link: "https://www.youtube.com/@techticsclub8516/shorts",

  },
];

const storiesLink = "https://www.youtube.com/@techticsclub8516/shorts";

const Stories = () => {
  return (
    <main className="stories-page">
      {/* <section className="stories-hero">
        <div className="stories-hero-grid" aria-hidden="true"></div>
        <div className="stories-hero-content">
          <span>ROBOFEST NEWSROOM</span>
          <h1>Stories from the world of RoboFest</h1>
          <p>
            Explore the people, projects, and moments behind our robotics
            community.
          </p>
        </div>
      </section> */}

      <section className="stories-content" aria-labelledby="stories-heading">
        <div className="stories-heading">
          <span>FROM THE COMMUNITY</span>
          <h2 id="stories-heading">Latest stories</h2>
          <p>Discover highlights from RoboFest and the innovators who make it special.</p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <img src={story.image} alt="" className="story-card-image" />

              <div className="story-card-body">
                <time>{story.date}</time>
                <h3>{story.title}</h3>
                <p>{story.text}</p>

                <a
                  className="story-read-more"
                  href={story.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Stories;