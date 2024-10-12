import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { getInterest } from "../../api/Interest";
import { putMyPageInterest } from "../../api/MyPage";

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
type CategoryItem = {
  tag: string;
  category: string;
};

const FilterPage = () => {
  const navigate = useNavigate();

  // 토큰 가져오기
  const token = localStorage.getItem("token");

  //필터 클릭
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]); // 선택된 필터들 상태 관리

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

  // 현재 관심사 출력 api 연동(완료)
  const [myInterest, setMyInterest] = useState<CategoryItem[]>([]);

  useEffect(() => {
    fetchMyInterest();
  }, []);

  const fetchMyInterest = async () => {
    try {
      const response = await getInterest(token);
      setMyInterest(response);

      const translated = response.map((item: any) => {
        return categoryMapping[item.category] || item.category; // 카테고리 문자열만 반환
      });
      setSelectedFilters(translated); // 변환된 카테고리를 상태에 저장
      console.log("현재 관심사 ", translated);

      console.log("현재 관심사 불러오기 :", response);
    } catch (error) {
      console.error("현재 관심사 불러오기 오류:", error);
    }
  };

  // 관심사 수정 api 연동(완료)

  // 역 매핑 객체 (한글 -> 영어)
  const reverseCategoryMapping = Object.fromEntries(
    Object.entries(categoryMapping).map(([key, value]) => [value, key])
  );

  // 선택된 필터들을 영어 카테고리로 변환하여 쿼리 스트링 생성
  const generateQueryString = () => {
    const englishCategories = selectedFilters.map(
      (filter) => reverseCategoryMapping[filter]
    );
    const queryString = englishCategories
      .map((cat) => `categories=${cat}`)
      .join("&");
    return `${queryString}`;
  };

  const handleMyInterest = async () => {
    const categories = generateQueryString();
    try {
      const response = await putMyPageInterest(categories, token);

      console.log("관심사 수정하기 :", response);
    } catch (error) {
      console.error("관심사 수정하기 오류:", error);
    }
  };

  return (
    <Container>
      <TitleBox>
        <BackBtn
          onClick={() => {
            navigate(-1);
            handleMyInterest();
          }}
        >
          <IoClose />
        </BackBtn>
        <Title>관심사 수정</Title>
      </TitleBox>
      <FilterBox>
        <NatureBox>
          <Nature>
            <div></div>자연
          </Nature>
          <Filter
            onClick={() => handleFilterClick("산 / 오름")}
            style={{
              backgroundColor: isFilterSelected("산 / 오름")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("산 / 오름") ? "#547853" : "#000",
            }}
          >
            ⛰️ 산 / 오름
          </Filter>
          <Filter
            onClick={() => handleFilterClick("바다 / 섬")}
            style={{
              backgroundColor: isFilterSelected("바다 / 섬")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("바다 / 섬") ? "#547853" : "#000",
            }}
          >
            🌊️ 바다 / 섬
          </Filter>
          <Filter
            onClick={() => handleFilterClick("정원 / 수목원")}
            style={{
              backgroundColor: isFilterSelected("정원 / 수목원")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("정원 / 수목원")
                ? "#547853"
                : "#000",
            }}
          >
            🪴 정원 / 수목원
          </Filter>
          <Filter
            onClick={() => handleFilterClick("산책 / 탐방로")}
            style={{
              backgroundColor: isFilterSelected("산책 / 탐방로")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("산책 / 탐방로")
                ? "#547853"
                : "#000",
            }}
          >
            🍃 산책 / 탐방로
          </Filter>
          <Filter
            onClick={() => handleFilterClick("폭포 / 계곡")}
            style={{
              backgroundColor: isFilterSelected("폭포 / 계곡")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("폭포 / 계곡") ? "#547853" : "#000",
            }}
          >
            💧 폭포 / 계곡
          </Filter>
          <Filter
            onClick={() => handleFilterClick("드라이브")}
            style={{
              backgroundColor: isFilterSelected("드라이브")
                ? "#547853"
                : "#fff",
              borderColor: isFilterSelected("드라이브") ? "#547853" : "#000",
            }}
          >
            🚘 드라이브
          </Filter>
        </NatureBox>
        <KnowledgeBox>
          <Knowledge>
            <div></div>지식
          </Knowledge>
          <Filter
            onClick={() => handleFilterClick("역사 / 전통")}
            style={{
              backgroundColor: isFilterSelected("역사 / 전통")
                ? "#FF6B00"
                : "#fff",
              borderColor: isFilterSelected("역사 / 전통") ? "#FF6B00" : "#000",
            }}
          >
            📰 역사 / 전통
          </Filter>
          <Filter
            onClick={() => handleFilterClick("생태 / 과학")}
            style={{
              backgroundColor: isFilterSelected("생태 / 과학")
                ? "#FF6B00"
                : "#fff",
              borderColor: isFilterSelected("생태 / 과학") ? "#FF6B00" : "#000",
            }}
          >
            🐬 생태 / 과학
          </Filter>
          <Filter
            onClick={() => handleFilterClick("신화 / 전설")}
            style={{
              backgroundColor: isFilterSelected("신화 / 전설")
                ? "#FF6B00"
                : "#fff",
              borderColor: isFilterSelected("신화 / 전설") ? "#FF6B00" : "#000",
            }}
          >
            🐉 신화 / 전설
          </Filter>
          <Filter
            onClick={() => handleFilterClick("이야기 / 인물")}
            style={{
              backgroundColor: isFilterSelected("이야기 / 인물")
                ? "#FF6B00"
                : "#fff",
              borderColor: isFilterSelected("이야기 / 인물")
                ? "#FF6B00"
                : "#000",
            }}
          >
            🐚 이야기 / 인물
          </Filter>
        </KnowledgeBox>
        <CultureBox>
          <Culture>
            <div></div>문화
          </Culture>
          <Filter
            onClick={() => handleFilterClick("전시 / 박물관")}
            style={{
              backgroundColor: isFilterSelected("전시 / 박물관")
                ? "#87888D"
                : "#fff",
              borderColor: isFilterSelected("전시 / 박물관")
                ? "#87888D"
                : "#000",
            }}
          >
            🏛️ 전시 / 박물관
          </Filter>
          <Filter
            onClick={() => handleFilterClick("예술")}
            style={{
              backgroundColor: isFilterSelected("예술") ? "#87888D" : "#fff",
              borderColor: isFilterSelected("예술") ? "#87888D" : "#000",
            }}
          >
            🎨 예술
          </Filter>
          <Filter
            onClick={() => handleFilterClick("공예 / 체험")}
            style={{
              backgroundColor: isFilterSelected("공예 / 체험")
                ? "#87888D"
                : "#fff",
              borderColor: isFilterSelected("공예 / 체험") ? "#87888D" : "#000",
            }}
          >
            🧶 공예 / 체험
          </Filter>
          <Filter
            onClick={() => handleFilterClick("액티비티")}
            style={{
              backgroundColor: isFilterSelected("액티비티")
                ? "#87888D"
                : "#fff",
              borderColor: isFilterSelected("액티비티") ? "#87888D" : "#000",
            }}
          >
            🏄‍♂️️ 액티비티
          </Filter>
          <Filter
            onClick={() => handleFilterClick("테마파크")}
            style={{
              backgroundColor: isFilterSelected("테마파크")
                ? "#87888D"
                : "#fff",
              borderColor: isFilterSelected("테마파크") ? "#87888D" : "#000",
            }}
          >
            🎟 테마파크
          </Filter>
          <Filter
            onClick={() => handleFilterClick("맛")}
            style={{
              backgroundColor: isFilterSelected("맛") ? "#87888D" : "#fff",
              borderColor: isFilterSelected("맛") ? "#87888D" : "#000",
            }}
          >
            ☕ 맛
          </Filter>
          <Filter
            onClick={() => handleFilterClick("종교")}
            style={{
              backgroundColor: isFilterSelected("종교") ? "#87888D" : "#fff",
              borderColor: isFilterSelected("종교") ? "#87888D" : "#000",
            }}
          >
            ️🕯️️️ 종교
          </Filter>
        </CultureBox>
      </FilterBox>
    </Container>
  );
};
export default FilterPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
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
  width: 120px;
  height: 25px;
  line-height: 25px;
  font-size: 24px;
  color: #ff6b00;
  margin: 0 auto;
  text-align: center;
`;
const FilterBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  padding: 25px;
`;
const NatureBox = styled.div`
  font-family: "JejuGothic";
  position: relative;
  margin-bottom: 50px;
`;
const Nature = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #547853;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
const Filter = styled.span`
  font-family: "JejuGothic";
  font-size: 16px;
  height: 36px;
  line-height: 36px;
  padding: 0 7px;
  margin: 5px 3px;
  border: 1px solid #111;
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
`;
const KnowledgeBox = styled.div`
  font-family: "JejuGothic";
  margin-bottom: 50px;
`;
const Knowledge = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #ff6b00;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
const CultureBox = styled.div`
  font-family: "JejuGothic";
  margin-bottom: 50px;
`;
const Culture = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  margin-left: 10px;
  margin-bottom: 20px;
  position: relative;
  color: #474751;
  div {
    width: 21px;
    height: 21px;
    background-color: #87888d;
    position: absolute;
    top: -6px;
    left: -17px;
    border-radius: 50%;
    z-index: -999;
  }
`;
