import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiWalk } from "react-icons/bi";

interface DataItem {
  landmarkId: number;
  title: string;
  categories: string[];
  imageUrl: string;
  distance: number;
}

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

const RecommendList = ({
  landmarkId,
  title,
  categories,
  imageUrl,
  distance,
}: DataItem) => {
  return (
    <Container
      onClick={() => {
        window.location.href = "/frontend/search";
      }}
    >
      <Image>
        <img id="img" alt="추천 이미지" src={imageUrl} />
        <CategoryBox>
          {categories &&
            categories.map((category) => (
              <Category
                key={category}
                style={{
                  backgroundColor: `${categoryMapping[category].color}`,
                }}
              ></Category>
            ))}
        </CategoryBox>
      </Image>

      <DesciptionBox>
        <Name>{title}</Name>
        <Minute>
          <span>
            <BiWalk />
          </span>{" "}
          15분
        </Minute>
        <Price>\ 무료</Price>
      </DesciptionBox>
    </Container>
  );
};
export default RecommendList;

const Container = styled.div`
  width: 130px;
  height: 240px;
  margin: 10px 10px;
  display: inline-block;
  cursor: pointer;
`;
const Image = styled.div`
  background-color: #999;
  width: 130px;
  height: 180px;
  border-top-right-radius: 75px;
  border-top-left-radius: 75px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  line-height: 30px;
  position: relative;

  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-right-radius: 75px;
    border-top-left-radius: 75px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;
const CategoryBox = styled.div`
  position: absolute;
  bottom: -18px;
  left: 50px;
`;
const Category = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #fff;
  border-radius: 50%;
  margin: 0px -5px;
  display: inline-block;
`;
const DesciptionBox = styled.div`
  text-align: center;
  position: relative;
  margin-top: 10px;
`;
const Name = styled.div`
  font-family: "Santokki";
  font-size: 16px;
`;
const Minute = styled.div`
  font-family: "JejuGothic";
  font-size: 13px;
  line-height: 15px;
  position: absolute;
  left: 10px;
  span {
    font-size: 12px;
  }
`;
const Price = styled.div`
  font-family: "JejuGothic";
  font-size: 13px;
  position: absolute;
  right: 10px;
`;
