import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MessageList from "./MessageList";
import RecommendList from "./RecommendList";
import { ReactComponent as Horse } from "../../assets/main/Horse.svg";
import { BiCurrentLocation } from "react-icons/bi";
import { getLandmarkFind, getLandmarkRecommend } from "../../api/Landmark";
import EventBanner from "./EventBanner";
import { useNavigate } from "react-router-dom";
import { getChatList } from "../../api/Chat";
import StampComponent from "./StampComponent";
import myLocation from "../../assets/common/Location.svg";
import jejuIcon from "../../assets/common/JejuLocation.png";

declare global {
  interface Window {
    kakao: any;
  }
}

interface DataItem {
  landmarkTitle: string;
}

interface DataItemRecommend {
  landmarkId: number;
  title: string;
  categories: string[];
  imageUrl: string;
  distance: number;
}

const MainPage = () => {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  // 1) 카카오맵 불러오기
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        // 위치 : 성산일출봉 부근
        center: new window.kakao.maps.LatLng(33.462956, 126.932747),
        level: 8,
      };

      // 마커 커스텀
      const myImageSize = new window.kakao.maps.Size(24, 35); // 마커 이미지 사이즈
      const myImageSrc = myLocation; // 마커 이미지 경로 (사용자 설정)
      const myMarkerImage = new window.kakao.maps.MarkerImage(
        myImageSrc,
        myImageSize
      );

      // 마커 생성
      const position = new window.kakao.maps.LatLng(33.462956, 126.932747);
      const newMarker = new window.kakao.maps.Marker({
        position: position,
        map: map,
        image: myMarkerImage, // 마커 이미지 설정
      });

      setMarker(newMarker);
      setMap(new window.kakao.maps.Map(container, options));
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
    var jejuPosition = new window.kakao.maps.LatLng(33.462956, 126.932747);
    // 해당 위치로 이동
    map.panTo(jejuPosition);

    // 기존 마커를 제거하고 새로운 마커를 넣는다.
    marker.setMap(null);
    marker.setPosition(jejuPosition);
    marker.setMap(map);
  };
  //------------------ 지도 -------------------

  // 개인정보 가져오기
  const nickname = localStorage.getItem("nickname");
  const token = localStorage.getItem("token");
  const profileImageUrl = localStorage.getItem("profileImageUrl");

  // 최근 대화 api 연동(완료)
  const [landmarkTitle, setLandmarkTitle] = useState<DataItem[]>([]);

  const fetchChattingHistory = async () => {
    try {
      const response = await getChatList(token);
      setLandmarkTitle(response);
      console.log("최근 대화 목록 불러오기 :", response);
    } catch (error) {
      console.error("최근 대화 목록 불러오기 오류:", error);
    }
  };

  // 랜드마크 추천 api 연동(완료)
  const [landmarkRecommend, setLandmarkRecommend] = useState<
    DataItemRecommend[]
  >([]);

  const fetchLandmarkRecommend = async () => {
    try {
      const response = await getLandmarkRecommend(126.932747, 33.462956, token);
      setLandmarkRecommend(response.result);
      console.log("랜드마크 추천 불러오기 :", response.result);
    } catch (error) {
      console.error("랜드마크 추천 불러오기 오류:", error);
    }
  };
  useEffect(() => {
    fetchChattingHistory();
    fetchLandmarkRecommend();
  }, []);

  return (
    <Container>
      <TitleBox>
        <Title>
          {nickname}님, <br />
          어디로 떠날까요?
        </Title>
        <Frequency>
          {profileImageUrl ? (
            <img id="img" alt="메인 프로필 이미지" src={profileImageUrl} />
          ) : (
            <span>
              <Horse />
            </span>
          )}
        </Frequency>
      </TitleBox>
      <MapBox>
        <Map id="map"></Map>
        <FindButton>발견하기</FindButton>
        <LocationButton onClick={getCurrentPosBtn}>
          <BiCurrentLocation />
        </LocationButton>
        <JejuButton onClick={getJejuPosBtn}>
          <img id="img" alt="제주 아이콘" src={jejuIcon} />
        </JejuButton>
      </MapBox>
      <MessageBox>
        <Title2>
          <div></div>최근 대화
        </Title2>
        <More
          onClick={() => {
            window.location.href = "/frontend/chatting";
          }}
        >
          더보기
        </More>
        <MessageListBox>
          {landmarkTitle.map((request, index) => (
            <MessageList key={index} landmarkTitle={request.landmarkTitle} />
          ))}
        </MessageListBox>
      </MessageBox>
      <RecommendBox>
        <Title2>
          <div></div>
          {nickname}님만을 위한 추천
        </Title2>
        <More
          onClick={() => {
            window.location.href = "/frontend/search";
          }}
        >
          더보기
        </More>
        <RecommendListBox>
          {landmarkRecommend.map((request, index) => (
            <RecommendList
              key={index}
              landmarkId={request.landmarkId}
              title={request.title}
              categories={request.categories}
              imageUrl={request.imageUrl}
              distance={request.distance}
            />
          ))}
        </RecommendListBox>
      </RecommendBox>
      <EventBanner />
      <StampComponent />
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
  #img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50px;
  }
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
  //cursor: pointer;
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
const JejuButton = styled.div`
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
  right: 20px;
  z-index: 999;
  cursor: pointer;
  #img {
    margin-top: 4px;
  }
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
  font-size: 13px;
  color: #87888d;
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

  &::-webkit-scrollbar {
    display: none;
  }
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

  &::-webkit-scrollbar {
    display: none;
  }
`;
