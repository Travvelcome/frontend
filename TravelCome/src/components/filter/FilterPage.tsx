import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

const FilterPage = () => {
  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            window.location.href = "/map";
          }}
        >
          <IoCloseOutline />
        </BackBtn>
        <Title>관심사 수정</Title>
      </TitleBox>
      <FilterBox>
        <NatureBox>
          <Nature>
            <div></div>자연
          </Nature>
          <NatureFilter>⛰️ 산 / 오름</NatureFilter>
          <NatureFilter>🌊️ 바다</NatureFilter>
          <NatureFilter>🪴 정원 / 수목원</NatureFilter>
          <NatureFilter>🍃 휴양림 / 산책로</NatureFilter>
          <NatureFilter>💧 폭포 / 연못</NatureFilter>
          <NatureFilter>🤩풍경 / 드라이브</NatureFilter>
        </NatureBox>
        <KnowledgeBox>
          <Knowledge>
            <div></div>지식
          </Knowledge>
          <KnoledgeFilter>📰 역사</KnoledgeFilter>
          <KnoledgeFilter>🐬 생태 / 자연환경</KnoledgeFilter>
          <KnoledgeFilter>🔭 우주 / 항공</KnoledgeFilter>
          <KnoledgeFilter>🐉 신화 / 전통</KnoledgeFilter>
          <KnoledgeFilter>👤 인물</KnoledgeFilter>
          <KnoledgeFilter>🐚 이야기 / 썰</KnoledgeFilter>
        </KnowledgeBox>
        <CultureBox>
          <Culture>
            <div></div>문화
          </Culture>
          <CultureFilter>🎨 전시 / 미술</CultureFilter>
          <CultureFilter>🎼 음악</CultureFilter>
          <CultureFilter>🧱 건축</CultureFilter>
          <CultureFilter>🧶 공예 / 체험</CultureFilter>
          <CultureFilter>🎟 테마파크</CultureFilter>
          <CultureFilter>🏅 스포츠</CultureFilter>
          <CultureFilter>🎬 극장 / 영화</CultureFilter>
        </CultureBox>
      </FilterBox>
    </Container>
  );
};
export default FilterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
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
`;
const Title = styled.div`
  width: 120px;
  height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0 auto;
`;
const FilterBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
`;
const NatureBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  margin-bottom: 50px;
`;
const Nature = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #547853;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
const NatureFilter = styled.span`
  font-family: "JejuGothic";
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  margin: 5px 3px;
  border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
`;
const KnowledgeBox = styled.div`
  font-family: "JejuGothic";
  margin-bottom: 50px;
`;
const Knowledge = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #ff6b00;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
const KnoledgeFilter = styled.span`
  font-family: "JejuGothic";
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  margin: 5px 3px;
  border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
`;
const CultureBox = styled.div`
  font-family: "JejuGothic";
  margin-bottom: 50px;
`;
const Culture = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #87888d;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
const CultureFilter = styled.span`
  font-family: "JejuGothic";
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  margin: 5px 3px;
  border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
`;
