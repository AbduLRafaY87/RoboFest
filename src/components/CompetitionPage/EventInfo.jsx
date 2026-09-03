import React from "react";
import {
  CalendarDays,
  MapPin,
  Sparkles,
} from "lucide-react";

const EventInfo = ({ eventInfo, year }) => {
  if (!eventInfo) return null;

  return (
    <section className="competition-event-info">

      <div className="event-info-container">

        <div className="event-info-heading">

          <span>
            ROBOFEST {year}
          </span>

          <h2>
            {eventInfo.themeTitle}
          </h2>

          <p>
            {eventInfo.themeDescription}
          </p>

        </div>


        <div className="event-info-details">

          <div className="event-info-detail">

            <div className="event-info-icon">
              <CalendarDays size={21} />
            </div>

            <div>
              <span>DATE</span>
              <strong>
                {eventInfo.date}
              </strong>
            </div>

          </div>


          <div className="event-info-detail">

            <div className="event-info-icon">
              <MapPin size={21} />
            </div>

            <div>
              <span>VENUE</span>
              <strong>
                {eventInfo.venue}
              </strong>
            </div>

          </div>


          <div className="event-info-detail">

            <div className="event-info-icon">
              <Sparkles size={21} />
            </div>

            <div>
              <span>THEME</span>
              <strong>
                Swarm Robotics
              </strong>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EventInfo;