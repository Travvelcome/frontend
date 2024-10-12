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
import myLocation from "../../assets/common/Location.svg";
import jejuIcon from "../../assets/common/JejuLocation.png";
import { getLandmarkMap } from "../../api/Landmark";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapPage = () => {
  // ---------------- 지도 --------------------
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  //지도에 표시할 좌표들
  const [landmarkMap, setLandmarkMap] = useState<any[]>([]);

  // 1) 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        // 위치 : 성산일출봉 부근
        center: new window.kakao.maps.LatLng(33.462956, 126.932747),
        level: 8,
      };

      // 지도 객체 생성
      const newMap = new window.kakao.maps.Map(container, options);
      setMap(newMap); // 지도 객체 상태 업데이트

      // 내 위치 마커 커스텀
      const myImageSize = new window.kakao.maps.Size(24, 35); // 마커 이미지 사이즈
      const myImageSrc = myLocation; // 마커 이미지 경로 (사용자 설정)
      const myMarkerImage = new window.kakao.maps.MarkerImage(
        myImageSrc,
        myImageSize
      );

      // 내 위치 마커 생성
      const position = new window.kakao.maps.LatLng(33.462956, 126.932747);
      const newMarker = new window.kakao.maps.Marker({
        position: position,
        map: map,
        image: myMarkerImage, // 마커 이미지 설정
      });

      setMarker(newMarker);

      fetchLandmarkMap();
      markLandmarkMap(newMap);
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
    const currentPos = new window.kakao.maps.LatLng(
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

  // 4) 테스트 위한 제주도 위치 설정
  const getJejuPosBtn = () => {
    // 제주 위치 마커
    var jejuPosition = new window.kakao.maps.LatLng(33.462956, 126.932747); // 기본위치(성동구청)
    // 해당 위치로 이동
    map.panTo(jejuPosition);

    // 기존 마커를 제거하고 새로운 마커를 넣는다.
    marker.setMap(null);
    marker.setPosition(jejuPosition);
    marker.setMap(map);
  };

  //------------------ 지도 -------------------

  // 토큰
  const token = localStorage.getItem("token");
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

  // 최초(관심사) 지도 랜드마크 조회 api 연동
  const fetchLandmarkMap = async () => {
    try {
      const response = await getLandmarkMap(token);
      setLandmarkMap(response.result);

      console.log("최초 랜드마크 좌표 불러오기 :", response.result);
    } catch (error) {
      console.error("최초 랜드마크 좌표 불러오기 오류:", error);
    }
  };

  // 지도에 마커 표시하기
  const markLandmarkMap = (map: any) => {
    // 좌표(landmarkMap)를 기반으로 positions 배열 생성
    var positions = landmarkMap.map((request) => ({
      latlng: new window.kakao.maps.LatLng(request.mapY, request.mapX),
    }));

    // 마커 이미지의 이미지 주소
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // positions 배열을 순회하면서 각 위치에 마커 생성
    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지 설정
      var imageSize = new window.kakao.maps.Size(24, 35); // 마커 이미지 사이즈
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커 생성
      var newMarker = new window.kakao.maps.Marker({
        map: map, // 마커가 표시될 지도
        position: positions[i].latlng, // 마커의 위치
        image: markerImage, // 마커 이미지
      });

      // 마커를 지도에 표시
      newMarker.setMap(map);
    }
  };

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
        <JejuBtn onClick={getJejuPosBtn}>
          <img id="img" alt="제주 아이콘" src={jejuIcon} />
        </JejuBtn>
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
  width: 220px;
  height: 65px;
  display: flex;
  justify-content: space-evenly;
  background-color: #e0e0e0;
  border-radius: 30px;
  position: absolute;
  top: 85%;
  left: 25%;
  z-index: 999;
`;

const LocationBtn = styled.div`
  font-size: 30px;
  line-height: 70px;
  color: #fdac01;
  cursor: pointer;
`;
const JejuBtn = styled.div`
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
