import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import LandingComponent from "./LandingComponent";
import { postInterest } from "../../api/Interest";

// 카테고리 변환 매핑 객체
const categoryMapping: Record<string, string> = {
  MOUNTAIN: "산 / 오름",
  BEACH_ISLAND: "바다 / 섬",
  GARDEN: "정원 / 수목원",
  TRAIL: "산책 / 탐방로",
  WATERFALL: "폭포 / 계곡",
  DRIVE: "드라이브",

  HISTORY: "역사 / 전통",
  ECOLOGY_SCIENCE: "생태 / 과학",
  MYTH_LEGEND: "신화 / 전설",
  STORY_FIGURES: "이야기 / 인물",

  EXHIBITION: "전시 / 박물관",
  ART: "예술",
  CRAFT_EXPERIENCE: "공예 / 체험",
  ACTIVITY: "액티비티",
  THEME_PARK: "테마파크",
  TASTE: "맛",
  RELIGION: "종교",
};

const LandingFilterPage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleMain = () => {
    window.location.href = "/frontend/main";
  };

  //필터 클릭
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터들 상태 관리

  // Request Body - 카테고리 배열 관리
  const [categories, setCategories] = useState<string[]>([]);

  // 필터 클릭 시 상태 업데이트 함수
  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      // 이미 선택된 필터면 선택 해제
      setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    } else {
      // 선택되지 않은 필터면 추가
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  // 필터가 선택되었는지 확인하는 함수
  const isFilterSelected = (filter: string) => selectedFilters.includes(filter);

  // 최초 관심사 등록 api 연동(완료)
  const handleInterestBtn = async () => {
    // 카테고리 변환 함수
    const translatedCategories = selectedFilters.map((category) => {
      // categoryMapping에서 값과 일치하는 키를 찾기
      const matchedEntry = Object.entries(categoryMapping).find(
        ([key, value]) => value === category
      );

      if (matchedEntry) {
        const [key] = matchedEntry;
        return { category: key };
      } else {
        // 매핑되지 않는 경우
      }
    });

    try {
      const response = await postInterest(token, translatedCategories);
      console.log(translatedCategories);
      setCategories(response);
      console.log("최초 관심사 등록하기 :", response);
    } catch (error) {
      console.error("최초 관심사 등록하기 오류:", error);
    }
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
        <CategoryBox>
          <LandingComponent
            icon="⛰️"
            name="산 / 오름"
            onClick={() => handleFilterClick("산 / 오름")}
            isFilterSelected={isFilterSelected("산 / 오름")} // 선택 상태 전달
          />
          <LandingComponent
            icon="🌊️"
            name="바다 / 섬"
            onClick={() => handleFilterClick("바다 / 섬")}
            isFilterSelected={isFilterSelected("바다 / 섬")}
          />
          <LandingComponent
            icon="🪴"
            name="정원 / 수목원"
            onClick={() => handleFilterClick("정원 / 수목원")}
            isFilterSelected={isFilterSelected("정원 / 수목원")}
          />
          <LandingComponent
            icon="🍃"
            name="산책 / 탐방로"
            onClick={() => handleFilterClick("산책 / 탐방로")}
            isFilterSelected={isFilterSelected("산책 / 탐방로")}
          />
          <LandingComponent
            icon="💧"
            name="폭포 / 계곡"
            onClick={() => handleFilterClick("폭포 / 계곡")}
            isFilterSelected={isFilterSelected("폭포 / 계곡")}
          />
          <LandingComponent
            icon="🚘"
            name="드라이브"
            onClick={() => handleFilterClick("드라이브")}
            isFilterSelected={isFilterSelected("드라이브")}
          />
        </CategoryBox>
        <CategoryBox>
          <LandingComponent
            icon="📰"
            name="역사 / 전통"
            onClick={() => handleFilterClick("역사 / 전통")}
            isFilterSelected={isFilterSelected("역사 / 전통")}
          />
          <LandingComponent
            icon="🐬"
            name="생태 / 과학"
            onClick={() => handleFilterClick("생태 / 과학")}
            isFilterSelected={isFilterSelected("생태 / 과학")}
          />
          <LandingComponent
            icon="🐉"
            name="신화 / 전설"
            onClick={() => handleFilterClick("신화 / 전설")}
            isFilterSelected={isFilterSelected("신화 / 전설")}
          />
          <LandingComponent
            icon="🐚"
            name="이야기 / 인물"
            onClick={() => handleFilterClick("이야기 / 인물")}
            isFilterSelected={isFilterSelected("이야기 / 인물")}
          />
        </CategoryBox>
        <CategoryBox>
          <LandingComponent
            icon="🏛️"
            name="전시 / 박물관"
            onClick={() => handleFilterClick("전시 / 박물관")}
            isFilterSelected={isFilterSelected("전시 / 박물관")}
          />
          <LandingComponent
            icon="🎨"
            name="예술"
            onClick={() => handleFilterClick("예술")}
            isFilterSelected={isFilterSelected("예술")}
          />
          <LandingComponent
            icon="🧶"
            name="공예 / 체험"
            onClick={() => handleFilterClick("공예 / 체험")}
            isFilterSelected={isFilterSelected("공예 / 체험")}
          />
          <LandingComponent
            icon="🏄‍♂️️"
            name="액티비티"
            onClick={() => handleFilterClick("액티비티")}
            isFilterSelected={isFilterSelected("액티비티")}
          />
          <LandingComponent
            icon="🎟"
            name="테마파크"
            onClick={() => handleFilterClick("테마파크")}
            isFilterSelected={isFilterSelected("테마파크")}
          />
          <LandingComponent
            icon="☕"
            name="맛"
            onClick={() => handleFilterClick("맛")}
            isFilterSelected={isFilterSelected("맛")}
          />
          <LandingComponent
            icon="🕯️"
            name="종교"
            onClick={() => handleFilterClick("종교")}
            isFilterSelected={isFilterSelected("종교")}
          />
        </CategoryBox>
      </FilterBox>
      <CompleteBox>
        <Notice>나중에 설정에서 다시 선택할 수 있어요 :{")"}</Notice>
        <CompleteBtn
          onClick={() => {
            handleMain();
            handleInterestBtn();
          }}
        >
          완료
        </CompleteBtn>
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

  &:hover {
    background-color: #1b273f;
    box-shadow: 0px 15px 20px rgba(27, 39, 63, 0.4);
    color: whitesmoke;
    transform: translateY(-5px);
  }
`;
