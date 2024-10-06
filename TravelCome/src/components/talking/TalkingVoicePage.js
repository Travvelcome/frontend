import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as TalkingIcon } from "../../assets/talking/TalkingIcon.svg";
import { ReactComponent as TalkingClose } from "../../assets/talking/TalkingClose.svg";
import { ReactComponent as TalkingVoiceBtn } from "../../assets/talking/TalkingVoiceBtn.svg";
import { ReactComponent as TalkingLock } from "../../assets/talking/TalkingLock.svg";
import LoadingTalking from "../layout/LoadingTalking";
import { useSpeechRecognition } from "react-speech-kit";
//import { getSpeech } from "./utils/getSpeech";

const TalkingVoicePage = () => {
  const navigate = useNavigate();

  // 음성인식(STT)

  //playBtn
  const [isPlay, setIsPlay] = useState(true);
  const [me, setMe] = useState(""); // 내 질문 저장

  const PlayButton = () => {
    setIsPlay(!isPlay);
  };
  const StopButton = () => {
    setIsPlay(!isPlay);
    setMe(value);
    console.log(value);
  };

  const [value, setValue] = useState("결과");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  // TTS -- 모바일에서 안됨...
  const [value2, setValue2] = useState("드라이브 코스로도 유명하다고 해요!");

  /*
  //음성 변환 목소리 preload
  useEffect(() => {
    window.speechSynthesis.getVoices();
  }, []);

  const handleInput = (e) => {
    const { value2 } = e.target;
    //setValue(value2);
  };
*/
  const handleButton = () => {
    //getSpeech(value2);
  };

  return (
    <Container>
      <TitleBox>
        <Title>용두암</Title>
      </TitleBox>
      <IconBox>
        <TalkingIcon id="icon" />
      </IconBox>
      <ChattingBox>
        <AI onClick={handleButton}>드라이브 코스로도 유명하다고 해요!</AI>
        <Me>{value}</Me>
      </ChattingBox>
      {listening && <LoadingTalking />}
      <MenuBox>
        <TalkingClose id="menu" />
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
  border: 1px solid #000;
`;
const Title = styled.div`
  //border: 1px solid #000;
  width: 120px;
  height: 25px;
  text-align: center;
  line-height: 25px;
  font-size: 28px;
  color: #000;
  margin: 0px auto;
`;
const IconBox = styled.div`
  font-family: "JejuGothic";
  margin: 0 auto;
  text-align: center;
  border: 1px solid #000;
`;
const ChattingBox = styled.div`
  font-family: "JejuGothic";
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
  color: #000;
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
