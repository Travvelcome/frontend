import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OnboardingContainer = styled.div`
  background-color: #FDAC01;
  height: 100vh;
  //display: flex;
  justify-content: center;
  align-items: center;
`;

const Slide = styled(Slider)`
  text-align: center;
  color: white;
  //width: 100vw;
`;

const SlideTitle = styled.h2`
  font-size: 2em;
  margin-bottom: 20px;
`;

const SlideText = styled.p`
  font-size: 1.2em;
`;

const OnboardingPage: React.FC = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    //arrows: false,
  };

  return (
    <OnboardingContainer>
      <Slider {...settings}>
        <Slide>
          <SlideTitle>Welcome to the App</SlideTitle>
          <SlideText>This is the first step of onboarding.</SlideText>
        </Slide>
      </Slider>
    </OnboardingContainer>
  );
};

export default OnboardingPage;