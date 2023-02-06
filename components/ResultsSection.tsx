import React from "react";

export default function ResultsSection({ result }) {
  return (
    <>
      <div>ResultsSection</div>
      <p>Name: </p>
      <p>Points: </p>
      <p>{result && result.score}</p>
    </>
  );
}
