import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import { ReactComponent as Filter } from "../../assets/map/Filter.svg";

interface ModalProps {
  onClose: () => void;
  setSelectedTag: (data: string) => void;
}

const CultureComponent = ({ onClose, setSelectedTag }: ModalProps) => {
  // 관심사 태그창 닫기
  const handleClose = () => {
    onClose?.();
  };

  // 관심사 태그 선택
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); // 하나의 필터만 선택하도록 상태 관리

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
            onClick={() => handleFilterClick("EXHIBITION")}
            style={{
              opacity: isFilterSelected("EXHIBITION") ? 1 : 0.5,
            }}
          >
            🏛️ 전시 / 박물관
          </Menu>
          <Menu
            onClick={() => handleFilterClick("ART")}
            style={{
              opacity: isFilterSelected("ART") ? 1 : 0.5,
            }}
          >
            🎨 예술
          </Menu>
          <Menu
            onClick={() => handleFilterClick("CRAFT_EXPERIENCE")}
            style={{
              opacity: isFilterSelected("CRAFT_EXPERIENCE") ? 1 : 0.5,
            }}
          >
            🧶 공예 / 체험
          </Menu>
          <Menu
            onClick={() => handleFilterClick("ACTIVITY")}
            style={{
              opacity: isFilterSelected("ACTIVITY") ? 1 : 0.5,
            }}
          >
            🏄‍♂️️ 액티비티
          </Menu>
          <Menu
            onClick={() => handleFilterClick("THEME_PARK")}
            style={{
              opacity: isFilterSelected("THEME_PARK") ? 1 : 0.5,
            }}
          >
            🎟 테마파크
          </Menu>
          <Menu
            onClick={() => handleFilterClick("TASTE")}
            style={{
              opacity: isFilterSelected("TASTE") ? 1 : 0.5,
            }}
          >
            ☕ 맛
          </Menu>
          <Menu
            onClick={() => handleFilterClick("RELIGION")}
            style={{
              opacity: isFilterSelected("RELIGION") ? 1 : 0.5,
            }}
          >
            🕯️️️ 종교
          </Menu>
        </Box>
      </Container>
    </ModalContainer>
  );
};
export default CultureComponent;

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
