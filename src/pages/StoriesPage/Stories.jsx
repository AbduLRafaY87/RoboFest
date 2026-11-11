import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./styles.css";

const stories = [
  {
    id: "inspired-to-join",
    image: "/images/4.jpg",
    date: "October 4, 2025",
    title: "What inspired you to join RoboFest?",
    text: "Heartfelt thanks to the Indigo team for their wonderful support and encouragement!",
    link: "https://www.youtube.com/shorts/y3OQvYHECqg",
    publication: "RoboFest Stories",
  },
  {
    id: "best-part-today",
    image: "/images/9.jpg",
    date: "October 3, 2025",
    title: "What's the best part about being here today?",
    text: "Thank you Indigo team, your support in RoboFest 2025 Their support enriched RoboFest 2025, making it a memorable experience! 🙌",
    link: "https://www.youtube.com/shorts/u7RFpCFL4Zo",
    publication: "RoboFest News",
  },
  {
    id: "young-innovators",
    image: "/images/11.jpg",
    date: "",
    title: "Young Innovators in Action",
    text: "🎉 Indigo Textile's role is incredible in RoboFest 2025!",
    link: "https://www.youtube.com/shorts/Tjs3zcSgDQA",
    publication: "RoboFest News",
  },
  // {
  //   id: "creativity-meets-code",
  //   image: "/images/12.jpg",
  //   date: "September 14, 2025",
  //   title: "Where Creativity Meets Code",
  //   text: "A glimpse into the designs, experiments, and digital projects that shaped the competition.",
  //   link: "https://www.youtube.com/@techticsclub8516/shorts",
  //   publication: "RoboFest News",
  // },
  // {
  //   id: "spirit-of-robofest",
  //   image: "/images/7.jpg",
  //   date: "September 7, 2025",
  //   title: "The Spirit of RoboFest",
  //   text: "More than a competition, RoboFest brings students and mentors together around shared possibilities.",
  //   link: "https://www.youtube.com/@techticsclub8516/shorts",
  //   publication: "RoboFest News",
  // },
  // {
  //   id: "highlights-worth-rewatching",
  //   image: "/images/8.jpg",
  //   date: "August 31, 2025",
  //   title: "Highlights Worth Rewatching",
  //   text: "Catch the fast-paced highlights and memorable moments from the RoboFest community.",
  //   link: "https://www.youtube.com/@techticsclub8516/shorts",
  //   publication: "RoboFest News",
  // },
];

const reels = [
  "IE8vmvfluVU",
  "y3OQvYHECqg",
  "u7RFpCFL4Zo",
  "Tjs3zcSgDQA",
];

const getReadingTime = (text) => {
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return `${minutes} min read`;
};

const StoryDetail = ({ story }) => {
  const navigate = useNavigate();

  return (
    <article className="story-detail">
      <div className="story-detail-header">
        <button
          className="story-back-link"
          type="button"
          onClick={() => navigate("/newsroom/story")}
        >
          <ArrowLeft size={17} />
          All stories
        </button>
        <span className="story-category">News &amp; Announcements</span>
        <h1>{story.title}</h1>
        <div className="story-detail-meta">
          <span>{story.publication}</span>
          {story.date && (
            <>
              <span aria-hidden="true">•</span>
              <time>{story.date}</time>
            </>
          )}
          <span aria-hidden="true">•</span>
          <span>{getReadingTime(story.text)}</span>
        </div>
        <a
          className="story-watch-button"
          href={story.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Play size={15} fill="currentColor" />
          Watch the story
          <ArrowUpRight size={16} />
        </a>
      </div>

      <figure className="story-detail-image-wrap">
        <img src={story.image} alt={story.title} className="story-detail-image" />
        <figcaption>{story.title} — RoboFest community highlights.</figcaption>
      </figure>

      <div className="story-detail-body">
        <p>{story.text}</p>
        <a
          className="story-detail-source"
          href={story.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View the original video
          <ArrowUpRight size={16} />
        </a>
      </div>
    </article>
  );
};

const Stories = () => {
  const { storyId } = useParams();
  const selectedStory = stories.find((story) => story.id === storyId);

  if (storyId && selectedStory) {
    return (
      <main className="stories-page">
        <StoryDetail story={selectedStory} />
      </main>
    );
  }

  return (
    <main className="stories-page">
      <section className="stories-content" aria-labelledby="stories-heading">
        <div className="stories-heading">
          <span>FROM THE COMMUNITY</span>
          <h1 id="stories-heading">Latest stories</h1>
          <p>
            Discover highlights from RoboFest and the innovators who make it
            special.
          </p>
        </div>

        <div className="stories-grid">
          {stories.map((story) => (
            <article className="story-card" key={story.title}>
              <Link
                className="story-card-link"
                to={`/newsroom/story/${story.id}`}
                aria-label={`Read ${story.title}`}
              >
                <img src={story.image} alt="" className="story-card-image" />
                <div className="story-card-body">
                  <span className="story-category">Recent</span>
                  <h2>{story.title}</h2>
                  <div className="story-card-meta">
                    <span>{story.publication}</span>
                    {story.date && (
                      <>
                        <span aria-hidden="true">•</span>
                        <time>{story.date}</time>
                      </>
                    )}
                    <span aria-hidden="true">•</span>
                    <span>{getReadingTime(story.text)}</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="reels-section" aria-labelledby="reels-heading">
        <div className="reels-heading">
          <span>WATCH ROBOFEST</span>
          <h2 id="reels-heading">RoboFest Reels</h2>
          <p>Quick highlights and moments from the RoboFest community.</p>
        </div>

        <div className="reels-grid">
          {reels.map((videoId, index) => (
            <article className="reel-card" key={videoId}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`RoboFest Reel ${index + 1}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Stories;