import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick"; // react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import Onboarding3 from "./Onboarding3";
import Onboarding4 from "./Onboarding4";

const OnboardingPage = () => {
  // 슬라이더 기본 셋팅
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <Onboarding1 />
        </div>
        <div>
          <Onboarding2 />
        </div>
        <div>
          <Onboarding3 />
        </div>
        <div>
          <Onboarding4 />
        </div>
      </Slider>
    </Container>
  );
};
export default OnboardingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdac01;
  position: relative;

  span {
    position: absolute;
    right: 0px;
    top: 180px;
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
  margin-top: 340px;
`;
const BigMessage = styled.div`
  font-size: 24px;
  line-height: 35px;
  color: #000;
`;
const SmallMessage = styled.div`
  font-size: 16px;
  line-height: 40px;
  color: #fff;
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
  margin-top: 100px;
  z-index: 999;
  cursor: pointer;
`;
