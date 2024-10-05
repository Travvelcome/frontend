import React, { useState, useEffect } from "react";
import styled from "styled-components";

const RecentChattingList = () => {
  return (
    <Container>
      <Image></Image>
      <DesciptionBox>
        <Name>용두암</Name>
      </DesciptionBox>
    </Container>
  );
};
export default RecentChattingList;

const Container = styled.div`
  width: 112px;
  height: 120px;
  margin: 10px -10px;
  display: inline-block;
  cursor: pointer;
`;
const Image = styled.div`
  background-color: #d9d9d9;
  width: 112px;
  height: 88px;
  border-radius: 15px;
  line-height: 30px;
  position: relative;

  border: 5px solid #fff;
`;
const DesciptionBox = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
`;
const Name = styled.div`
  font-family: "JejuGothic";
  font-size: 15px;
  color: #474751;
`;
