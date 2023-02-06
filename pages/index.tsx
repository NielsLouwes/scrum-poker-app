import { Inter } from '@next/font/google'
import styled from "styled-components";
import ResultsSection from '@/components/ResultsSection';
import { useState } from 'react';
import { indexUtil } from './utils/index.util';
import { Card, Container, OuterWrapper, Wrapper } from './index.styled';

type Card = {
  id: number;
  title: string | number;
  score: number;
};


export default function Home() {

  const [ result, setResult ] = useState('')
  return (
    <>
      <h1>Dev Poker</h1>
      <OuterWrapper>
      <Wrapper>
        {indexUtil.Cards.map((item) => (
          <Card  key={item.id}>
            {item.title}
          </Card>
        ))}
      </Wrapper> 
      <Container>
          <ResultsSection />
      </Container>
    </OuterWrapper>
    </>
  )
}
