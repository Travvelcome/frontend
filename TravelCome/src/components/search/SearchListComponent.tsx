import React, { useEffect } from "react";
import styled from "styled-components";

const SearchListComponent = () => {
  return (
    <>
      <Container>
        <Image
          id="roadview
          "
        >
          <img id="images" />
        </Image>
        <TextBox>
          <BigText>용두암</BigText>
          <SmallText>설명</SmallText>
          <CategoryBox>
            <FilterNature>🌊️ 바다 / 섬</FilterNature>
            <FilterKnowledge>📜 역사 / 전통</FilterKnowledge>
            <FilterCulture>🏛️ 전시 / 박물관</FilterCulture>
          </CategoryBox>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default SearchListComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  position: relative;
  padding: 10px 0;
`;
const Image = styled.div`
  width: 70px;
  height: 70px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
const TextBox = styled.div`
  position: absolute;
  top: 10px;
  left: 80px;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 19px;
`;
const SmallText = styled.div`
  margin-top: 8px;
  color: #929292;
  font-size: 15px;
`;
const CategoryBox = styled.div`
  margin-top: 8px;
  font-size: 15px;
`;
const FilterNature = styled.span`
  font-family: "JejuGothic";
  font-size: 8px;
  height: 18px;
  line-height: 18px;
  padding: 0 7px;
  margin: 5px 3px;
  border: 1px solid #547853;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
`;
const FilterKnowledge = styled.span`
  font-family: "JejuGothic";
  font-size: 8px;
  height: 18px;
  line-height: 18px;
  padding: 0 7px;
  margin: 5px 3px;
  border: 1px solid #ff6b00;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
`;
const FilterCulture = styled.span`
  font-family: "JejuGothic";
  font-size: 8px;
  height: 18px;
  line-height: 18px;
  padding: 0 7px;
  margin: 5px 3px;
  border: 1px solid #474751;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
`;
