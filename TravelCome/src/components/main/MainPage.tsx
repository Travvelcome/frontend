import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import RecommendList from "./RecommendList";
import { ReactComponent as Horse } from "../../assets/main/Horse.svg";
import { ReactComponent as FrequencyIcon } from "../../assets/common/Stamp.svg";
import { ReactComponent as Arrow } from "../../assets/common/Arrow.svg";
import { BiCurrentLocation } from "react-icons/bi";
import { getLandmarkFind } from "../../api/Landmark";

declare global {
  interface Window {
    kakao: any;
  }
}
const MainPage = () => {
  /*
  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(33.4996213, 126.5311884), //지도의 중심좌표.
      level: 6, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, []);
*/
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

  // 랜드마크 발견하기 연동
  const [landmarkList, setLandmarkList] = useState([]);

  const handleFindButton = async () => {
    try {
      const response = await getLandmarkFind();
      setLandmarkList(response);
      console.log("랜드마크 발견하기 :", landmarkList);
    } catch (error) {
      console.error("랜드마크 발견하기 오류:", error);
    }
  };

  return (
    <Container>
      <TitleBox>
        <Title>
          민지님, <br />
          어디로 떠날까요?
        </Title>
        <Frequency>
          <span>
            <Horse />
          </span>
        </Frequency>
      </TitleBox>
      <MapBox>
        <Map id="map"></Map>
        <FindButton onClick={handleFindButton}>발견하기</FindButton>
        <LocationButton onClick={getCurrentPosBtn}>
          <BiCurrentLocation />
        </LocationButton>
      </MapBox>
      <MessageBox>
        <Title2>
          <div></div>최근 대화
        </Title2>
        <More>더보기</More>
        <MessageListBox>
          <MessageList />
          <MessageList />
          <MessageList />
          <MessageList />
        </MessageListBox>
      </MessageBox>
      <RecommendBox>
        <Title2>
          <div></div>민지님만을 위한 추천
        </Title2>
        <More>더보기</More>
        <RecommendListBox>
          <RecommendList />
          <RecommendList />
          <RecommendList />
        </RecommendListBox>
      </RecommendBox>
      <Advertise>광고</Advertise>
      <FrequencyBox>
        <span id="icon">
          <FrequencyIcon />
        </span>
        <Score>
          1 <span>/ 20</span>
        </Score>
        <span id="arrow">
          <Arrow />
        </span>
        <Bar1></Bar1>
        <Bar2></Bar2>
      </FrequencyBox>
    </Container>
  );
};
export default MainPage;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 70px;
`;
const TitleBox = styled.div`
  position: relative;
  margin: 40px;
  margin-top: 40px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-family: "SanTokki";
  font-size: 24px;
  line-height: 40px;
  color: #ff6b00;
`;
const Frequency = styled.div`
  background-color: #fdac01;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  position: absolute;
  right: 0px;
  top: 10px;
  span {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 10px;
    left: 12px;
  }
`;
const MapBox = styled.div`
  width: 85%;
  height: 280px;
  margin: 0px auto;
  border: 3px dashed #ff6b00;
  position: relative;
  border-radius: 15px;
`;
const Map = styled.div`
  width: 95%;
  height: 260px;
  margin: 10px auto;
  border-radius: 15px;
`;
const FindButton = styled.div`
  width: 130px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-family: "JejuGothic";
  font-size: 17px;
  background-color: #999;
  color: #fff;
  opacity: 0.5;
  border-radius: 50px;
  position: absolute;
  bottom: 30px;
  left: 32%;
  z-index: 999;
  cursor: pointer;
`;
const LocationButton = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  line-height: 45px;
  color: #fdac01;
  text-align: center;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  bottom: 30px;
  left: 20px;
  z-index: 999;
  cursor: pointer;
`;
const MessageBox = styled.div`
  position: relative;
  margin: 20px;
  margin-top: 40px;
`;
const Title2 = styled.div`
  font-family: "SanTokki";
  font-size: 18px;
  div {
    width: 21px;
    height: 21px;
    position: absolute;
    top: -10px;
    left: -10px;
    border-radius: 50%;
    //border: 2px dashed #fdac01;
    background-color: #fdac01;
    z-index: -999;
  }
`;
const More = styled.div`
  font-family: "JejuGothic";
  font-size: 15px;
  position: absolute;
  right: 5px;
  top: 5px;
  cursor: pointer;
`;
const MessageListBox = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 30px;
  overflow: auto;
  white-space: nowrap;
`;
const RecommendBox = styled.div`
  position: relative;
  margin: 20px;
  margin-top: 40px;
`;
const RecommendListBox = styled.div`
  margin-top: 10px;
  width: 100%;
  overflow: auto;
  white-space: nowrap;
`;
const Advertise = styled.div`
  width: 100%;
  height: 90px;
  background-color: #f0f0f0;
  margin: 50px 0;
  text-align: center;
  line-height: 90px;
`;
const FrequencyBox = styled.div`
  width: 87%;
  height: 60px;
  margin: 0px auto;
  margin-bottom: 30px;
  background-color: #fdac01;
  border-radius: 10px;
  position: relative;
  #icon {
    position: absolute;
    top: 6px;
    left: 20px;
  }
  #arrow {
    position: absolute;
    top: 5.5px;
    right: 20px;
    cursor: pointer;
  }
`;
const Score = styled.div`
  position: absolute;
  top: 5px;
  left: 90px;
  color: #fff;
  font-family: "SanTokki";
  font-size: 25px;
  span {
    position: absolute;
    font-size: 15px;
    width: 40px;
    top: 8px;
    left: 20px;
  }
`;
const Bar1 = styled.div`
  width: 220px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
  opacity: 0.5;
`;
const Bar2 = styled.div`
  width: 11px;
  height: 13px;
  border-radius: 10px;
  position: absolute;
  bottom: 10px;
  left: 90px;
  background-color: #547853;
`;
