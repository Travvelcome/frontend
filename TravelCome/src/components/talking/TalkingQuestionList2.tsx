import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TalkingQuestionList2 = () => {
  return (
    <RecommendBox>
      <Title>용두암이 어떻게 만들어졌는지</Title>
      <SmallTitle>과학적인 설명을 부탁해!</SmallTitle>
    </RecommendBox>
  );
};
export default TalkingQuestionList2;

const RecommendBox = styled.div`
  white-space: normal;
  width: 170px;
  margin: 0px 5px;
  padding: 20px;
  display: inline-block;
  border-radius: 10px;
  border: 1px solid #ff6b00;
  background-color: rgb(135, 136, 141, 0.1);
  font-family: "JejuGothic";
`;
const Title = styled.div`
  font-size: 13px;
  line-height: 20px;
  color: #000;
`;
const SmallTitle = styled.div`
  font-size: 11px;
  line-height: 20px;
  color: #87888d;
`;
