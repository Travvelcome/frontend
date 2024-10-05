import React, { useEffect } from "react";
import styled from "styled-components";

const StampVoucherComponent = () => {
  return (
    <>
      <Container>
        <Image
          id="roadview
          "
        >
          <img id="images" />
        </Image>
        <TextBox>
          <BigText>**식당</BigText>
          <SmallText>제철메뉴 주문시 10% 할인 </SmallText>
          <ChoiceBtn>선택</ChoiceBtn>
        </TextBox>
      </Container>
    </>
  );
};
export default StampVoucherComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  position: relative;
  padding: 10px 0;
`;
const Image = styled.div`
  width: 139px;
  height: 89px;
  background-color: #d9d9d9;
  border-radius: 4px;
`;
const TextBox = styled.div`
  font-family: "JejuGothic";
  position: absolute;
  top: 10px;
  left: 155px;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 17px;
  margin-top: 5px;
`;
const SmallText = styled.div`
  margin-top: 10px;
  color: #474751;
  font-size: 15px;
`;
const ChoiceBtn = styled.div`
  width: 64px;
  height: 24px;
  border: 1px solid #000;
  border-radius: 64px;
  font-size: 12px;
  line-height: 24px;
  text-align: center;
  margin-top: 12px;
`;
