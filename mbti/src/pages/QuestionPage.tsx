import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { QuestionData } from "../stores/question/questionData";
import Header from "../components/Header";

function QuestionPage(): React.ReactElement {
  const [questionNo, setQuestionNo] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);

  const nav = useNavigate();

  const handleClickAnswer = (answer: number, type: string) => {
    setQuestionNo(questionNo + 1);

    const newScore = totalScore.map(s =>
      s.id === type ? { id: s.id, score: s.score + answer } : s
    );

    setTotalScore(newScore);

    // 마지막 문제가 아닐경우
    if (QuestionData.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
      // 마지막 문제일 경우
    } else {
      nav("/result");
    }

    // if (type === "EI") {
    //   // 기존 스코어에 더한 새로운 스코어 값
    //   const addScore = totalScore[0].score + answer;
    //   // 새로운 스코어를 반영한 새로운 객체
    //   const object = { id: "EI", score: addScore };
    //   // 새로운 객체를 기존에 토탈 스코어에 반영
    //   totalScore.splice(0, 1, object);
    // } else if (type === "SN") {
    //   const addScore = totalScore[0].score + answer;
    //   const object = { id: "SN", score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else if (type === "TF") {
    //   const addScore = totalScore[0].score + answer;
    //   const object = { id: "TF", score: addScore };
    //   totalScore.splice(0, 1, object);
    // } else {
    //   const addScore = totalScore[0].score + answer;
    //   const object = { id: "JP", score: addScore };
    //   totalScore.splice(0, 1, object);
    // }
  };

  useEffect(() => {
    console.log("totalScore", totalScore[0].score);
  }, [totalScore[0].score]);

  // const handleClickAnswerA = (no: number) => {
  //   setQuestionNo(questionNo + 1);

  //   if (no + 1 === QuestionData.length) {
  //     nav("/result");
  //   }
  // };

  // const handleClickAnswerB = () => {
  //   setQuestionNo(questionNo + 1);
  // };

  return (
    <Wrapper>
      <Header type="progress" questionNo={questionNo} />
      <ContentWrapper>
        <Title>{QuestionData[questionNo].title}</Title>
        <Button
          onClick={() => handleClickAnswer(1, QuestionData[questionNo].type)}
        >
          {QuestionData[questionNo].answera}
        </Button>
        <Button
          onClick={() => handleClickAnswer(0, QuestionData[questionNo].type)}
        >
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
