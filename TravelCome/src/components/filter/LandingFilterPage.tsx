import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import LandingComponent from "./LandingComponent";

const LandingFilterPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    window.location.href = "/frontend/main";
  };

  // 관심사 선택 항목 상태 배열
  const [selectedItems, setSelectedItems] = useState<boolean[]>(
    Array(12).fill(false) // 총 12개의 LandingComponent가 있다고 가정
  );

  // 관심사 선택 항목을 선택/해제하는 함수
  const toggleSelection = (index: number) => {
    setSelectedItems((prevSelected) => {
      const updatedSelection = [...prevSelected];
      updatedSelection[index] = !updatedSelection[index]; // 선택 상태를 토글
      return updatedSelection;
    });
  };

  return (
    <Container>
      <MessageBox>
        <BackBtn
          onClick={() => {
            navigate("/frontend");
          }}
        >
          <IoIosArrowBack />
        </BackBtn>
        <BigMessage>관심 있는 주제를 골라보아요!</BigMessage>
        <SmallMessage>
          관심있는 주제를 3개 이상 선택하시면
          <br />
          혼자서도 심심하지 않은 여행을 만들어 드릴게요.
        </SmallMessage>
      </MessageBox>
      <FilterBox>
        {/* 12개의 컴포넌트를 3줄로 나누어 렌더링 */}
        {[0, 1, 2].map((rowIndex) => (
          <CategoryBox key={rowIndex}>
            {Array(4)
              .fill(0)
              .map((_, colIndex) => {
                const index = rowIndex * 4 + colIndex;
                return (
                  <LandingComponent
                    key={index}
                    isSelected={selectedItems[index]} // 선택 상태 전달
                    onClick={() => toggleSelection(index)} // 클릭 이벤트 처리
                  />
                );
              })}
          </CategoryBox>
        ))}
      </FilterBox>
      <CompleteBox>
        <Notice>나중에 설정에서 다시 선택할 수 있어요 :{")"}</Notice>
        <CompleteBtn onClick={handleLogin}>완료</CompleteBtn>
      </CompleteBox>
    </Container>
  );
};
export default LandingFilterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fdac01;
  position: relative;
`;
const MessageBox = styled.div`
  padding-top: 80px;
  width: 320px;
  text-align: center;
  margin: 0 auto;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #474751;
  position: absolute;
  top: 20px;
  left: 15px;
  z-index: 999;
  cursor: pointer;
`;
const BigMessage = styled.div`
  font-family: "SanTokki";
  font-size: 28px;
  margin-bottom: 20px;
  color: #fff;
`;
const SmallMessage = styled.div`
  font-family: "JejuGothic";
  font-size: 12px;
  line-height: 30px;
  color: #474751;
`;
const FilterBox = styled.div`
  width: 100vw;
  margin: 50px 0;
  //border: 1px solid #111;
`;
const CategoryBox = styled.div`
  width: 100vw;
  text-align: center;
  margin: 35px auto;
  overflow: auto;
  white-space: nowrap;
  //border: 1px solid #111;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const CompleteBox = styled.div`
  width: 100vw;
  text-align: center;
  margin: 0 auto;
  position: absolute;
  bottom: 30px;
`;
const Notice = styled.div`
  font-family: "JejuGothic";
  font-size: 10px;
  color: rgb(135, 136, 141, 0.5);
`;
const CompleteBtn = styled.div`
  width: 364px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 17px;
  background-color: rgb(135, 136, 141, 0.5);
  color: #fff;
  border-radius: 30px;
  margin: 0 auto;
  margin-top: 10px;
  z-index: 999;
  cursor: pointer;
`;
