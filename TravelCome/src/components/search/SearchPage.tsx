import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { ReactComponent as All } from "../../assets/search/All.svg";
import { ReactComponent as Nature } from "../../assets/search/Nature.svg";
import { ReactComponent as Knowledge } from "../../assets/search/Knowledge.svg";
import { ReactComponent as Culture } from "../../assets/search/Culture.svg";
import { ReactComponent as All2 } from "../../assets/search/All2.svg";
import { ReactComponent as Nature2 } from "../../assets/search/Nature2.svg";
import { ReactComponent as Knowledge2 } from "../../assets/search/Knowledge2.svg";
import { ReactComponent as Culture2 } from "../../assets/search/Culture2.svg";
import { ReactComponent as Down } from "../../assets/common/CategoryDown.svg";
import { ReactComponent as Up } from "../../assets/common/CategoryUp.svg";
import ListComponent from "./SearchListComponent";
import CategoryComponent from "./CategoryComponent";

const SearchPage = () => {
  const navigate = useNavigate();

  // 관심사 테마 선택
  const [thema, setThema] = useState<number>(0);
  const handleClick = (index: number) => {
    setThema(index);
  };

  //카테고리 필터창
  const [isOpen, setIsOpen] = useState(false);
  const FilterButton = () => {
    setIsOpen(true);
  };

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
          <div onClick={() => handleClick(0)}>
            {thema === 0 ? <All /> : <All2 />}
          </div>
          <div onClick={() => handleClick(1)}>
            {thema === 1 ? <Nature /> : <Nature2 />}
          </div>
          <div onClick={() => handleClick(2)}>
            {thema === 2 ? <Knowledge /> : <Knowledge2 />}
          </div>
          <div onClick={() => handleClick(3)}>
            {thema === 3 ? <Culture /> : <Culture2 />}
          </div>
        </CategoryBox>
        <CategoryList>
          카테고리:{" "}
          <span onClick={() => FilterButton()}>
            {isOpen ? <Up /> : <Down />}
          </span>
          {isOpen && (
            <CategoryComponent
              onClose={() => {
                setIsOpen(false);
              }}
            />
          )}
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
  color: #ff6b00;
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
  text-align: center;
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
  width: 95%;
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
  div {
    cursor: pointer;
  }
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
