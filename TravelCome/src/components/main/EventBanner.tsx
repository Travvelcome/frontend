import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick"; // react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const EventBanner = () => {
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
        <EventBox>
          <MessageBox>
            <EventTitle>가파도 청보리축제 (4/26~4/28)</EventTitle>
            <Address>서귀포시 대정읍</Address>
            <Call>가파리 사무소 064{")"}794-7130 ...</Call>
          </MessageBox>
          <ImageBox></ImageBox>
        </EventBox>
        <div> 행사 1</div>
        <div> 행사 2</div>
      </Slider>
    </Container>
  );
};
export default EventBanner;

const Container = styled.div`
  width: 100vw;
  height: 108px;
  background-color: #f0f0f0;
  position: relative;
  margin: 50px 0;
`;
const EventBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  width: 100vw;
  height: 108px;
`;
const MessageBox = styled.div`
  width: 60%;
  margin: 15px;
  position: absolute;
  top: 0px;
  left: 0px;
`;
const EventTitle = styled.div`
  font-size: 14px;
  line-height: 30px;
  color: #000;
`;
const Address = styled.div`
  font-size: 10px;
  line-height: 20px;
  color: #474751;
`;
const Call = styled.div`
  font-size: 10px;
  line-height: 20px;
  color: #474751;
`;
const ImageBox = styled.div`
  width: 35%;
  height: 100%;
  background-color: #e0e0e0;
  position: absolute;
  top: 0px;
  right: 0px;
`;
