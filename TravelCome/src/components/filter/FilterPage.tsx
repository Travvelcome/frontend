import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const FilterPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
          }}
        >
          <IoClose />
        </BackBtn>
        <Title>관심사 수정</Title>
      </TitleBox>
      <FilterBox>
        <NatureBox>
          <Nature>
            <div></div>자연
          </Nature>
          <Filter>⛰️ 산 / 오름</Filter>
          <Filter>🌊️ 바다</Filter>
          <Filter>🪴 정원 / 수목원</Filter>
          <Filter>🍃 휴양림 / 산책로</Filter>
          <Filter>💧 폭포 / 연못</Filter>
          <Filter>🤩풍경 / 드라이브</Filter>
        </NatureBox>
        <KnowledgeBox>
          <Knowledge>
            <div></div>지식
          </Knowledge>
          <Filter>📰 역사</Filter>
          <Filter>🐬 생태 / 자연환경</Filter>
          <Filter>🔭 우주 / 항공</Filter>
          <Filter>🐉 신화 / 전통</Filter>
          <Filter>👤 인물</Filter>
          <Filter>🐚 이야기 / 썰</Filter>
        </KnowledgeBox>
        <CultureBox>
          <Culture>
            <div></div>문화
          </Culture>
          <Filter>🎨 전시 / 미술</Filter>
          <Filter>🎼 음악</Filter>
          <Filter>🧱 건축</Filter>
          <Filter>🧶 공예 / 체험</Filter>
          <Filter>🎟 테마파크</Filter>
          <Filter>🏅 스포츠</Filter>
          <Filter>🎬 극장 / 영화</Filter>
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
  font-family: "SanTokki";
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
  cursor: pointer;
`;
const Title = styled.div`
  width: 120px;
  height: 25px;
  line-height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0 auto;
  text-align: center;
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
const Filter = styled.span`
  font-family: "JejuGothic";
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  margin: 5px 3px;
  border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
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
