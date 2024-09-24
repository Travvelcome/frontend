import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <Container>
      <Main
        onClick={() => {
          window.location.href = "/frontend/main";
        }}
      >
        <HiOutlineHome />
      </Main>
      <Map
        onClick={() => {
          window.location.href = "/frontend/map";
        }}
      >
        <HiOutlineLocationMarker />
      </Map>
      <Chatting
        onClick={() => {
          window.location.href = "/frontend/";
        }}
      >
        <HiOutlineChatAlt2 />
      </Chatting>
      <MyPage
        onClick={() => {
          window.location.href = "/frontend/mypage";
        }}
      >
        <HiOutlineUserCircle />
      </MyPage>
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  border-top: 1px solid #87888d;
  width: 100%;
  height: 70px;
  z-index: 999;
  background-color: #ffffff;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
`;
const Main = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
const Map = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
const Chatting = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
const MyPage = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
