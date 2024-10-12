import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getMyPageStamp } from "../../api/MyPage";
import { ReactComponent as FrequencyIcon } from "../../assets/common/Stamp.svg";
import { ReactComponent as Arrow } from "../../assets/common/Arrow.svg";

const StampComponent = () => {
  const navigate = useNavigate();

  // token 가져오기
  const token = localStorage.getItem("token");

  // 스탬프 개수 조회 api 연동
  const [stampCount, setStampCount] = useState<number>(0);

  useEffect(() => {
    fetchStamp();
  }, []);
  const fetchStamp = async () => {
    try {
      const response = await getMyPageStamp(token);
      setStampCount(response.result);

      console.log("스탬프 개수 불러오기 :", stampCount);
    } catch (error) {
      console.error("스탬프 개수 불러오기 오류:", error);
    }
  };

  // 스탬프 개수에 따라 Bar 길이 조절
  const getWidthStamp = (stampCount: number) => {
    return stampCount * 18; // 퍼센트로 변환
  };

  return (
    <StampBox
      onClick={() => {
        window.location.href = "/frontend/stamp";
      }}
    >
      <span id="icon">
        <FrequencyIcon />
      </span>
      <Score>
        {stampCount} <span>/ 12</span>
      </Score>
      <span id="arrow">
        <Arrow />
      </span>
      <Bar1></Bar1>
      <Bar2 widthPercentage={getWidthStamp(stampCount)}></Bar2>
    </StampBox>
  );
};
export default StampComponent;

const StampBox = styled.div`
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
  width: 50px;
  text-align: center;
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
    left: 40px;
  }
`;
const Bar1 = styled.div`
  width: 216px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
  opacity: 0.5;
`;
const Bar2 = styled.div<{ widthPercentage: number }>`
  width: ${(props) => props.widthPercentage}px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
`;
