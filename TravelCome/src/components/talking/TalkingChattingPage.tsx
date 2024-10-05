import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import QuestionList from "./TalkingQuestionList2";

const TalkingChattingPage = () => {
  const navigate = useNavigate();

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <Container>
      <Background>
        무엇이든 대화 나눠요!
        <br />
        질문이 아니어도 괜찮아요.
      </Background>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </BackBtn>
        <Title>용두암</Title>
        <hr />
      </TitleBox>
      <ChattingBox></ChattingBox>
      <QuestionBox>
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <QuestionList />
        <QuestionList />
      </QuestionBox>
      <SearchBox>
        <SearchBar>
          <SearchInput
            id="input"
            type="text"
            autoFocus
            placeholder="Message"
            value={searchKeyword}
            onChange={handleInputChange}
          />
        </SearchBar>
        <div
          id="voice-icon"
          onClick={() => {
            window.location.href = "/frontend/talking/voice";
          }}
        >
          <RiHeadphoneFill size="30" />
        </div>
      </SearchBox>
    </Container>
  );
};
export default TalkingChattingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Background = styled.div`
  font-family: "JejuGothic";
  width: 160px;
  text-align: center;
  position: fixed;
  top: 40%;
  left: 31%;
  font-size: 14px;
  color: rgb(135, 136, 141, 0.5);
  z-index: -999;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
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
  font-size: 28px;
  color: #ff6b00;
  margin: 0px auto;
  text-align: center;
  padding-bottom: 10px;
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
const QuestionBox = styled.div`
  width: 100%;
  font-family: "JejuGothic";
  position: absolute;
  bottom: 90px;
  overflow: auto;
  white-space: nowrap;
`;
const SearchBox = styled.div`
  font-family: "JejuGothic";
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 20px 10px;
  padding-right: 60px;
  //border: 1px solid #111;

  #voice-icon {
    color: #111;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 25px;
    right: 10px;
    cursor: pointer;
  }
`;
const SearchBar = styled.div`
  font-family: "JejuGothic";
  position: relative;
  width: 310px;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #000;
  display: inline-block;
`;
const SearchInput = styled.input`
  font-family: "JejuGothic";
  width: 250px;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 15px;
  color: #333;
  &:focus {
    outline: none;
  }
`;
