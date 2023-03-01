import { UserContainer } from "@/pages/index.styled";
import React from "react";

interface ResultsSectionProps {
  result: {
    name: string;
    score: number;
  };
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) => {
  return (
    <>
      <div>ResultsSection</div>
      <UserContainer>
        <p>Name: </p>
        <p>Story Points: </p>
      </UserContainer>
      <p>{result && result.score}</p>
    </>
  );
};
