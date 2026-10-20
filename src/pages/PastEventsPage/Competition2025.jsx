import React from "react";
import CompetitionPage from "../../components/CompetitionPage/CompetitionPage";
import { competitions } from "../../data/competition";

const Competition2025 = () => {
  return (
    <CompetitionPage competition={competitions[2025]} />
  );
};

export default Competition2025;