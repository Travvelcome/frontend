import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { getChatHistory } from "../../api/Chat";
import ChattingSearchComponent from "./ChattingSearchComponent";

const ChattingHistoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 개인정보
  const token = localStorage.getItem("token");

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  // 검색창 api 연동
  const [isOpen, setIsOpen] = useState(false);
  const searchOpenButton = () => {
    setIsOpen(true);
  };
  // 검색창 내용 상태 저장
  const [searchList, setSearchList] = useState<any>([]);

  // 채팅 내역 보여주기 api 연동
  const { landmarkId } = location.state;
  const [chatInfoList, setChatInfoList] = useState<any>([]);
  const [chatList, setChatList] = useState<any>([]);

  const fetchChattingHistory = async () => {
    try {
      const response = await getChatHistory(landmarkId, token);
      setChatInfoList(response);
      setChatList(response.chatList);

      console.log("채팅 대화 내역 불러오기 :", response);
      console.log("채팅 대화 내역 불러오기 :", response.chatList);
    } catch (error) {
      console.error("채팅 대화 내역 오류:", error);
    }
  };

  useEffect(() => {
    fetchChattingHistory();
  }, []);

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
        <Title>{chatInfoList.landmarkTitle}</Title>
        <Image
          id="roadview
          "
        >
          <img
            id="img"
            alt="대화 내역 이미지"
            src={chatInfoList.landmarkImage}
          />
        </Image>
        <hr />
      </TitleBox>
      <ChattingBox>
        {chatList.map((chat: any, index: any) => (
          <Day key={index}>
            <Date>{chat.date.slice(0, 10)}</Date>
            <Me>{chat.sent}</Me>
            <AI>{chat.received}</AI>
          </Day>
        ))}
      </ChattingBox>

      <SearchBtn onClick={searchOpenButton}>
        <div id="search-icon">
          <IoSearchSharp size="23" />
        </div>
      </SearchBtn>

      {isOpen && (
        <ChattingSearchComponent
          landmarkId={landmarkId}
          setChatList={setChatList}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
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
  color: #ff6b00;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 200px;
  height: 25px;
  line-height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0px auto;
  padding-bottom: 10px;
  text-align: center;
`;
const Image = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 50%;
  position: absolute;
  top: 17px;
  right: 30px;

   #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
`;
const ChattingBox = styled.div`
  height: 80%;
  font-family: "JejuGothic";
  position: relative;
  padding: 10px;
  //border: 1px solid #111;

  overflow: auto;
  white-space: nowrap;
`;
const Day = styled.div`
  padding: 15px 0;
  white-space: wrap;
  //border: 1px solid #000;
`;
const Date = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  color: #87888d;
  position: relative;
  text-align: center;
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
  line-height: 20px;
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
  line-height: 20px;
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

  background-color: rgb(255, 255, 255, 0.8);

  #search-icon {
    color: #111;
    text-align: center;
    cursor: pointer;
    line-height: 60px;
  }
`;
