import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { ReactComponent as All } from "../../assets/All.svg";
import { ReactComponent as Mountain } from "../../assets/Mountain.svg";
import { ReactComponent as Knowledge } from "../../assets/Knowledge.svg";
import { ReactComponent as Culture } from "../../assets/Culture.svg";
import { ReactComponent as Down } from "../../assets/CategoryDown.svg";
import ListComponent from "./SearchListComponent";
const SearchPage = () => {
  const navigate = useNavigate();

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoClose />
        </BackBtn>
        <Title>장소 검색</Title>
      </TitleBox>
      <SearchBox>
        <SearchBar>
          <SearchInput
            id="input"
            type="text"
            autoFocus
            value={searchKeyword}
            onChange={handleInputChange}
          />
          <div id="search-icon">
            <IoSearchSharp size="23" />
          </div>
        </SearchBar>
        <CategoryBox>
          <Category>
            <div id="all">
              <All />
            </div>
            <br />
            전체 <br />
            <Dot />
          </Category>
          <Category>
            <div>
              <Mountain />
            </div>
            <br />
            자연
            <br />
            <Dot />
          </Category>
          <Category>
            <div>
              <Knowledge />
            </div>
            <br />
            지식
            <br />
            <Dot />
          </Category>
          <Category>
            <div>
              <Culture />
            </div>
            <br />
            문화
            <br />
            <Dot />
          </Category>
        </CategoryBox>
        <CategoryList>
          카테고리:{" "}
          <span>
            <Down />
          </span>
        </CategoryList>
      </SearchBox>
      <ListBox>
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
        <ListComponent />
      </ListBox>
    </Container>
  );
};
export default SearchPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
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
  padding-left: 20px;
`;
const SearchBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  //border: 1px solid #111;
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
const CategoryBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Category = styled.div`
  width: 68px;
  height: 72px;
  font-family: "JejuGothic";
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 17px;
  background-color: rgb(224, 224, 224, 0.5);
  font-size: 13px;
  text-align: center;
  cursor: pointer;
  color: #000;
  div {
    margin-top: 5px;
    margin-bottom: -8px;
  }
  #all {
    margin-right: 5px;
  }
`;
const Dot = styled.div`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: #000;
  border: 2px solid #000;
  margin: 0 auto;
`;
const CategoryList = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  span {
    vertical-align: middle;
    cursor: pointer;
  }
`;
const ListBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0 25px;
  //border: 1px solid #111;
`;
