import React from "react";
import CompetitionPage from "../../components/CompetitionPage/CompetitionPage";
import { competitions } from "../../data/competition";

const Competition2024 = () => {
  return (
    <CompetitionPage competition={competitions[2024]} />
  );
};

export default Competition2024;