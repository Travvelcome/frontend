import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

interface DataItem {
  landmarkId: number;
  landmarkTitle: string;
  landmarkCategory: string[];
  landmarkImage: string;
  received: string;
  date: string;
}

const ChattingListComponent = ({
  landmarkId,
  landmarkTitle,
  landmarkCategory,
  landmarkImage,
  received,
  date,
}: DataItem) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChattingHistory = async () => {
    // 해당 대화목록 누르면 chattinghistory페이지로 이동 state와 함께
    navigate("/frontend/chatting/history", {
      state: { landmarkId },
    });
  };

  return (
    <>
      <Container onClick={handleChattingHistory}>
        <Image
          id="roadview
          "
        >
          <img id="img" alt="최근 대화 목록" src={landmarkImage} />
        </Image>
        <TextBox>
          <BigText>{landmarkTitle}</BigText>
          <SmallText>{received}</SmallText>
          <Time>{date.slice(5, 10)}</Time>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default ChattingListComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  position: relative;
  padding: 5px 0;
  //border: 1px solid #000;
`;
const Image = styled.div`
  width: 52px;
  height: 52px;
  background-color: #d9d9d9;
  border-radius: 50%;

  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
const TextBox = styled.div`
  position: absolute;
  top: 10px;
  left: 80px;
  width: 70%;
  //border: 1px solid #111;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 15px;
`;
const SmallText = styled.div`
  margin-top: 15px;
  color: #929292;
  font-size: 13px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Time = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #929292;
  font-size: 13px;
`;
