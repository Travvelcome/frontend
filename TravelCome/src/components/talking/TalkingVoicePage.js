import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TalkingIcon } from "../../assets/talking/TalkingIcon.svg";
import { ReactComponent as TalkingClose } from "../../assets/talking/TalkingClose.svg";
import { ReactComponent as TalkingVoiceBtn } from "../../assets/talking/TalkingVoiceBtn.svg";
import { ReactComponent as TalkingLock } from "../../assets/talking/TalkingLock.svg";
import LoadingTalking from "../layout/LoadingTalking";
import { useSpeechRecognition } from "react-speech-kit";
import { getSpeech } from "./utils/getSpeech";
import { postChat } from "../../api/Chat";

const TalkingVoicePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 개인정보
  const token = localStorage.getItem("token");

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  const [landmarkList2, setLandmarkList2] = useState(
    location.state.landmarkList2
  );
  const [chatList, setChatList] = useState(location.state.chatList);

  // 대화페이지로 state 이동
  const handleBack = async () => {
    // 뒤로가기 해도 state 유지될 수 있게 보내주기
    navigate("/frontend/talking/chatting", {
      state: { landmarkList2, chatList },
    });
  };

  // 1. 음성인식(STT)

  //playBtn
  const [isPlay, setIsPlay] = useState(true);
  const [me, setMe] = useState(""); // 내 질문 저장(보낼 메세지)
  const [value, setValue] = useState(""); // 화면에 보여주는 나의 목소리

  const PlayButton = () => {
    setIsPlay(!isPlay);
  };
  const StopButton = () => {
    setIsPlay(!isPlay);
    setMe(value);
    setValue("");

    handelPostChat(); // 채팅보내기
    console.log(value);
  };

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  // 2. 챗봇 대화 api 연동
  const [postChatList, setPostChatList] = useState([]); // 여러 메시지를 관리하는 배열로 변경
  const [voiceAI, setVoiceAI] = useState(); // ai 말하는 말 저장

  const handelPostChat = async () => {
    const data = {
      sent: me, // 보낼 메세지
      landmarkId: landmarkList2.landmarkId,
    };

    try {
      const response = await postChat(landmarkList2.landmarkId, token, data);

      // 채팅내역 저장
      setPostChatList((prevChatList) => [...prevChatList, response]);
      setVoiceAI(response.received);
      console.log("챗봇 목소리로 대화하기 :", response);
    } catch (error) {
      console.error("챗봇 목소리로 대화하기 오류:", error);
    }
  };

  // 3. TTS

  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  // 상태가 저장되면
  useEffect(() => {
    handleTTSButton();
    setVoiceAI("");
  }, [voiceAI]);

  const handleTTSButton = () => {
    getSpeech(voiceAI);
  };

  /*
  const handleInput = (e) => {
    const { value2 } = e.target;
    setValue(value2);
  };
  */

  return (
    <Container>
      <TitleBox>
        <Title>{landmarkList2.title}</Title>
      </TitleBox>
      <IconBox>
        <TalkingIcon id="icon" />
      </IconBox>
      <ChattingBox onClick={handleTTSButton}>
        {postChatList.map((chat, index) => (
          <>
            <Me>{chat.sent}</Me>
            <AI>{chat.received}</AI>
          </>
        ))}
      </ChattingBox>
      <MyVoice>{value}</MyVoice>
      {listening && <LoadingTalking />}
      <MenuBox>
        <TalkingClose id="menu" onClick={handleBack} />
        {isPlay ? (
          <TalkingVoiceBtn
            id="menu"
            onClick={() => PlayButton()}
            onMouseDown={listen}
          />
        ) : (
          <TalkingVoiceBtn
            id="menu"
            onClick={() => StopButton()}
            onMouseDown={stop}
          />
        )}
        <TalkingLock id="menu" />
      </MenuBox>
    </Container>
  );
};
export default TalkingVoicePage;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffc692;
  position: relative;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  padding: 20px 25px;
`;
const Title = styled.div`
  width: 120px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 28px;
  color: #000;
  margin: 0px auto;
  margin-top: 5px;
`;
const IconBox = styled.div`
  font-family: "JejuGothic";
  margin: 0 auto;
  text-align: center;
`;
const ChattingBox = styled.div`
  font-family: "JejuGothic";
  height: 30%;
  //border: 1px solid #111;
  overflow: auto;
  white-space: nowrap;
`;
const MyVoice = styled.div`
  width: max-content;
  max-width: 250px;
  min-width: 100px;
  height: max-content;
  min-height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 24px;
  line-height: 30px;
  border-radius: 30px;
  color: #000;
  white-space: wrap;
  background-color: rgb(0, 0, 0, 0.1);
`;
const AI = styled.div`
  width: max-content;
  max-width: 220px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 24px;
  line-height: 30px;
  border-radius: 30px;
  color: #000;
  white-space: wrap;
`;
const Me = styled.div`
  width: max-content;
  max-width: 220px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 25px;
  margin-left: auto; // 오른쪽 정렬
  font-family: "JejuGothic";
  font-size: 24px;
  line-height: 30px;
  border-radius: 30px;
  color: rgb(0, 0, 0, 0.6);
  white-space: wrap;
`;
const MenuBox = styled.div`
  width: 100vw;
  height: 135px;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 25px;
  z-index: 99;

  #menu {
    cursor: pointer;
    margin: auto 0;
  }
  div {
    font-size: 50px;
    cursor: pointer;
    margin: auto 0;
    z-index: 999;
  }
`;
