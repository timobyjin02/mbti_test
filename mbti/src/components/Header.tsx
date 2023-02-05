import React from "react";
import styled from "@emotion/styled";
import { QuestionData } from "../stores/question/questionData";

interface Props {
  type: string;
  questionNo: number;
}

function Header(props: Props): React.ReactElement {
  return (
    <>
      {props.type === "progress" ? (
        <ProgressWrapper>
          <ProgressBar>
            {Math.round((props.questionNo / QuestionData.length) * 100)}
          </ProgressBar>
        </ProgressWrapper>
      ) : (
        <TitleWrapper style={{ backgroundColor: "#ffa07a" }}>
          예비집사 판별기
        </TitleWrapper>
      )}
    </>
  );
}

export default Header;

const ProgressWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  font-size: 40px;
  font-family: "jejudoldam";
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 40px;
  background-color: #ffa07a;
`;

const ProgressBar = styled.div`
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 40px;
  font-size: 30px;
  background-color: aqua;
`;
