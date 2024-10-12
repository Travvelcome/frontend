import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface DataItem {
  title: string;
  addr1: string;
  eventStartDate: string;
  eventEndDate: string;
  firstImage: string;
  tel: string;
}

const EventComponent = ({
  title,
  addr1,
  eventStartDate,
  eventEndDate,
  firstImage,
  tel,
}: DataItem) => {
  return (
    <>
      <EventBox>
        <MessageBox>
          <EventTitle>
            {title} {"( "}
            {eventStartDate.slice(-4)} ~ {eventEndDate.slice(-4)}
            {" )"}
          </EventTitle>
          <Address>{addr1}</Address>
          <Call>{tel}</Call>
        </MessageBox>
        <ImageBox>
          <img id="img" alt="행사 이미지" src={firstImage} />
        </ImageBox>
      </EventBox>
    </>
  );
};
export default EventComponent;

const EventBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  width: 100vw;
  height: 115px;
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
  position: absolute;
  top: 0px;
  right: 0px;
  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
