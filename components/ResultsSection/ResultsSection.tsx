import { UserContainer } from "@/pages/index.styled";
import React from "react";
import { ResultsSectionStyled } from "./ResultsSection.styled";



interface ResultsSectionProps {
  result: {
    name: string;
    score: number;
  };
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
  return (
    <>
      <ResultsSectionStyled.Heading>ResultsSection</ResultsSectionStyled.Heading>
      <UserContainer>
        <p>Name: </p>
        <p>Story Points: </p>
      </UserContainer>
      <ResultsSectionStyled.ScoreContainer>
        <ResultsSectionStyled.Text>{result && result.score}</ResultsSectionStyled.Text>
      </ResultsSectionStyled.ScoreContainer>
    </>
  );
};
