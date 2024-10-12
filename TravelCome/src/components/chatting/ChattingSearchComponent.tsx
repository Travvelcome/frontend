import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import { IoSearchSharp } from "react-icons/io5";
import { getChatSearch } from "../../api/Chat";
import { IoIosArrowBack } from "react-icons/io";

interface ModalProps {
  landmarkId: number;
  onClose: () => void;
  setChatList: (data: string[]) => void;
}

const ChattingSearchComponent = ({
  landmarkId,
  onClose,
  setChatList,
}: ModalProps) => {
  const navigate = useNavigate();

  // 검색창 닫기
  const handleClose = () => {
    onClose?.();
  };

  // 개인정보
  const token = localStorage.getItem("token");

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  // 챗봇 대화 api 연동
  const [chatSearchList, setChatSearchList] = useState<any>([]);

  const handelPostChat = async () => {
    try {
      const response = await getChatSearch(landmarkId, searchKeyword, token);
      setChatSearchList(response);
      setChatList(response.chatList);
      console.log("대화 내역 검색 :", response);
    } catch (error) {
      console.error("대화 내역 검색 오류:", error);
    }
  };

  // 엔터키를 누르면 handelPostChat 호출
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handelPostChat(); // 엔터를 누를 때 검색
    }
  };

  // 검색아이콘 누를때
  const searchButton = async () => {
    handelPostChat(); // 아이콘을 누를 때 검색
  };

  // 나가기 아이콘  누를때
  const backButton = async () => {
    onClose();
    // 원래상태로 초기화
    try {
      const response = await getChatSearch(landmarkId, "", token);
      setChatSearchList(response);
      setChatList(response.chatList);
      console.log("대화 내역 검색 :", response);
    } catch (error) {
      console.error("대화 내역 검색 오류:", error);
    }
  };

  return (
    <Container onClick={onClose}>
      <SearchBox
        onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
      >
        <BackBtn onClick={backButton}>
          <IoIosArrowBack />
        </BackBtn>
        <SearchInput
          id="input"
          type="text"
          autoFocus
          value={searchKeyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // 엔터키 감지
        />
        <div id="search-icon" onClick={searchButton}>
          <IoSearchSharp size="23" />
        </div>
      </SearchBox>
    </Container>
  );
};
export default ChattingSearchComponent;

const Container = styled.div`
  width: 100%;
  height: 190px;
  background-color: rgba(0, 0, 0, 0.1); /*까만색(0,0,0) 20% 불투명도*/
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: fixed;
  bottom: 0px;
  left: 0px;
  //z-index: 999;
  overflow: auto;
`;

const SearchBox = styled.div`
  font-family: "JejuGothic";
  width: 90%;
  height: 50px;
  border-radius: 15px;
  border: 1px solid #000;
  position: fixed;
  bottom: 100px;
  right: 20px;
  cursor: pointer;

  background-color: rgb(255, 255, 255);

  #search-icon {
    color: #111;
    position: absolute;
    top: 5px;
    right: 7%;
    cursor: pointer;
    line-height: 55px;
  }
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #ff6b00;
  z-index: 999;
  position: absolute;
  top: 10px;
  left: 8px;
  cursor: pointer;
`;
const SearchInput = styled.input`
  width: 75%;
  height: 45px;
  border: none;
  margin-left: 50px;
  font-size: 20px;
  color: #333;
  &:focus {
    outline: none;
  }
`;
