import React from "react";
import CompetitionPage from "../../components/CompetitionPage/CompetitionPage";
import { competitions } from "../../data/competition";

const Competition2026 = () => {
  return (
    <CompetitionPage competition={competitions[2026]} />
  );
};

export default Competition2026;