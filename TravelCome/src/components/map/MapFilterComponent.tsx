import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ModalContainer from "../modal/ModalContainer";
import { ReactComponent as Filter } from "../../assets/map/Filter.svg";

interface ModalProps {
  onClose: () => void;
  setIsFilter: (data: string) => void;
}

const MapFilterComponent = ({ onClose, setIsFilter }: ModalProps) => {
  const navigate = useNavigate();

  // 관심사 필터창 닫기
  const handleClose = () => {
    onClose?.();
  };

  return (
    <ModalContainer>
      <Container onClick={onClose}>
        <Box
          onClick={(e: { stopPropagation: () => void }) => e.stopPropagation()}
        >
          <Menu
            onClick={() => {
              setIsFilter("관심사");
              onClose?.();
            }}
            id="gray"
          >
            <span>
              <Filter />
            </span>{" "}
            관심사
          </Menu>
          <Menu
            onClick={() => {
              setIsFilter("자연");
              onClose?.();
            }}
          >
            자연
          </Menu>
          <Menu
            onClick={() => {
              setIsFilter("지식");
              onClose?.();
            }}
          >
            지식
          </Menu>
          <Menu
            onClick={() => {
              setIsFilter("문화");
              onClose?.();
            }}
          >
            문화
          </Menu>
          <hr />
          <Menu onClick={() => navigate("/frontend/filter")}>관심사 수정</Menu>
        </Box>
      </Container>
    </ModalContainer>
  );
};
export default MapFilterComponent;

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
  width: 90px;
  height: 140px;
  padding: 5px 0;
  line-height: 24px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 14px;
  background-color: #fff;
  color: #111;
  border-radius: 16px;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
  cursor: pointer;

  span {
    vertical-align: middle;
  }
`;
const Menu = styled.div`
  color: #111;
  #gray {
    color: #87888d;
  }
`;
