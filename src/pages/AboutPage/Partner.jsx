import "./Partner.css";

const partners = [
  {
    year: "2022",
    school: "The International School",
    name: "Mr Taymur Mirza",
    designation: "Chairperson",
    image: "/partners/2022.jpeg",
  },
  {
    year: "2023",
    school: "The Generation School",
    name: "Miss Sadia Aamir",
    designation: "Principal",
    image: "/partners/2023.jpeg",
  },
  {
    year: "2024",
    school: "Aga Khan School Garden",
    name: "Ms Tasneem Amin",
    designation: "",
    image: "/partners/2024.jpeg",
  },
  {
    year: "2025",
    school: "BCP PECHS",
    name: "Ms Sadia",
    designation: "Principal",
    image: "/partners/2025.jpeg",
  },
  {
    year: "2026",
    school: "BCP PECHS",
    name: "Miss Faiza Batool",
    designation: "Coordinator",
    image: "/partners/2026.jpeg",
  },
];

const Partner = () => (
  <main className="partner-page">
    <header className="partner-page-heading">
      <span className="partner-page-eyebrow">OUR PARTNERS</span>
      <h1>Celebrating Our Venue Partners</h1>
      <p>
        Recognizing the schools and leaders who have supported RoboFest through
        the years.
      </p>
    </header>

    <div className="partner-stories">
      {partners.map((partner, index) => (
        <article
          className={`partner-story${index % 2 ? " partner-story-reverse" : ""}`}
          key={partner.year}
        >
          <div className="partner-story-copy">
            <span className="partner-story-year">{partner.year}</span>
            <p className="partner-story-school">{partner.school}</p>
            <h2>{partner.name}</h2>
            {partner.designation && (
              <p className="partner-story-designation">{partner.designation}</p>
            )}
          </div>

          <div className="partner-story-photo">
            {partner.image ? (
              <img src={partner.image} alt={`${partner.name} from ${partner.school}`} />
            ) : (
              <span>Partner photo</span>
            )}
          </div>
        </article>
      ))}
    </div>
  </main>
);

export default Partner;
