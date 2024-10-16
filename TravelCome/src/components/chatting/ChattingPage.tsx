import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
import { ReactComponent as Down } from "../../assets/common/CategoryDown.svg";
import ListComponent from "./ChattingListComponent";
import RecentChattingList from "./RecentChattingList";
import { getChatList, getChatListSearch, getChatSearch } from "../../api/Chat";

interface DataItem {
  landmarkId: number;
  landmarkTitle: string;
  landmarkCategory: string[];
  landmarkImage: string;
  received: string;
  date: string;
}

const ChattingPage = () => {
  // 개인정보 가져오기
  const nickname = localStorage.getItem("nickname");
  const token = localStorage.getItem("token");
  const profileImageUrl = localStorage.getItem("profileImageUrl");

  // 최근 대화 챗봇 목록 api 연동
  const [landmarkHistory1, setLandmarkHistory1] = useState<DataItem[]>([]);
  const [landmarkHistory, setLandmarkHistory] = useState<DataItem[]>([]);

  useEffect(() => {
    fetchLandmarkHistory();
  }, []);

  const fetchLandmarkHistory = async () => {
    try {
      const response = await getChatList(token);
      setLandmarkHistory1(response);
      setLandmarkHistory(response);
      console.log("랜드마크 대화 목록 불러오기 :", response);
    } catch (error) {
      console.error("랜드마크 대화 목록 불러오기 오류:", error);
    }
  };

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = async (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);

    try {
      const response = await getChatListSearch(keyword, token);
      setLandmarkHistory(response);
      console.log("챗봇 목록 검색:", response);
    } catch (error) {
      console.error("챗봇 목록 검색 오류:", error);
    }
  };

  // 검색아이콘 누를때
  const searchButton = async () => {
    try {
      const response = await getChatListSearch(searchKeyword, token);
      setLandmarkHistory(response);
      console.log("챗봇 목록 검색:", response);
    } catch (error) {
      console.error("챗봇 목록 검색 오류:", error);
    }
  };

  // 엔터키를 누를때
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchButton();
      setSearchKeyword(""); // input창 비우기
    }
  };

  return (
    <Container>
      <TitleBox>
        <Title>
          채팅 {"  "}
          <span>
            <Down />
          </span>
        </Title>
      </TitleBox>
      <RecentBox>
        <Title2>
          <div></div>최근 대화
        </Title2>
        <RecentListBox>
          {landmarkHistory1.map((request, index) => (
            <RecentChattingList
              key={index}
              landmarkId={request.landmarkId}
              landmarkTitle={request.landmarkTitle}
              landmarkImage={request.landmarkImage}
            />
          ))}
        </RecentListBox>
      </RecentBox>
      <SearchBox>
        <SearchBar>
          <SearchInput
            id="input"
            type="text"
            autoFocus
            value={searchKeyword}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <div
            id="search-icon"
            onClick={() => {
              searchButton();
            }}
          >
            <IoSearchSharp size="23" />
          </div>
        </SearchBar>
      </SearchBox>
      <ListBox>
        <Title2>
          <div></div>대화록
        </Title2>
        {landmarkHistory.map((request, index) => (
          <ListComponent
            key={index}
            landmarkId={request.landmarkId}
            landmarkTitle={request.landmarkTitle}
            landmarkImage={request.landmarkImage}
            landmarkCategory={request.landmarkCategory}
            received={request.received}
            date={request.date}
          />
        ))}
      </ListBox>
    </Container>
  );
};
export default ChattingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  span {
    vertical-align: middle;
    cursor: pointer;
  }
  //border: 1px solid #111;
`;
const Title = styled.div`
  font-size: 34px;
  color: #ff6b00;
  margin: 0px auto;
  padding-left: 15px;
  padding-top: 20px;
`;
const Title2 = styled.div`
  font-family: "SanTokki";
  font-size: 20px;
  position: relative;
  margin-bottom: 15px;
  margin-left: 5px;
  div {
    width: 21px;
    height: 21px;
    position: absolute;
    top: -10px;
    left: -10px;
    border-radius: 50%;
    border: 2px dashed #fdac01;
    z-index: -999;
  }
`;

const RecentBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0 5%;
`;
const RecentListBox = styled.div`
  padding: 0 8%;
  display: flex;
  justify-content: space-evenly;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const SearchBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding-top: 30px;
  padding-bottom: 40px;
`;
const SearchBar = styled.div`
  font-family: "JejuGothic";
  position: relative;
  width: 328px;
  height: 44px;
  margin: 0 auto;
  border-radius: 30px;
  border: 1px solid #ff6b00;

  #search-icon {
    color: #111;
    position: absolute;
    top: 5px;
    right: 5%;
    cursor: pointer;
    line-height: 44px;
  }
`;
const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 20px;
  color: #333;
  &:focus {
    outline: none;
  }
`;

const ListBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0 25px;
  padding-bottom: 70px;
  //border: 1px solid #111;
`;
