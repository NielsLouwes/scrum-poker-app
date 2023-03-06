import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ScoreContainer = styled.div`
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

const Text = styled.p`
  text-align: right;
  padding-right: 55px;
`;

const Button = styled.button`
  text-align: center;
  margin-bottom: 25px;
  margin-top: 25px;
`;

export const ResultsSectionStyled = {
  ScoreContainer,
  Text,
  Heading,
  Button,
  ButtonContainer,
};
