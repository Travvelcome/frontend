import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiWalk } from "react-icons/bi";

const RecommendList = () => {
  return (
    <Container>
      <Image>
        <Category></Category>
      </Image>

      <DesciptionBox>
        <Name>용두암</Name>
        <Minute>
          <span>
            <BiWalk />
          </span>{" "}
          15분
        </Minute>
        <Price>\ 무료</Price>
      </DesciptionBox>
    </Container>
  );
};
export default RecommendList;

const Container = styled.div`
  width: 130px;
  height: 240px;
  margin: 10px 10px;
  display: inline-block;
`;
const Image = styled.div`
  background-color: #999;
  width: 130px;
  height: 180px;
  border-top-right-radius: 75px;
  border-top-left-radius: 75px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  line-height: 30px;
  position: relative;
`;
const Category = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  background-color: #fdac01;
  border-radius: 50%;
  position: absolute;
  bottom: -10px;
  left: 55px;
`;
const DesciptionBox = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
`;
const Name = styled.div`
  font-family: "Santokki";
  font-size: 20px;
`;
const Minute = styled.div`
  font-family: "JejuGothic";
  font-size: 13px;
  line-height: 15px;
  position: absolute;
  left: 10px;
  span {
    font-size: 12px;
  }
`;
const Price = styled.div`
  font-family: "JejuGothic";
  font-size: 13px;
  position: absolute;
  right: 10px;
`;
