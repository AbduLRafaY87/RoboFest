import React from "react";
import CompetitionPage from "../../components/CompetitionPage/CompetitionPage";
import { competitions } from "../../data/competition";

const Competition2023 = () => {
  return (
    <CompetitionPage competition={competitions[2023]} />
  );
};

export default Competition2023;