import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as OnBoarding4 } from "../../assets/onboarding/Onboarding4.svg";
import { ReactComponent as OnBoardingDot4 } from "../../assets/onboarding/OnboardingDot4.svg";

const Onboarding = () => {
  const client_id = "03a20e0df8d91e05664ddf8d209bc596";
  const redirect_uri = "https://travvelcome.github.io/frontend/callback";
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}`;

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Container>
      <Title>혼저옵셔행</Title>
      <span id="title">
        <OnBoarding4 />
      </span>
      <MessageBox>
        <BigMessage>
          다양한 할인 혜택과
          <br />
          제주도만의 특별한 선물까지!
        </BigMessage>
        <SmallMessage>여행지 수집에 따른 보상 및 프로모션</SmallMessage>
      </MessageBox>
      <div id="dot">
        <OnBoardingDot4 />
      </div>
      <KakaoLogin onClick={handleLogin}>카카오로 시작하기 → </KakaoLogin>
    </Container>
  );
};
export default Onboarding;

const Container = styled.div`
  width: 100vw;
  height: 100%;
  background-color: #547853;
  position: relative;
  padding-bottom: 50px;

  #title {
    position: absolute;
    right: 0px;
    top: 130px;
  }

  #dot {
    width: 100px;
    margin: 0 auto;
    margin-top: 50px;
  }
`;
const Title = styled.div`
  font-family: "SanTokki";
  font-size: 48px;
  line-height: 40px;
  color: #fff;
  padding-top: 100px;
  padding-left: 45px;
`;
const MessageBox = styled.div`
  font-family: "JejuGothic";
  margin-left: 45px;
  margin-top: 320px;
`;
const BigMessage = styled.div`
  font-size: 24px;
  line-height: 35px;
  color: #fff;
`;
const SmallMessage = styled.div`
  font-size: 16px;
  line-height: 40px;
  color: #000;
`;
const KakaoLogin = styled.div`
  width: 210px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 17px;
  background-color: #474751;
  color: #fff;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 70px;
  z-index: 999;
  cursor: pointer;
`;
