import { useState } from "react";
import { indexUtil } from "./utils/index.util";
import {
  Card,
  Container,
  OuterWrapper,
  Wrapper,
  MainHeader,
} from "./index.styled";
import { ResultsSection } from "@/components/ResultsSection/ResultsSection";
import React from "react";
import { useFormik } from "formik";

interface FormValues {
  userName: string;
}

export default function Home() {
  const [result, setResult] = useState([]);
  const [user, setUser] = useState("");

  const selectScore = (id: number) => {
    const returnItem = indexUtil?.Cards.find((item) => id === item.id);
    setResult(returnItem);
  };

  const formik = useFormik({
    initialValues: { userName: "" },
    onSubmit: (values: FormValues) => {
      console.log("values", values);
      alert(JSON.stringify(values, null, 2));
      setUser(values.userName);
    },
  });

  return (
    <>
      <MainHeader>Dev Scrum Poker</MainHeader>
      <p>Welcome {user || "User"}</p>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="userName">User Name</label>
        <input
          id="userName"
          name="userName"
          type="userName"
          onChange={formik.handleChange}
          value={formik.values.userName}
        />
        <button type="submit">Submit</button>
      </form>
      <OuterWrapper>
        <Wrapper>
          {indexUtil?.Cards.map((item) => (
            <Card key={item.id} onClick={() => selectScore(item.id)}>
              {item.title}
            </Card>
          ))}
        </Wrapper>
        <Container>
          <ResultsSection user={user} result={result} />
        </Container>
      </OuterWrapper>
    </>
  );
}
