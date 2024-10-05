import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TalkingQuestionList1 = () => {
  return (
    <RecommendBox>
      <Title>용두암이 어떻게 만들어졌는지</Title>
      <SmallTitle>과학적인 설명을 부탁해!</SmallTitle>
      <TalkingBtn
        onClick={() => {
          window.location.href = "/frontend/talking/chatting";
        }}
      >
        대화하기
      </TalkingBtn>
    </RecommendBox>
  );
};
export default TalkingQuestionList1;

const RecommendBox = styled.div`
  white-space: normal;
  width: 100px;
  height: 120px;
  margin: 0px 5px;
  display: inline-block;
  border-radius: 10px;
  padding: 20px;
  background-color: rgb(255, 107, 0, 0.5);
`;
const Title = styled.div`
  font-family: "Santokki";
  text-align: right;
  font-size: 16px;
  width: 100px;
  margin-bottom: 15px;
`;
const SmallTitle = styled.div`
  font-family: "JejuGothic";
  font-size: 13px;
  margin: 20px 0;
`;
const TalkingBtn = styled.div`
  width: 105px;
  height: 25px;
  line-height: 25px;
  background-color: #fff;
  color: #ff6b00;
  font-family: "JejuGothic";
  font-size: 13px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
`;
