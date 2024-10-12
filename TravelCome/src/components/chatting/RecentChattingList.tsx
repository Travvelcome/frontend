import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface DataItem {
  landmarkId: number;
  landmarkTitle: string;
  landmarkImage: string;
}

const RecentChattingList = ({
  landmarkId,
  landmarkTitle,
  landmarkImage,
}: DataItem) => {
  return (
    <Container>
      <Image>
        <img id="img" alt="최근 대화 목록" src={landmarkImage} />
      </Image>
      <DesciptionBox>
        <Name>{landmarkTitle}</Name>
      </DesciptionBox>
    </Container>
  );
};
export default RecentChattingList;

const Container = styled.div`
  width: 112px;
  height: 130px;
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

  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;
const DesciptionBox = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
`;
const Name = styled.div`
  width: 70px;
  margin: 0 auto;
  text-align: center;
  white-space: wrap;
  font-family: "JejuGothic";
  font-size: 15px;
  color: #474751;
`;
