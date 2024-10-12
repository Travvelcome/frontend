import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ModalContainer from "../modal/ModalContainer";
import { postKaKaoUnlink } from "../../api/Auth";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const LeaveModal = ({ onClose }: ModalProps) => {
  // 회원탈퇴 모달창 닫기
  const handleClose = () => {
    onClose?.();
  };

  const token = localStorage.getItem("token");

  // 회원탈퇴 api 연동
  const handelUnlinkBtn = async () => {
    //로컬 스토리지 클리어
    localStorage.clear();
    try {
      const response = await postKaKaoUnlink(token);
      console.log("계정탈퇴하기 :", response);
      window.location.href = "/frontend";
    } catch (error) {
      console.error("계정탈퇴하기 오류:", error);
    }
  };

  return (
    <ModalContainer>
      <Container onClick={onClose}>
        <Box
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <Title>정말 탈퇴하시겠어요?</Title>
          <Message>
            탈퇴 버튼 선택 시, 계정은 삭제되며 복구되지 않습니다.
          </Message>
          <Leave onClick={handelUnlinkBtn}>탈퇴</Leave>
          <Cancel onClick={handleClose}>취소</Cancel>
        </Box>
      </Container>
    </ModalContainer>
  );
};

export default LeaveModal;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2); /*까만색(0,0,0) 20% 불투명도*/
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: none;
  position: fixed;
  top: 0px;
  left: 0px;
`;
const Box = styled.div`
  font-family: "JejuGothic";
  background-color: #fff;
  width: 300px;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;
  border: none;
  justify-content: center;
  text-align: center;
  padding: 40px 25px;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;
const Message = styled.div`
  margin-bottom: 30px;
  text-align: left;
`;
const Leave = styled.button`
  width: 137px;
  height: 45px;
  font-family: "JejuGothic";
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: rgb(255, 107, 0, 0.4);
  color: #fff;
  cursor: pointer;
  margin-right: 5px;
  &:hover {
    background-color: rgb(255, 107, 0, 0.8);
    color: whitesmoke;
    transform: translateY(-1px);
  }
`;

const Cancel = styled.button`
  width: 137px;
  height: 45px;
  font-family: "JejuGothic";
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: rgb(255, 107, 0, 0.4);
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    background-color: rgb(255, 107, 0, 0.8);
    color: whitesmoke;
    transform: translateY(-1px);
  }
`;
