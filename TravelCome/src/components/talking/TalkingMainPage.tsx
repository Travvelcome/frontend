import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { ReactComponent as TalkingBtn } from "../../assets/talking/TalkingBtn.svg";
import QuestionList from "./TalkingQuestionList1";
import { getChatTopic } from "../../api/Chat";

// 카테고리 변환 매핑 객체
const categoryMapping: Record<
  string,
  { label: string; color: string; thema: string }
> = {
  MOUNTAIN: { label: "⛰️ 산 / 오름", color: "#547853", thema: "NATURE" },
  BEACH_ISLAND: { label: "🌊️ 바다 / 섬", color: "#547853", thema: "NATURE" },
  GARDEN: { label: "🪴 정원 / 수목원", color: "#547853", thema: "NATURE" },
  TRAIL: { label: "🍃 산책 / 탐방로", color: "#547853", thema: "NATURE" },
  WATERFALL: { label: "💧 폭포 / 계곡", color: "#547853", thema: "NATURE" },
  DRIVE: { label: "🚘 드라이브", color: "#547853", thema: "NATURE" },

  HISTORY: { label: "📰 역사 / 전통", color: "#ff6b00", thema: "KNOWLEDGE" },
  ECOLOGY_SCIENCE: {
    label: "🐬 생태 / 과학",
    color: "#ff6b00",
    thema: "KNOWLEDGE",
  },
  MYTH_LEGEND: {
    label: "🐉 신화 / 전설",
    color: "#ff6b00",
    thema: "KNOWLEDGE",
  },
  STORY_FIGURES: {
    label: "🐚 이야기 / 인물",
    color: "#ff6b00",
    thema: "KNOWLEDGE",
  },

  EXHIBITION: { label: "🏛️ 전시 / 박물관", color: "#474751", thema: "CULTURE" },
  ART: { label: "🎨 예술", color: "#474751", thema: "CULTURE" },
  CRAFT_EXPERIENCE: {
    label: "🧶 공예 / 체험",
    color: "#474751",
    thema: "CULTURE",
  },
  ACTIVITY: { label: "🏄‍♂️️ 액티비티", color: "#474751", thema: "CULTURE" },
  THEME_PARK: { label: "🎟 테마파크", color: "#474751", thema: "CULTURE" },
  TASTE: { label: "☕ 맛", color: "#474751", thema: "CULTURE" },
  RELIGION: { label: "🕯️️️ 종교", color: "#474751", thema: "CULTURE" },
};

const TalkingMainPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 개인정보
  const nickname = localStorage.getItem("nickname");
  const token = localStorage.getItem("token");

  // SearchListComponent에서 보낸 state들
  const { landmarkList2 } = location.state;

  // 관심사 질문 추천 - 카테고리 api 연동
  const [topicList, setTopicList] = useState([]);
  const [title, setTitle] = useState("");
  const [landmarkId, setLandmarkId] = useState();

  useEffect(() => {
    fetchChatTopic();
  }, []);

  const fetchChatTopic = async () => {
    try {
      const response = await getChatTopic(landmarkList2.landmarkId, token);
      setTopicList(response);
      setTitle(landmarkList2.title);
      setLandmarkId(landmarkList2.landmarkId);

      console.log("관심사 질문 추천 카테고리 불러오기 :", landmarkList2.title);

      console.log("관심사 질문 추천 카테고리 불러오기 :", response);
    } catch (error) {
      console.error("관심사 질문 추천 카테고리 불러오기 오류:", error);
    }
  };

  const handleChat = async () => {
    // 대화하기 버튼 누르고 state 넘기면서 채팅페이지로 이동
    navigate("/frontend/talking/chatting", {
      state: { landmarkList2, landmarkId, title },
    });
  };

  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate("/frontend/search");
          }}
        >
          <IoIosArrowBack />
        </BackBtn>
        <Title>새로운 장소 발견!</Title>
      </TitleBox>
      <ImageBox>
        <img id="img" alt="대화하기 이미지" src={landmarkList2.imageUrl} />
      </ImageBox>
      <InfoBox>
        <InfoTitleBox>
          <InfoTitle>{landmarkList2.title}</InfoTitle>
          <InfoAddress>
            {landmarkList2.addr1} {landmarkList2.addr2}
          </InfoAddress>
          <span>
            <TalkingBtn onClick={handleChat} />
          </span>
        </InfoTitleBox>
        <InfoDetailBox>{landmarkList2.description}</InfoDetailBox>
        <InfoCategoryBox>
          {landmarkList2.categories &&
            landmarkList2.categories.map((category: string) => (
              <Category
                key={category}
                style={{
                  border: `1px solid ${categoryMapping[category].color}`,
                }}
              >
                {categoryMapping[category].label}
              </Category>
            ))}
        </InfoCategoryBox>
      </InfoBox>
      <QuestionBox>
        <QuestionTitle>{nickname}님의 취향 주제</QuestionTitle>
        <QuestionListBox>
          {topicList &&
            topicList.map((category: string) => (
              <QuestionList
                key={category}
                landmarkId={landmarkList2.landmarkId}
                title={title}
                topic={category}
                tag={categoryMapping[category].label}
                thema={categoryMapping[category].thema}
              />
            ))}
        </QuestionListBox>
      </QuestionBox>
    </Container>
  );
};
export default TalkingMainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #ff6b00;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 150px;
  height: 25px;
  line-height: 20px;
  font-size: 20px;
  color: #ff6b00;
  margin: 0px auto;
  padding-bottom: 10px;
  text-align: center;
`;
const ImageBox = styled.div`
  width: 100vw;
  height: 180px;
  background-color: #d9d9d9;

  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
  //border: 1px solid #000;
`;
const InfoTitleBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 0px 25px;
  padding-bottom: 10px;

  span {
    position: absolute;
    top: 0px;
    right: 10px;
    cursor: pointer;
  }
`;
const InfoTitle = styled.div`
  font-family: "SanTokki";
  font-size: 34px;
  margin: 10px 0;
`;
const InfoAddress = styled.div`
  font-size: 12px;
  color: #87888d;
`;
const InfoDetailBox = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  position: relative;
  padding: 10px 15px;
  //border: 1px solid #000;
`;
const InfoCategoryBox = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  position: relative;
  padding: 10px 15px;
  //border: 1px solid #000;
`;
const Category = styled.span`
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 18px;
  padding: 4px 5px;
  margin: 5px 3px;
  //border: 1px solid #111;
  border-radius: 15px;
  display: inline-block;
`;

const QuestionBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
`;
const QuestionTitle = styled.div`
  font-family: "SanTokki";
  font-size: 18px;
  margin: 10px 0;
`;
const QuestionListBox = styled.div`
  width: 100%;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;
