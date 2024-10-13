import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface DataItem {
  landmarkTitle: string;
}

const MessageList = ({ landmarkTitle }: DataItem) => {
  return (
    <Container
      onClick={() => {
        window.location.href = "/frontend/chatting";
      }}
    >
      {landmarkTitle}
    </Container>
  );
};
export default MessageList;

const Container = styled.div`
  //width: 150px;
  height: 30px;
  border-radius: 50px;
  line-height: 30px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 15px;
  color: #fff;
  background-color: #999;
  margin: 0 5px;
  padding: 0 10px;
  display: inline-block;
  cursor: pointer;
`;
