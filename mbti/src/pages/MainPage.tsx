import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function MainPage(): React.ReactElement {
  const nav = useNavigate();

  const handleClickButton = () => {
    nav("/question");
  };

  return (
    <Wrapper>
      <Header type="title" questionNo={0} />
      <ContentWrapper>
        <Title>나에게 맞는 주인님은?</Title>
        <LogoImage>{/* <img src={}></img> */}</LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘맞는 고양이 찾기</Desc>
        <Desc>내가 집사가 돼서 고양이를 키운다면..?</Desc>
        <Button onClick={handleClickButton}>테스트 시작하기</Button>
      </ContentWrapper>
    </Wrapper>
  );
}

export default MainPage;

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
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
`;

const LogoImage = styled.img`
  width: 350px;
  height: 350px;
  margin-bottom: 20px;
  border-radius: 50%;
  background-color: aliceblue;
`;

const Desc = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
`;

const Button = styled.button`
  padding: 13px 14px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #e2213e;
  cursor: pointer;
`;
