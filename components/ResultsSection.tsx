import React from "react";

export default function ResultsSection({ result }) {
  return (
    <>
      <div>ResultsSection</div>
      <p>{result && result.id}</p>
    </>
  );
}
