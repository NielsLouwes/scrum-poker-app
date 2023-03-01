import React from "react";

interface ResultsSectionProps {
  result: {
    name: string;
    score: number;
  };
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ result }) =>  {
  return (
    <>
      <div>ResultsSection</div>
      <p>Name: </p>
      <p>Points: </p>
      <p>{result && result.score}</p>
    </>
  );
}


