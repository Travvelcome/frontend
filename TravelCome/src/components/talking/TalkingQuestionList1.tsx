import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { postChatTopic } from "../../api/Chat";
import { useNavigate, useLocation } from "react-router-dom";

interface DataItem {
  landmarkId: number;
  title: string;
  topic: string;
  tag: string;
  thema: string;
}

const TalkingQuestionList1 = ({
  landmarkId,
  title,
  topic,
  tag,
  thema,
}: DataItem) => {
  const navigate = useNavigate();
  const location = useLocation();

  // SearchListComponent에서 보낸 state들
  const { landmarkList2 } = location.state;

  // 개인정보
  const token = localStorage.getItem("token");

  // 관심사 질문 대화하기 api 연동
  const [chatList, setChatList] = useState([]);

  const handleChatTopic = async () => {
    try {
      const response = await postChatTopic(landmarkId, token, topic);
      setChatList(response);
      console.log("관심사 질문하기 :", response);

      // 대화하기 버튼 누르고 state 넘기면서 채팅페이지로 이동
      navigate("/frontend/talking/chatting", {
        state: {
          landmarkList2,
          chatList: response,
          landmarkId,
          title,
          topic,
          tag,
        },
      });
    } catch (error) {
      console.error("관심사 질문하기 오류:", error);
    }
  };

  return (
    <RecommendBox thema={thema}>
      <Title>
        {title}의<br /> {tag.slice(3)}에 대한
      </Title>
      <SmallTitle>자세한 설명을 부탁해!</SmallTitle>
      <TalkingBtn
        thema={thema}
        onClick={() => {
          //window.location.href = "/frontend/talking/chatting";
          handleChatTopic();
        }}
      >
        대화하기
      </TalkingBtn>
    </RecommendBox>
  );
};
export default TalkingQuestionList1;

const RecommendBox = styled.div<{ thema: string }>`
  white-space: normal;
  width: 120px;
  height: 120px;
  margin: 0px 5px;
  display: inline-block;
  border-radius: 10px;
  padding: 20px;
  background-color: ${(props) =>
    props.thema === "NATURE"
      ? "rgb(84, 120, 83, 0.5)"
      : props.thema === "KNOWLEDGE"
      ? "rgb(255, 107, 0, 0.5)"
      : "rgb(135, 136, 141, 0.5)"};
`;
const Title = styled.div`
  font-family: "Santokki";
  text-align: right;
  font-size: 16px;
  margin-bottom: 15px;
  line-height: 22px;
`;
const SmallTitle = styled.div`
  font-family: "JejuGothic";
  font-size: 12px;
  margin: 10px 0;
`;
const TalkingBtn = styled.div<{ thema: string }>`
  width: 105px;
  height: 25px;
  line-height: 25px;
  background-color: #fff;
  color: ${(props) =>
    props.thema === "NATURE"
      ? "rgb(84, 120, 83)"
      : props.thema === "KNOWLEDGE"
      ? "rgb(255, 107, 0)"
      : "rgb(135, 136, 141)"};
  font-family: "JejuGothic";
  font-size: 13px;
  border-radius: 30px;
  cursor: pointer;
  margin: 0 auto;
  text-align: center;
  margin-top: 25px;
`;
