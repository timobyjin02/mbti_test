import React from "react";
import { QuestionData } from "../stores/question/questionData";

function QuestionPage(): React.ReactElement {
  return (
    <>
      <div>{QuestionData[0].title}</div>
      <div>{QuestionData[0].answera}</div>
      <div>{QuestionData[0].ansewerb}</div>
    </>
  );
}

export default QuestionPage;
