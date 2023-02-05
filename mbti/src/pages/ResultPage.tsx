import React from "react";

import { ResultData } from "../stores/result/resultDate";

function ResultPage(): React.ReactElement {
  return <div>{ResultData[0].name}</div>;
}

export default ResultPage;
