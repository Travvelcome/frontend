import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ReactComponent as Orange } from "../../assets/Orange.svg";

declare global {
    interface Window {
      kakao: any;
    }
  }

const OnboardingPage: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 100,
    slidesToScroll: 10,
    //arrows: false,
  };

  return (
    <OnboardingContainer>
      <Slider {...settings}>
        <SlideContent>
          <SlideTitle>Welcome to the App</SlideTitle>
        </SlideContent>
        <span id="Orange"></span>
      </Slider>
    </OnboardingContainer>
  );
};

export default OnboardingPage;

const OnboardingContainer = styled.div`
  background-color: #FDAC01;
  height: 100vh;
  //display: flex;
  justify-content: center;
  align-items: center;
`;

const SlideContent = styled.div`
  text-align: center;
  color: white;
  width: 100%;
`;

const SlideTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SlideText = styled.p`
  font-size: 1.2em;
`;
