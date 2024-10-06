import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { ReactComponent as TalkingBtn } from "../../assets/talking/TalkingBtn.svg";
import QuestionList from "./TalkingQuestionList1";

const TalkingMainPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </BackBtn>
        <Title>새로운 장소 발견!</Title>
      </TitleBox>
      <ImageBox></ImageBox>
      <InfoBox>
        <InfoTitleBox>
          <InfoTitle>용두암</InfoTitle>
          <InfoAddress>제주도 제주시 용담동</InfoAddress>
          <span>
            <TalkingBtn
              onClick={() => {
                navigate("/frontend/talking/chatting");
              }}
            />
          </span>
        </InfoTitleBox>
        <InfoDetailBox>
          제주의 용연과 용두암은 용의 전설을 간직한 아름다운 경승지로, 용연은
          바다와 연못이 어우러진 자연경관으로 여름에는 용연야범 축제로 유명하며,
          용두암은 용의 머리를 상징하는 바위로 두 가지 전설을 담고 있습니다.
          이곳은 데이터 장소로 사랑받으며, 애월 해안도로에서의 드라이브 코스도
          인기가 높습니다.
        </InfoDetailBox>
        <InfoCategoryBox>
          <Category>🌊️ 바다</Category>
          <Category>🐬 생태 / 자연환경</Category>
          <Category>🐉 신화 / 전통</Category>
        </InfoCategoryBox>
      </InfoBox>
      <QuestionBox>
        <QuestionTitle>민지님의 취향 주제</QuestionTitle>
        <QuestionListBox>
          <QuestionList />
          <QuestionList />
          <QuestionList />
          <QuestionList />
        </QuestionListBox>
      </QuestionBox>
    </Container>
  );
};
export default TalkingMainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #ff6b00;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 150px;
  height: 25px;
  line-height: 20px;
  font-size: 20px;
  color: #ff6b00;
  margin: 0px auto;
  padding-bottom: 10px;
  text-align: center;
`;
const ImageBox = styled.div`
  width: 100vw;
  height: 180px;
  background-color: #d9d9d9;
`;

const InfoBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
  //border: 1px solid #000;
`;
const InfoTitleBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0px 25px;
  padding-bottom: 10px;

  span {
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;
  }
`;
const InfoTitle = styled.div`
  font-family: "SanTokki";
  font-size: 34px;
  margin: 10px 0;
`;
const InfoAddress = styled.div`
  font-size: 12px;
  color: #87888d;
`;
const InfoDetailBox = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  position: relative;
  padding: 10px 15px;
  //border: 1px solid #000;
`;
const InfoCategoryBox = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  position: relative;
  padding: 10px 15px;
  //border: 1px solid #000;
`;
const Category = styled.span`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  padding: 0 5px;
  margin: 5px 3px;
  //border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
`;

const QuestionBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
`;
const QuestionTitle = styled.div`
  font-family: "SanTokki";
  font-size: 18px;
  margin: 10px 0;
`;
const QuestionListBox = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
