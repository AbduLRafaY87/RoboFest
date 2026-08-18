import {
  Users,
  CalendarDays,
  School,
  MapPin,
  Trophy,
  Handshake,
  UserRoundCheck,
  HeartHandshake,
} from "lucide-react";

const impactStats = [
  {
    number: "829",
    title: "Students Involved",
    description:
      "Passionate young minds shaping the future of robotics",
    icon: Users,
  },
  {
    number: "2022",
    title: "Tournament Running Since",
    description:
      "Years of fostering innovation and excellence",
    icon: CalendarDays,
  },
  {
    number: "21",
    title: "Schools Targeted",
    description:
      "Educational institutions participating in the event",
    icon: School,
  },
  {
    number: "3",
    title: "Cities Involvement",
    description:
      "Expanding our reach across Pakistan",
    icon: MapPin,
  },
  {
    number: "225",
    title: "Number of Teams",
    description:
      "Competing for excellence and innovation",
    icon: Trophy,
  },
  {
    number: "10",
    title: "Number of Sponsors",
    description:
      "Supporting the future of robotics",
    icon: Handshake,
  },
  {
    number: "5000+",
    title: "Total Attendees",
    description:
      "Witnessing innovation in action",
    icon: UserRoundCheck,
  },
  {
    number: "45",
    title: "Volunteers",
    description:
      "Dedicated to making RoboFest a success",
    icon: HeartHandshake,
  },
];

const NumbersSection = () => {
  return (
    <section className="numbers-section">
      <div className="numbers-container">

        {/* Section Header */}
        <div className="numbers-heading">
          <span className="numbers-eyebrow">
            NUMBERS 2024
          </span>

          <h2>
            Our Impact <span>in Numbers</span>
          </h2>

          <p>
            A look at the people, schools, teams, and communities
            that make RoboFest possible.
          </p>
        </div>


        {/* Statistics */}
        <div className="numbers-grid">
          {impactStats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <article
                className="number-card"
                key={stat.title}
              >
                <div className="number-card-top">

                  <span className="number-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="number-icon">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                </div>

                <div className="number-value">
                  {stat.number}
                </div>

                <h3>
                  {stat.title}
                </h3>

                <p>
                  {stat.description}
                </p>

                <div className="number-line" />
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default NumbersSection;
