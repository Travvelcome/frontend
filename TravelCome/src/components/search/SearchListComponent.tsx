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
          <Category>카테고리</Category>
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
const Category = styled.div`
  margin-top: 8px;
  font-size: 15px;
`;
