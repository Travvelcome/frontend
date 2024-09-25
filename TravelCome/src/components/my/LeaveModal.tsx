import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ModalContainer from "../modal/ModalContainer";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const LeaveModal = ({ onClose }: ModalProps) => {
  // 회원탈퇴 모달창 닫기
  const handleClose = () => {
    onClose?.();
  };
  // 비밀번호 입력
  const [password, setPassword] = useState<string>("");
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
          <PasswordInput
            type="password"
            placeholder="현재 사용중인 비밀번호를 입력해주세요."
            value={password}
            onChange={(ev: any) => setPassword(ev.target.value)}
          />
          <Leave>탈퇴</Leave>
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
  border-radius: 20px;
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
const PasswordInput = styled.input`
  width: 250px;
  height: 35px;
  font-family: "JejuGothic";
  color: #d9d9d9;
  border-radius: 10px;
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
`;

const Cancel = styled.button`
  width: 137px;
  height: 45px;
  font-family: "JejuGothic";
  font-size: 20px;
  border-radius: 10px;
  border: none;
  background-color: rgb(255, 107, 0, 0.8);
  color: #fff;
  cursor: pointer;
  margin-left: 5px;
`;
