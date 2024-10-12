import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getLandmarkFind, postLandmarkFind } from "../../api/Landmark";

// 카테고리 변환 매핑 객체
const categoryMapping: Record<string, { label: string; color: string }> = {
  MOUNTAIN: { label: "⛰️ 산 / 오름", color: "#547853" },
  BEACH_ISLAND: { label: "🌊️ 바다 / 섬", color: "#547853" },
  GARDEN: { label: "🪴 정원 / 수목원", color: "#547853" },
  TRAIL: { label: "🍃 산책 / 탐방로", color: "#547853" },
  WATERFALL: { label: "💧 폭포 / 계곡", color: "#547853" },
  DRIVE: { label: "🚘 드라이브", color: "#547853" },

  HISTORY: { label: "📰 역사 / 전통", color: "#ff6b00" },
  ECOLOGY_SCIENCE: { label: "🐬 생태 / 과학", color: "#ff6b00" },
  MYTH_LEGEND: { label: "🐉 신화 / 전설", color: "#ff6b00" },
  STORY_FIGURES: { label: "🐚 이야기 / 인물", color: "#ff6b00" },

  EXHIBITION: { label: "🏛️ 전시 / 박물관", color: "#474751" },
  ART: { label: "🎨 예술", color: "#474751" },
  CRAFT_EXPERIENCE: { label: "🧶 공예 / 체험", color: "#474751" },
  ACTIVITY: { label: "🏄‍♂️️ 액티비티", color: "#474751" },
  THEME_PARK: { label: "🎟 테마파크", color: "#474751" },
  TASTE: { label: "☕ 맛", color: "#474751" },
  RELIGION: { label: "🕯️️️ 종교", color: "#474751" },
};

interface DataItem {
  landmarkId: number;
  title: string;
  description: string;
  categories: string[];
  imageUrl: string;
}

const SearchListComponent = ({
  landmarkId,
  title,
  description,
  categories,
  imageUrl,
}: DataItem) => {
  const navigate = useNavigate();

  // 토큰 가져오기
  const token = localStorage.getItem("token");

  // API 연동
  const [landmarkList, setLandmarkList] = useState([]);
  const [landmarkList2, setLandmarkList2] = useState([]);

  // 랜드마크 발견하기 & 발견하기 페이지 조회 api 연동
  const handleFindButton = async () => {
    //랜드마크 발견하기 api

    try {
      const response = await postLandmarkFind(landmarkId, token);
      setLandmarkList(response.result);
      console.log("랜드마크 발견하기:", response.result);
    } catch (error) {
      console.error("랜드마크 발견하기 오류:", error);
    }

    //랜드마크 발견하기 페이지 조회 api
    try {
      const response = await getLandmarkFind(landmarkId);
      setLandmarkList2(response.result);

      console.log("랜드마크 발견하기 페이지:", response.result);

      // 랜드마크 발견 후 대화하기 페이지로 이동
      navigate("/frontend/talking", {
        state: { landmarkList2: response.result },
      });
    } catch (error) {
      console.error("랜드마크 발견하기 페이지 오류:", error);
    }
  };

  return (
    <>
      <Container
        onClick={() => {
          handleFindButton();
        }}
      >
        <Image
          id="roadview
          "
        >
          <img alt="관광지 이미지" id="img" src={imageUrl} />
        </Image>
        <TextBox>
          <BigText>{title}</BigText>
          <SmallText>{description}</SmallText>
          <CategoryBox>
            {categories &&
              categories.map((category) => (
                <Filter
                  key={category}
                  style={{
                    border: `1px solid ${categoryMapping[category].color}`,
                  }}
                >
                  {categoryMapping[category].label}
                </Filter>
              ))}
          </CategoryBox>
        </TextBox>
      </Container>
      <hr />
    </>
  );
};
export default SearchListComponent;

const Container = styled.div`
  cursor: pointer;
  width: 100hw;
  margin: auto 0;
  position: relative;
  padding: 10px 0;
`;
const Image = styled.div`
  width: 70px;
  height: 70px;
  background-color: #d9d9d9;
  border-radius: 50%;

  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;
const TextBox = styled.div`
  position: absolute;
  top: 10px;
  left: 80px;
`;
const BigText = styled.div`
  display: inline-block;
  font-size: 19px;
`;
const SmallText = styled.div`
  margin-top: 9px;
  color: #929292;
  font-size: 13px;
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CategoryBox = styled.div`
  margin-top: 8px;
  font-size: 15px;
`;
const Filter = styled.span`
  font-family: "JejuGothic";
  font-size: 8px;
  height: 18px;
  line-height: 18px;
  padding: 0 7px;
  margin: 5px 3px;
  border: 1px solid #547853;
  border-radius: 4px;
  display: inline-block;
  cursor: pointer;
`;
