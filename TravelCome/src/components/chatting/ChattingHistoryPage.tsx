import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const ChattingHistoryPage = () => {
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
        <Title>용두암</Title>
        <Image
          id="roadview
          "
        >
          <img id="images" />
        </Image>
        <hr />
      </TitleBox>
      <ChattingBox>
        <Day>
          <Date>2024.08.31</Date>
          <AI>안녕하세요. 무엇이든 대화 나눠요!</AI>
          <Me>용두암은 어느정도 크기야?</Me>
          <AI>
            용두암은 높이 10m로 바위 모습이 용머리와 비슷하여 용두암이라고
            불려요.
          </AI>
        </Day>
        <Day>
          <Date>2024.09.07</Date>
          <AI>안녕하세요. 무엇이든 대화 나눠요!</AI>
          <Me>용두암은 어느정도 크기야?</Me>
          <AI>
            용두암은 높이 10m로 바위 모습이 용머리와 비슷하여 용두암이라고
            불려요.
          </AI>
        </Day>
      </ChattingBox>

      <SearchBtn>
        <div id="search-icon">
          <IoSearchSharp size="23" />
        </div>
      </SearchBtn>
    </Container>
  );
};
export default ChattingHistoryPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
  //border: 1px solid #000;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #474751;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 120px;
  height: 25px;
  line-height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0px auto;
  padding-left: 50px;
  padding-bottom: 10px;
`;
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  position: absolute;
  top: 17px;
  right: 30px;
`;
const ChattingBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 10px;
  //border: 1px solid #111;
`;
const Date = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  color: #87888d;
  position: relative;
  text-align: center;
`;
const Day = styled.div`
  padding: 15px 0;
  //border: 1px solid #000;
`;
const AI = styled.div`
  width: max-content;
  max-width: 250px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 14px;
  border-radius: 30px;
  color: #000;
  background-color: rgb(255, 107, 0, 0.4);
`;
const Me = styled.div`
  width: max-content;
  max-width: 250px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  margin-left: auto; // 오른쪽 정렬
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 14px;
  border-radius: 30px;
  color: #fff;
  background-color: rgb(255, 107, 0, 0.8);
`;
const SearchBtn = styled.div`
  width: 70px;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #000;
  position: fixed;
  bottom: 100px;
  right: 20px;
  cursor: pointer;

  #search-icon {
    color: #111;
    text-align: center;
    cursor: pointer;
    line-height: 60px;
  }
`;
