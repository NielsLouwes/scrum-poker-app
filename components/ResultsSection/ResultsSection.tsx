import { UserContainer } from "@/pages/index.styled";
import React from "react";
import { ResultsSectionStyled } from "./ResultsSection.styled";

interface ResultsSectionProps {
  result: {
    name: string;
    score: number;
  };
  user: string;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ result, user }) => {
  return (
    <>
      <ResultsSectionStyled.Heading>
        ResultsSection
      </ResultsSectionStyled.Heading>
      <UserContainer>
        <p>Name:  </p>
        <p>Story Points: </p>
      </UserContainer>
      <ResultsSectionStyled.ScoreContainer>
        {user}
        <ResultsSectionStyled.Text>
          {result && result.score}
        </ResultsSectionStyled.Text>
      </ResultsSectionStyled.ScoreContainer>
      <ResultsSectionStyled.ButtonContainer>
        <ResultsSectionStyled.Button>Show</ResultsSectionStyled.Button>
      </ResultsSectionStyled.ButtonContainer>
    </>
  );
};
