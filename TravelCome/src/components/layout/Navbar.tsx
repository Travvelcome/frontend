import React from "react";
import styled from "styled-components";
import {
  HiOutlineHome,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // 현재 URL 경로 가져오기
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  // 현재 경로에 따라 아이콘이 선택되었는지 확인
  const getIconClass = (paths: string[]) =>
    paths.includes(location.pathname) ? "click" : "noclick";

  return (
    <Container>
      <NavItem onClick={() => navigate("/frontend/main")}>
        <HiOutlineHome className={getIconClass(["/frontend/main"])} />
      </NavItem>
      <NavItem
        onClick={() => {
          window.location.href = "/frontend/map";
        }}
      >
        <HiOutlineLocationMarker className={getIconClass(["/frontend/map"])} />
      </NavItem>
      <NavItem onClick={() => navigate("/frontend/chatting")}>
        <HiOutlineChatAlt2
          className={getIconClass([
            "/frontend/chatting",
            "/frontend/chatting/history",
          ])}
        />
      </NavItem>
      <NavItem onClick={() => navigate("/frontend/my")}>
        <HiOutlineUserCircle
          className={getIconClass([
            "/frontend/my",
            "/frontend/my/leave",
            "/frontend/stamp",
          ])}
        />
      </NavItem>
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

  .click {
    color: #fdac01;
  }
  .noclick {
    color: #e0e0e0;
  }
`;

const NavItem = styled.div`
  font-size: 30px;
  line-height: 70px;
  cursor: pointer;
`;
