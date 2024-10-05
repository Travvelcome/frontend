import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import ModalContainer from "../modal/ModalContainer";
import { ReactComponent as ModalOrange } from "../../assets/stamp/ModalOrange.svg";
import { ReactComponent as ModalVoucher } from "../../assets/stamp/ModalVoucher.svg";
import { ReactComponent as ModalCalendar } from "../../assets/stamp/ModalCalendar.svg";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const StampInfoModal = ({ onClose }: ModalProps) => {
  // 정보 모달창 닫기
  const handleClose = () => {
    onClose?.();
  };
  return (
    <ModalContainer>
      <Container onClick={onClose}>
        <Box
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <BackBtn onClick={handleClose}>
            <IoClose />
          </BackBtn>
          <Title>이달의 스탬프란?</Title>
          <Message>
            혼저옵셔행 회원은 매달 스탬프를 모아 제주도에서 다양한 혜택을 받을
            수 있습니다.
          </Message>
          <InfoBox>
            <Icon>
              <ModalOrange />
            </Icon>
            <InnerBox>
              <Number>1</Number>
              <Info>
                제주도의 새로운 장소를 발견한 뒤 대화를 나누면 자동으로 스탬프가
                적립됩니다.
              </Info>
            </InnerBox>
          </InfoBox>
          <InfoBox>
            <Icon>
              <ModalVoucher />
            </Icon>
            <InnerBox>
              <Number>2</Number>
              <Info>
                스탬프를 12개 적립하면 혼저옵셔행의 제휴 매장에서 사용 가능한
                바우처를 1개 선택할 수 있습니다.
              </Info>
            </InnerBox>
          </InfoBox>
          <InfoBox>
            <Icon>
              <ModalCalendar />
            </Icon>
            <InnerBox>
              <Number>3</Number>
              <Info>
                모은 스탬프의 개수는 매월 1일마다 갱신됩니다. 다음 달이 되면
                처음부터 스탬프를 모아 혜택을 다시 받을 수 있습니다.
              </Info>
            </InnerBox>
          </InfoBox>
        </Box>
      </Container>
    </ModalContainer>
  );
};

export default StampInfoModal;
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
  justify-content: center;
  text-align: center;
  padding: 40px 25px;
  position: relative;
`;
const BackBtn = styled.div`
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: #ff6b00;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 20px;
`;
const Message = styled.div`
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 20px;
  text-align: left;
`;
const InfoBox = styled.div`
  height: 80px;
  font-size: 15px;
  margin-bottom: 30px;
  line-height: 20px;
  text-align: left;
  position: relative;
`;
const Icon = styled.div`
  text-align: left;
  margin: auto 0;
`;
const InnerBox = styled.div`
  line-height: 20px;
  text-align: left;
  position: absolute;
  top: 0px;
  left: 80px;
`;
const Number = styled.div`
  font-family: "SanTokki";
  font-size: 17px;
  line-height: 20px;
  margin-bottom: 5px;
`;
const Info = styled.div`
  font-size: 12px;
  line-height: 20px;
`;
