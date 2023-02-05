import React, { useState } from "react";
import styled from "@emotion/styled";
import { QuestionData } from "../stores/question/questionData";
import Header from "../components/Header";

function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = useState(0);

  const handleClickAnswer = () => {
    setQuestionNo(questionNo + 1);
  };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <Button onClick={handleClickAnswer}>
          {QuestionData[questionNo].answera}
        </Button>
        <Button onClick={handleClickAnswer}>
          {QuestionData[questionNo].ansewerb}
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
}

export default QuestionPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #fffacd;
  font-family: "jejudoldam";
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
`;

const Title = styled.div`
  margin-bottom: 34px;
  font-size: 25px;
`;

const Button = styled.button`
  padding: 15px 50px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  background-color: #fbe9fa;

  cursor: pointer;
`;
