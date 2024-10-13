import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Information } from "../../assets/stamp/Information.svg";
import { ReactComponent as Background } from "../../assets/stamp/Background.svg";
import { ReactComponent as OrangeColor } from "../../assets/stamp/OrangeColor.svg";
import { ReactComponent as OrangeGray } from "../../assets/stamp/OrangeGray.svg";
import StampInfoModal from "./StampInfoModal";
import StampVoucherComponent from "./StampVoucherComponent";
import { getMyPageStamp } from "../../api/MyPage";
import Img1 from "../../assets/stamp/Voucher1.png";
import Img2 from "../../assets/stamp/Voucher2.png";
import Img3 from "../../assets/stamp/Voucher3.png";

const StampPage = () => {
  // 모달창
  const [isOpen, setIsOpen] = useState(false);

  const InfoButton = () => {
    setIsOpen(true);
  };

  // token 가져오기
  const token = localStorage.getItem("token");

  // 스탬프 개수 조회 api 연동(완료)
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
    return stampCount * 26; // 퍼센트로 변환
  };

  return (
    <Container>
      <TitleBox>
        <Title>9월의 스탬프</Title>
      </TitleBox>
      <StampCountBox>
        <Score>
          {stampCount} <span> / 12</span>
        </Score>
        <Bar1 />
        <Bar2 widthPercentage={getWidthStamp(stampCount)} />
        <span id="info" onClick={() => InfoButton()}>
          <Information />
        </span>
      </StampCountBox>
      <StampBox>
        <StampListBox>
          {Array.from({ length: 12 }, (_, index) => (
            <div key={index}>
              {index < stampCount ? <OrangeColor /> : <OrangeGray />}
            </div>
          ))}
        </StampListBox>
        <span id="back">
          <Background />
        </span>
      </StampBox>
      <VoucherBtn
        style={{
          backgroundColor: stampCount >= 12 ? "#547853" : "#87888d",
        }}
      >
        내 바우처 확인
      </VoucherBtn>
      <VoucherBox>
        <TapBox>
          <VoucherTap1>선택 가능한 바우처</VoucherTap1>
          <VoucherTap2>이달의 프로모션</VoucherTap2>
        </TapBox>
        <VoucherListBox>
          <StampVoucherComponent
            title="**식당"
            text="제철메뉴 주문시 10% 할인"
            img={Img1}
          />
          <StampVoucherComponent
            title="**스테이"
            text="숙박권 5% 할인"
            img={Img2}
          />
          <StampVoucherComponent
            title="**농장"
            text="유자 디저트 만들기 체험 10% 할인"
            img={Img3}
          />
        </VoucherListBox>
      </VoucherBox>
      {isOpen && (
        <StampInfoModal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Container>
  );
};
export default StampPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-bottom: 70px;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
`;
const Title = styled.div`
  font-size: 34px;
  color: #ff6b00;
  padding-left: 15px;
  padding-top: 20px;
`;

const StampCountBox = styled.div`
  width: 85%;
  height: 80px;
  margin: 0px auto;
  margin-bottom: 30px;
  position: relative;
  #info {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
`;
const Score = styled.div`
  width: 50px;
  text-align: center;
  color: #000;
  font-family: "SanTokki";
  font-size: 34px;
  span {
    width: 40px;
    font-size: 24px;
    color: #547853;
    margin-left: 10px;
    position: absolute;
    top: 8px;
    left: 40px;
  }
`;
const Bar1 = styled.div`
  width: 312px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: #547853;
  opacity: 0.5;
`;
const Bar2 = styled.div<{ widthPercentage: number }>`
  width: ${(props) => props.widthPercentage}px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: #547853;
`;

const StampBox = styled.div`
  width: 85%;
  height: 310px;
  margin: 0px auto;
  padding-top: 10px;
  background-color: #f3f3f4;
  position: relative;

  #back {
    position: absolute;
    bottom: 0px;
    left: 0px;
  }
`;
const StampListBox = styled.div`
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4열로 설정
  grid-gap: 8px;
  grid-row-gap: 30px;
  justify-items: center;
`;

const VoucherBtn = styled.div`
  width: 210px;
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 14px;
  background-color: #87888d;
  color: #fff;
  border-radius: 50px;
  margin: 30px auto;
  cursor: pointer;
`;
const TapBox = styled.div`
  border-bottom: 2px solid #87888d;
`;
const VoucherTap1 = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  color: #ff6b00;
  margin: 0px 10px;
  padding: 5px;
  border-bottom: 3px solid #ff6b00;
  display: inline-block;
`;
const VoucherTap2 = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  color: #87888d;
  margin: 0px 10px;
  padding: 5px;
  //border-bottom: 2px solid #ff6b00;
  display: inline-block;
`;
const VoucherBox = styled.div`
  position: relative;
  margin: 20px;
  margin-top: 40px;
`;
const VoucherListBox = styled.div`
  margin-top: 10px;
  padding-bottom: 90px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;
