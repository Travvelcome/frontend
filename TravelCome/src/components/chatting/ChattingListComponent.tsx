import React, { useEffect } from "react";
import styled from "styled-components";

const ChattingListComponent = () => {
  return (
    <>
      <Container
        onClick={() => {
          window.location.href = "/chattinghistory";
        }}
      >
        <Image
          id="roadview
          "
        >
          <img id="images" />
        </Image>
        <TextBox>
          <BigText>용두암</BigText>
          <SmallText>내용</SmallText>
          <Time>1일전</Time>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default ChattingListComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  position: relative;
  padding: 5px 0;
  //border: 1px solid #000;
`;
const Image = styled.div`
  width: 52px;
  height: 52px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
const TextBox = styled.div`
  position: absolute;
  top: 10px;
  left: 80px;
  width: 250px;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 15px;
`;
const SmallText = styled.div`
  margin-top: 10px;
  color: #929292;
  font-size: 13px;
`;
const Time = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  color: #929292;
  font-size: 13px;
`;
