import React from "react";
import { PuffLoader } from "react-spinners";
import styled from "styled-components";

const LoadingTalking = () => {
  return (
    <LodingBox>
      <PuffLoader color="#fff" loading={true} size={130} />
    </LodingBox>
  );
};

export default LoadingTalking;

const LodingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 33px;
  left: 0;
  width: 100%;
  height: 130px;
  z-index: 9;
`;
