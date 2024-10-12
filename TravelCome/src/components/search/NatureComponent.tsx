import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import { ReactComponent as Filter } from "../../assets/map/Filter.svg";

interface ModalProps {
  onClose: () => void;
  setSelectedTag: (data: string) => void;
}

const NatureComponent = ({ onClose, setSelectedTag }: ModalProps) => {
  // 관심사 필터창 닫기
  const handleClose = () => {
    onClose?.();
  };

  // 관심사 태그 선택
  const [selectedFilter, setSelectedFilter] = useState<string>(); // 하나의 필터만 선택하도록 상태 관리

  // 필터 클릭 시 상태 업데이트 함수
  const handleFilterClick = (tag: string) => {
    if (selectedFilter === tag) {
      // 이미 선택된 필터면 그대로 냅두기
      setSelectedFilter(tag);
      setSelectedTag(tag);
    } else {
      // 선택되지 않은 필터면 해당 필터를 선택
      setSelectedFilter(tag);
      setSelectedTag(tag);
    }
  };

  // 필터가 선택되었는지 확인하는 함수
  const isFilterSelected = (filter: string) => selectedFilter === filter;

  return (
    <ModalContainer>
      <Container onClick={onClose}>
        <Box
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <Menu>전체</Menu>
          <hr />
          <Menu
            onClick={() => handleFilterClick("MOUNTAIN")}
            style={{
              opacity: isFilterSelected("MOUNTAIN") ? 1 : 0.5,
            }}
          >
            ⛰️ 산 / 오름
          </Menu>
          <Menu
            onClick={() => handleFilterClick("BEACH_ISLAND")}
            style={{
              opacity: isFilterSelected("BEACH_ISLAND") ? 1 : 0.5,
            }}
          >
            🌊️ 바다 / 섬
          </Menu>
          <Menu
            onClick={() => handleFilterClick("GARDEN")}
            style={{
              opacity: isFilterSelected("GARDEN") ? 1 : 0.5,
            }}
          >
            🪴 정원 / 수목원
          </Menu>
          <Menu
            onClick={() => handleFilterClick("TRAIL")}
            style={{
              opacity: isFilterSelected("TRAIL") ? 1 : 0.5,
            }}
          >
            🍃 산책 / 탐방로
          </Menu>
          <Menu
            onClick={() => handleFilterClick("WATERFALL")}
            style={{
              opacity: isFilterSelected("WATERFALL") ? 1 : 0.5,
            }}
          >
            💧 폭포 / 계곡
          </Menu>
          <Menu
            onClick={() => handleFilterClick("DRIVE")}
            style={{
              opacity: isFilterSelected("DRIVE") ? 1 : 0.5,
            }}
          >
            🚘 드라이브
          </Menu>
        </Box>
      </Container>
    </ModalContainer>
  );
};
export default NatureComponent;

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1); /*까만색(0,0,0) 20% 불투명도*/
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  border: none;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
`;
const Box = styled.div`
  width: 140px;
  padding: 10px 20px;
  line-height: 30px;
  font-family: "JejuGothic";
  font-size: 16px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  position: absolute;
  top: 320px;
  left: 20px;
  z-index: 999;

  span {
    vertical-align: middle;
  }
`;
const Menu = styled.div`
  color: #111;
  cursor: pointer;
  #gray {
    color: #87888d;
  }
`;
