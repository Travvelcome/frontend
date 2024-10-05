import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import LeaveModal from "./LeaveModal";

const LeavePage = () => {
  const navigate = useNavigate();

  // 모달창
  const [isOpen, setIsOpen] = useState(false);

  const LeaveButton = () => {
    setIsOpen(true);
  };
  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoIosArrowBack />
        </BackBtn>
        <Title>회원탈퇴</Title>
      </TitleBox>
      <LeaveBox>
        <NoticeTitle>탈퇴 전 확인하세요.</NoticeTitle>
        <NoticeBox>
          <ul>
            <li>
              탈퇴하시면 이용중인 계정은 삭제되며 모든 데이터는 복구되지
              않습니다.
            </li>
          </ul>
          <hr />
          <CheckBox type="checkbox" />
          안내사항을 모두 확인하였으며, 이에 동의합니다.
        </NoticeBox>
        <LeaveBtn onClick={() => LeaveButton()}>탈퇴하기</LeaveBtn>
      </LeaveBox>
      {isOpen && (
        <LeaveModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Container>
  );
};
export default LeavePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
  //border: 1px solid #000;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #ff6b00;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 120px;
  height: 25px;
  line-height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0px auto;
  padding-bottom: 10px;
  text-align: center;
`;
const LeaveBox = styled.div`
  font-family: "JejuGothic";
  padding: 10px;
`;
const NoticeTitle = styled.div`
  width: 200px;
  font-family: "JejuGothic";
  margin: 0px auto;
  margin-top: 40px;
  font-size: 24px;
`;
const NoticeBox = styled.div`
  width: 80%;
  padding: 10px 25px;
  padding-bottom: 20px;
  font-family: "JejuGothic";
  font-size: 15px;
  line-height: 20px;
  border-radius: 10px;
  margin: 30px auto;
  background-color: rgb(255, 107, 0, 0.4);

  ul {
    padding-inline-start: 25px;
  }
`;
const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  font-family: "JejuGothic";
`;
const LeaveBtn = styled.div`
  width: 170px;
  height: 44px;
  margin: 0 auto;
  font-family: "JejuGothic";
  font-size: 20px;
  border-radius: 10px;
  line-height: 44px;
  text-align: center;
  color: #fff;
  background-color: rgb(255, 107, 0, 0.8);
  cursor: pointer;
`;
