import React, { useEffect } from "react";
import styled from "styled-components";

const LandingComponent = ({ isSelected, onClick }) => {
  return (
    <>
      <Filter isSelected={isSelected} onClick={onClick}>
        <TagBox>
          <Icon>⛰️</Icon>
          <Name>산 / 오름</Name>
        </TagBox>
      </Filter>
    </>
  );
};
export default LandingComponent;

const Filter = styled.div`
  width: 110px;
  height: 110px;
  background-color: ${(props) =>
    props.isSelected ? "rgb(255, 255, 255)" : "rgb(255, 255, 255, 0.5)"};
  border-radius: 50%;
  display: inline-block;
  margin: 0 15px;

  font-family: "JejuGothic";
  font-size: 16px;
  line-height: 16px;
  margin-top: 0px;
  text-align: center;
`;
const TagBox = styled.div`
  margin: 20px 0;
`;
const Icon = styled.div`
  font-size: 34px;
  line-height: 34px;
`;
const Name = styled.div`
  font-size: 16px;
  line-height: 34px;
`;
