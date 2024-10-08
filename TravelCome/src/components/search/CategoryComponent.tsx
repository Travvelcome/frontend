import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import { ReactComponent as Filter } from "../../assets/map/Filter.svg";

interface ModalProps {
  onClose: () => void;
}

const CategoryComponent = ({ onClose }: ModalProps) => {
  // 관심사 필터창 닫기
  const handleClose = () => {
    onClose?.();
  };

  //필터 클릭
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터들 상태 관리

  // 필터 클릭 시 상태 업데이트 함수
  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      // 이미 선택된 필터면 선택 해제
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      // 선택되지 않은 필터면 추가
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // 필터가 선택되었는지 확인하는 함수
  const isFilterSelected = (filter: string) => selectedFilters.includes(filter);

  return (
    <ModalContainer>
      <Container onClick={onClose}>
        <Box
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <Menu>전체</Menu>
          <hr />
          <Menu
            onClick={() => handleFilterClick("산 / 오름")}
            style={{
              opacity: isFilterSelected("산 / 오름") ? 1 : 0.5,
            }}
          >
            ⛰️ 산 / 오름
          </Menu>
          <Menu
            onClick={() => handleFilterClick("바다 / 섬")}
            style={{
              opacity: isFilterSelected("바다 / 섬") ? 1 : 0.5,
            }}
          >
            🌊️ 바다 / 섬
          </Menu>
          <Menu
            onClick={() => handleFilterClick("정원 / 수목원")}
            style={{
              opacity: isFilterSelected("정원 / 수목원") ? 1 : 0.5,
            }}
          >
            🪴 정원 / 수목원
          </Menu>
          <Menu
            onClick={() => handleFilterClick("산책 / 탐방로")}
            style={{
              opacity: isFilterSelected("산책 / 탐방로") ? 1 : 0.5,
            }}
          >
            🍃 산책 / 탐방로
          </Menu>
          <Menu
            onClick={() => handleFilterClick("폭포 / 계곡")}
            style={{
              opacity: isFilterSelected("폭포 / 계곡") ? 1 : 0.5,
            }}
          >
            💧 폭포 / 계곡
          </Menu>
          <Menu
            onClick={() => handleFilterClick("드라이브")}
            style={{
              opacity: isFilterSelected("드라이브") ? 1 : 0.5,
            }}
          >
            🚘 드라이브
          </Menu>
        </Box>
      </Container>
    </ModalContainer>
  );
};
export default CategoryComponent;

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
