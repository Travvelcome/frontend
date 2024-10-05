import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as FrequencyIcon } from "../../assets/common/Stamp.svg";
import { ReactComponent as Arrow } from "../../assets/common/Arrow.svg";

const MyPage = () => {
  return (
    <Container>
      <TitleBox>
        <Title>설정 {"  "}</Title>
      </TitleBox>
      <InfoBox>
        <Image
          id="roadview
          "
        >
          <img id="images" />
        </Image>
        <TextBox>
          <BigText>닉네임</BigText>
          <SmallText>.........</SmallText>
        </TextBox>
      </InfoBox>
      <FrequencyBox>
        <span id="icon">
          <FrequencyIcon />
        </span>
        <Score>
          1 <span>/ 20</span>
        </Score>
        <span id="arrow">
          <Arrow />
        </span>
        <Bar1></Bar1>
        <Bar2></Bar2>
      </FrequencyBox>
      <hr />
      <SettingBox>
        <Title2>
          <div></div>설정
        </Title2>
        <Menu
          onClick={() => {
            window.location.href = "/frontend/filter";
          }}
        >
          관심사 설정
        </Menu>
        <Menu>정보 수정</Menu>
        <Title2>
          <div></div>도움말
        </Title2>
        <Menu>서비스 이용약관</Menu>
        <Title2>
          <div></div>기타
        </Title2>
        <Menu
          onClick={() => {
            window.location.href = "/frontend/my/leave";
          }}
        >
          회원 탈퇴
        </Menu>
        <Menu>로그아웃</Menu>
      </SettingBox>
    </Container>
  );
};
export default MyPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  hr {
    margin: 0 15px;
  }
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  padding-bottom: 10px;
  span {
    vertical-align: middle;
  }
  //border: 1px solid #111;
`;
const Title = styled.div`
  font-size: 34px;
  color: #ff6b00;
  margin: 0px auto;
  padding-left: 15px;
  padding-top: 20px;
`;

const InfoBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  margin: auto 0;
  position: relative;
  //border: 1px solid #111;
`;

const Image = styled.div`
  width: 88px;
  height: 88px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;
const TextBox = styled.div`
  width: 60%;
  position: absolute;
  top: 45px;
  left: 130px;
  //border: 1px solid #111;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 24px;
`;
const SmallText = styled.div`
  //position: absolute;
  //top: 30px;
  //right: 0px;
  margin-top: 10px;
  margin-left: 10px;
  color: #929292;
  font-size: 15px;
`;

const FrequencyBox = styled.div`
  width: 87%;
  height: 60px;
  margin: 0px auto;
  margin-bottom: 30px;
  background-color: #fdac01;
  border-radius: 10px;
  position: relative;
  #icon {
    position: absolute;
    top: 6px;
    left: 20px;
  }
  #arrow {
    position: absolute;
    top: 5.5px;
    right: 20px;
    cursor: pointer;
  }
`;
const Score = styled.div`
  position: absolute;
  top: 5px;
  left: 90px;
  color: #fff;
  font-family: "SanTokki";
  font-size: 25px;
  span {
    position: absolute;
    font-size: 15px;
    width: 40px;
    top: 8px;
    left: 20px;
  }
`;
const Bar1 = styled.div`
  width: 220px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
  opacity: 0.5;
`;
const Bar2 = styled.div`
  width: 11px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
`;

const SettingBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0 25px;
  padding-bottom: 70px;
  //border: 1px solid #111;
`;
const Title2 = styled.div`
  font-family: "SanTokki";
  font-size: 20px;
  position: relative;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-top: 40px;
  div {
    width: 21px;
    height: 21px;
    position: absolute;
    top: -10px;
    left: -10px;
    border-radius: 50%;
    border: 2px dashed #fdac01;
    z-index: -999;
  }
`;
const Menu = styled.div`
  font-family: "JejuGothic";
  font-size: 17px;
  color: #929292;
  margin-left: 15px;
  margin-bottom: 25px;
  cursor: pointer;
`;
