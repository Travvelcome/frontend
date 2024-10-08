import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFilter } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { ReactComponent as Filter } from "../../assets/map/Filter.svg";
import { useNavigate } from "react-router-dom";
import MapFilterComponent from "./MapFilterComponent";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  // 1) 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(33.4996213, 126.5311884),
        level: 6,
      };

      setMap(new window.kakao.maps.Map(container, options));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  // 2) 현재 위치 함수
  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );
    // 지도를 이동 시킨다.
    map.panTo(currentPos);

    // 기존 마커를 제거하고 새로운 마커를 넣는다.
    marker.setMap(null);
    marker.setPosition(currentPos);
    marker.setMap(map);
  };

  const navigate = useNavigate();
  const handleClick = (path: string) => {
    navigate(path);
  };

  //관심사 필터창
  const [isOpen, setIsOpen] = useState(false);
  const FilterButton = () => {
    setIsOpen(true);
  };

  // 관심사 필터창 내용 상태 저장
  const [isFilter, setIsFilter] = useState<string>("관심사");

  return (
    <Container>
      <Map id="map"></Map>
      <BackBtn
        onClick={() => {
          window.location.href = "/frontend/main";
        }}
      >
        <IoIosArrowBack />
      </BackBtn>
      <FilterBtn
        onClick={() => FilterButton()}
        style={{
          backgroundColor:
            isFilter === "자연"
              ? "#547853"
              : isFilter === "지식"
              ? "#FF6B00"
              : isFilter === "문화"
              ? "#474751"
              : "#fff",
          color: isFilter === "관심사" ? "#000" : "#fff",
        }}
      >
        <span>
          <FaFilter />
        </span>{" "}
        {isFilter}
      </FilterBtn>
      <BtnBox>
        <LocationBtn onClick={getCurrentPosBtn}>
          <BiCurrentLocation />
        </LocationBtn>
        <SearchBtn onClick={() => handleClick("/frontend/search")}>
          <IoSearchSharp id="search" />
        </SearchBtn>
      </BtnBox>
      {isOpen && (
        <MapFilterComponent
          setIsFilter={setIsFilter}
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Container>
  );
};
export default MapPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Map = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const FilterBtn = styled.div`
  width: 90px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 14px;
  background-color: #fff;
  color: #111;
  border-radius: 16px;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 999;
  cursor: pointer;
  span {
    line-height: 32px;
  }
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 45px;
  color: #fdac01;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  left: 20px;
  z-index: 999;
  cursor: pointer;
`;
const BtnBox = styled.div`
  width: 180px;
  height: 65px;
  display: flex;
  justify-content: space-evenly;
  background-color: #e0e0e0;
  border-radius: 30px;
  position: absolute;
  top: 85%;
  left: 30%;
  z-index: 999;
`;

const LocationBtn = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
const SearchBtn = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
  #search {
    width: 80px;
    height: 35px;
    font-size: 30px;
    background-color: #fff;
    border-radius: 30px;
  }
`;
