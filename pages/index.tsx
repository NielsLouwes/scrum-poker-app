import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styled from "styled-components";

type Card = {
  id: number;
  title: string | number;
  score: number;
};

const Cards = [
  {
    id: 1,
    title: 0,
    score: 0
  },
  {
    id: 2,
    title: 0.5,
    score: 0.5
  },
  {
    id: 3,
    title: 1,
    score: 1
  },
  {
    id: 4,
    title: 2,
    score: 2
  },
  {
    id: 5,
    title: 3,
    score: 3
  },
  {
    id: 6,
    title: 5,
    score: 5
  },
  {
    id: 7,
    title: 8,
    score: 8
  },
  {
    id: 8,
    title: 10,
    score: 10
  },
  {
    id: 9,
    title: 13,
    score: 13
  },
  {
    id: 10,
    title: 20,
    score: 20
  },
  {
    id: 11,
    title: 40,
    score: 40
  },
  {
    id: 12,
    title: 100,
    score: 100
  },
  {
    id: 13,
    title: "?",
    score: null
  },
  {
    id: 14,
    title: "coffee",
    score: null
  }
];

const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

const Card = styled.div`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function Home() {
  return (
    <>
      <h1>Dev Poker</h1>
      <Wrapper>
        {Cards.map((item) => (
          <Card  key={item.id}>
            {item.title}
          </Card>
        ))}
      </Wrapper> 
    </>
  )
}
