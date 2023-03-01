import styled from "styled-components";

type Card = {
  id?: number;
  title?: string | number;
  score?: number;
};

export const Wrapper = styled.div`
  width: 60vw;
  display: flex;
  flex: 2;
  flex-wrap: wrap;
  gap: 10px 20px;
`;

export const OuterWrapper = styled.div`
  display: flex;
 
`;

export const Card = styled.div<Card>`
  width: 100px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  border: 1px solid black;
  flex: 1;
`

export const UserContainer = styled.div`
  border-bottom: 1px solid black;
  width: 85%;
  margin-left: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`