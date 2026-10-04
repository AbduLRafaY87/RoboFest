import React from "react";
import { Wrench, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const UnderConstruction = ({
  title = "Page Under Construction",
  description = "We're currently working on this page. Check back soon for more updates.",
}) => {
  const navigate = useNavigate();

  return (
    <main className="under-construction">
      <div className="uc-background">
        <div className="uc-grid"></div>
        <div className="uc-glow uc-glow-one"></div>
        <div className="uc-glow uc-glow-two"></div>
      </div>

      <div className="uc-container">
        <div className="uc-icon">
          <Wrench size={42} strokeWidth={1.7} />
        </div>

        <span className="uc-label">ROBOFEST</span>

        <h1>{title}</h1>

        <p>{description}</p>

        <div className="uc-status">
          <span className="uc-status-dot"></span>
          <span>WORK IN PROGRESS</span>
        </div>
        <br></br>
        <button className="uc-back-btn" onClick={() => navigate("/")}>
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </div>
    </main>
  );
};

export default UnderConstruction;