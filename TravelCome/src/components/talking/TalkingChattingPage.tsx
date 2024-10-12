import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { RiHeadphoneFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import QuestionList from "./TalkingQuestionList2";
import { ReactComponent as TalkingHeadphone } from "../../assets/talking/TalkingHeadphone.svg";
import { getChatList, postChat, postChatTopic } from "../../api/Chat";

const TalkingChattingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 개인정보
  const token = localStorage.getItem("token");

  // 검색어
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: any) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
  };

  const [chatState, setChatState] = useState<any>();

  // 관심사 질문 추천 - 카테고리 api 연동
  const [landmarkList2, setLandmarkList2] = useState<any>([]);
  const [chatList, setChatList] = useState<any>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetchChatList();
  }, []);

  // AI 답변은 조금 늦게 보여주기
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
  });

  const fetchChatList = async () => {
    if (location.state) {
      setChatState(location.state);
      setLandmarkList2(location.state.landmarkList2);
      if (location.state.chatList) {
        setChatList(location.state.chatList);
      }
    }
  };

  const handleBack = async () => {
    // 뒤로가기 해도 state 유지될 수 있게 보내주기
    navigate("/frontend/talking", {
      state: { landmarkList2 },
    });
  };

  // 챗봇 대화 api 연동
  const [postChatList, setPostChatList] = useState<any[]>([]); // 여러 메시지를 관리하는 배열로 변경
  const [date, setDate] = useState("2024-00-00");

  const handelPostChat = async () => {
    const data = {
      sent: searchKeyword,
      landmarkId: landmarkList2.landmarkId,
    };

    try {
      const response = await postChat(landmarkList2.landmarkId, token, data);
      setDate(response.date.slice(0, 10));
      setPostChatList((prevChatList) => [...prevChatList, response]);
      console.log("챗봇 대화하기 :", response);
    } catch (error) {
      console.error("챗봇 대화하기 오류:", error);
    }
  };

  // 엔터키를 누르면 handelPostChat 호출
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handelPostChat(); // 엔터를 누를 때 대화 전송
      setSearchKeyword(""); // input창 비우기
    }
  };

  return (
    <Container>
      {!location.state && (
        <Background>
          무엇이든 대화 나눠요!
          <br />
          질문이 아니어도 괜찮아요.
        </Background>
      )}
      <TitleBox>
        <BackBtn onClick={handleBack}>
          <IoIosArrowBack />
        </BackBtn>
        <Title>{location.state.title}</Title>
        <hr />
      </TitleBox>
      <ChattingBox>
        {location.state.chatList && (
          <Day>
            <Date>{location.state.chatList.date.slice(0, 10)}</Date>
            <Me>
              {location.state.title}의 {location.state.tag.slice(3)}에 대한
              자세한 설명을 부탁해!
            </Me>
            {alert === false ? (
              <AI>{location.state.chatList.received}</AI>
            ) : (
              <AI>...</AI>
            )}
          </Day>
        )}
        {/* postChatList를 순회하며 여러 메시지를 렌더링 */}
        {postChatList.map((chat, index) => (
          <Day key={index}>
            <Date>{chat.date.slice(0, 10)}</Date>
            <Me>{chat.sent}</Me>
            <AI>{chat.received}</AI>
          </Day>
        ))}
      </ChattingBox>
      {/*<QuestionBox>
        <QuestionList />
        <QuestionList />
      </QuestionBox>*/}
      <MessageBox>
        <MessageBar>
          <MessageInput
            id="input"
            type="text"
            autoFocus
            placeholder="Message"
            value={searchKeyword}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} // 엔터키 감지
          />
        </MessageBar>
        <div
          id="voice-icon"
          onClick={() => {
            window.location.href = "/frontend/talking/voice";
          }}
        >
          <TalkingHeadphone />
        </div>
      </MessageBox>
    </Container>
  );
};
export default TalkingChattingPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Background = styled.div`
  font-family: "JejuGothic";
  width: 160px;
  text-align: center;
  position: fixed;
  top: 40%;
  left: 31%;
  font-size: 14px;
  color: rgb(135, 136, 141, 0.5);
  z-index: -999;
`;
const TitleBox = styled.div`
  font-family: "SanTokki";
  position: relative;
  padding: 25px;
  padding-bottom: 0px;
`;
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #474751;
  position: absolute;
  top: 20px;
  left: 25px;
  z-index: 999;
  cursor: pointer;
`;
const Title = styled.div`
  width: 250px;
  height: 25px;
  line-height: 25px;
  font-size: 28px;
  color: #ff6b00;
  margin: 0px auto;
  text-align: center;
  padding-bottom: 10px;
`;
const ChattingBox = styled.div`
  height: 80%;
  font-family: "JejuGothic";
  position: relative;
  padding: 10px;
  //border: 1px solid #111;

  overflow: auto;
  white-space: nowrap;
`;
const Day = styled.div`
  white-space: wrap;
  padding: 15px 0;
  //border: 1px solid #000;
`;
const Date = styled.div`
  font-family: "JejuGothic";
  font-size: 14px;
  color: #87888d;
  position: relative;
  text-align: center;
`;
const AI = styled.div`
  width: max-content;
  max-width: 250px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 20px;
  border-radius: 30px;
  color: #000;
  background-color: rgb(255, 107, 0, 0.4);
`;
const Me = styled.div`
  width: max-content;
  max-width: 250px;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  margin-left: auto; // 오른쪽 정렬
  padding: 15px 25px;
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 20px;
  border-radius: 30px;
  color: #fff;
  background-color: rgb(255, 107, 0, 0.8);
`; /*
const QuestionBox = styled.div`
  width: 100vw;
  font-family: "JejuGothic";
  position: absolute;
  bottom: 90px;
  overflow: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;*/
const MessageBox = styled.div`
  width: 100vw;
  background-color: #fff;
  font-family: "JejuGothic";
  position: fixed;
  bottom: 0px;
  left: 0px;
  padding: 20px 10px;
  padding-right: 60px;

  #voice-icon {
    width: 36px;
    height: 36px;
    color: #111;
    cursor: pointer;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    margin-left: 10px;
  }
`;
const MessageBar = styled.div`
  font-family: "JejuGothic";
  position: relative;
  width: 80%;
  height: 44px;
  border-radius: 30px;
  border: 1px solid #000;
  display: inline-block;
`;
const MessageInput = styled.input`
  font-family: "JejuGothic";
  width: 70%;
  height: 40px;
  border: none;
  margin-left: 20px;
  font-size: 15px;
  color: #333;
  &:focus {
    outline: none;
  }
`;
