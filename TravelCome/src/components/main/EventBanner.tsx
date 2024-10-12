import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick"; // react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EventComponent from "./EventComponent";
import { getFestivals } from "../../api/Festival";

interface DataItem {
  title: string;
  addr1: string;
  eventStartDate: string;
  eventEndDate: string;
  firstImage: string;
  tel: string;
}

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

  // 행사 정보 api 연동(완료)
  const [festivalList, setFestivalList] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchFestival();
  }, []);
  const fetchFestival = async () => {
    try {
      const response = await getFestivals();
      setFestivalList(response.result);
      console.log("행사정보 불러오기 :", response.result);
    } catch (error) {
      console.error("행사정보 오류:", error);
    }
  };

  return (
    <Container>
      <Slider {...settings}>
        {festivalList.map((request, index) => (
          <EventComponent
            key={index}
            title={request.title}
            addr1={request.addr1}
            eventStartDate={request.eventStartDate}
            eventEndDate={request.eventEndDate}
            firstImage={request.firstImage}
            tel={request.tel}
          />
        ))}
      </Slider>
    </Container>
  );
};
export default EventBanner;

const Container = styled.div`
  width: 100vw;
  height: 115px;
  background-color: #f0f0f0;
  position: relative;
  margin: 50px 0;
`;
