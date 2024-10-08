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
  height: 100%;
  background-color: #fdac01;
  position: relative;

  span {
    position: absolute;
    right: 0px;
    top: 180px;
  }
`;
