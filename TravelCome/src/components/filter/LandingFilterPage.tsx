import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LandingFilterPage = () => {
  const handleLogin = () => {
    window.location.href = "";
  };

  return (
    <Container>
      <MessageBox>
        <BigMessage>관심 있는 주제를 골라보아요!</BigMessage>
        <SmallMessage>
          관심있는 주제를 3개 이상 선택하시면
          <br />
          혼자서도 심심하지 않은 여행을 만들어 드릴게요.
        </SmallMessage>
      </MessageBox>
      <FilterBox>
        <CategoryBox>
          <Filter>
            ⛰️ <br /> 산 / 오름
          </Filter>
          <Filter>
            ⛰️ <br /> 산 / 오름
          </Filter>
          <Filter>
            ⛰️ <br /> 산 / 오름
          </Filter>
          <Filter></Filter>
          <Filter></Filter>
        </CategoryBox>
        <CategoryBox>
          <Filter>
            ⛰️ <br /> 산 / 오름
          </Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
        </CategoryBox>
        <CategoryBox>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
          <Filter></Filter>
        </CategoryBox>
      </FilterBox>
      <CompleteBox>
        <Notice>나중에 설정에서 다시 선택할 수 있어요 :{")"}</Notice>
        <CompleteBtn onClick={handleLogin}>완료</CompleteBtn>
      </CompleteBox>
    </Container>
  );
};
export default LandingFilterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdac01;
  position: relative;
`;
const MessageBox = styled.div`
  padding-top: 80px;
  width: 320px;
  text-align: center;
  margin: 0 auto;
`;
const BigMessage = styled.div`
  font-family: "SanTokki";
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
`;
const SmallMessage = styled.div`
  font-family: "JejuGothic";
  font-size: 12px;
  line-height: 30px;
  color: #474751;
`;
const FilterBox = styled.div`
  width: 100vw;
  border: 1px solid #111;
`;
const CategoryBox = styled.div`
  width: 100vw;
  text-align: center;
  margin: 35px auto;
  overflow: auto;
  white-space: nowrap;
  border: 1px solid #111;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const Filter = styled.div`
  width: 110px;
  height: 110px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  margin: 0 15px;
  line-height: 16px;
  margin-top: 0px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 16px;
`;
const CompleteBox = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  bottom: 30px;
`;
const Notice = styled.div`
  font-family: "JejuGothic";
  font-size: 10px;
  color: rgb(135, 136, 141, 0.5);
`;
const CompleteBtn = styled.div`
  width: 364px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 17px;
  background-color: rgb(135, 136, 141, 0.5);
  color: #fff;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 10px;
  z-index: 999;
  cursor: pointer;
`;
