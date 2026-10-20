import React from "react";
import CompetitionPage from "../../components/CompetitionPage/CompetitionPage";
import { competitions } from "../../data/competition";

const Competition2022 = () => {
  return (
    <CompetitionPage competition={competitions[2022]} />
  );
};

export default Competition2022;