import { Inter } from "@next/font/google";
import styled from "styled-components";
import { useState } from "react";
import { indexUtil } from "./utils/index.util";
import { Card, Container, OuterWrapper, Wrapper } from "./index.styled";
import { ResultsSection } from "@/components/ResultsSection";

export default function Home() {
  const [result, setResult] = useState([]);

  const selectScore = (id: number) => {
    const returnItem = indexUtil?.Cards.find((item) => id === item.id);
    setResult(returnItem);
  };

  return (
    <>
      <h1>Dev Poker</h1>
      <OuterWrapper>
        <Wrapper>
          {indexUtil?.Cards.map((item) => (
            <Card key={item.id} onClick={() => selectScore(item.id)}>
              {item.title}
            </Card>
          ))}
        </Wrapper>

        <Container>
          <ResultsSection result={result} />
        </Container>
      </OuterWrapper>
    </>
  );
}
